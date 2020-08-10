import React, { Component } from 'react'
import axios from 'axios'
import Datatable from "./Datatable";
export default class Home extends Component {
constructor(props){
  super(props);
  this.state={
    data:[],
    total:0,
    size: 10,
    currentpage:1,
    searchKeyword:"",
  }
  this.handleChange = this.handleChange.bind(this);
  this.deleteUser = this.deleteUser.bind(this);
}
deleteUser(id) {
  if(window.confirm('are you sure')){ axios.delete('/users/'+id).then(res => console.log(res.data));
    window.location = '/';}
}
//////// fetch users///
fetchResults(pageNumber,size){
  //check if search box is empty then get all data /////
if(this.state.searchKeyword ===""){
    axios.get(`/users/${pageNumber}/${size}`).then((res) => {
      this.setState({data: res.data.users,total:res.data.count})
    })}
  //check if search box is  not empty then get searched data /////
  if(this.state.searchKeyword !== ""){
 axios.get(`/users/${pageNumber}/${size}?search=${this.state.searchKeyword}`).then((res) => {
   this.setState({data:res.data.users,total:res.data.count})
  }).catch(error=>{ this.setState({
  loading:false,
  message:'failed to fetch the data .try again '
   }) }) }}
  componentDidMount () { 
    ///// fetch page number 1 /// 
   this.fetchResults(this.state.currentpage,this.state.size);}
handleChange= async function(event) {
  const query=event.target.value;
  await this.setState({searchKeyword:query})
  this.fetchResults(this.state.currentpage,this.state.size)
 }
render() {
//     //////// get number of pages///////
   const pageNumbers = [];
 for (let i = 1; i <= Math.ceil(this.state.total/ this.state.size); i++) { pageNumbers.push(i);}
    return (
      <div>
        <div style={{display:'flex', justifyContent:'flex-end',margin:'1rem 2rem '}}>
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" name="searchkeyword"
     value={this.state.searchKeyword} onChange={this.handleChange}
      type="search" placeholder="Search" aria-label="Search"/>
    </form>
    </div>
<Datatable data={this.state.data} deleteUser={this.deleteUser}/>
<div>
 { pageNumbers.map(number => {
  return (
 <span key={number} className="mt-2 mr-2 btn btn-info "  onClick={() => this.fetchResults(number,this.state.size)} >{number}</span>
  );
})
} 
</div>
   </div>
    )
  }
}
