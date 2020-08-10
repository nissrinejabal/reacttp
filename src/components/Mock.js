import React, { Component } from 'react'
import axios from 'axios';
export default class Mock extends Component {
constructor(props){
  super(props)
  this.state = {
    user: [],
    data:[],
    total:0,
    size: 10,
    currentpage:1,
  }
  this.handleClick = this.handleClick.bind(this);
}
fetchResults(pageNumber,size){
    axios.get(`/users/${pageNumber}/${size}`).then((res) => {
      this.setState({data: res.data.users,total:res.data.count})
    })
}
componentDidMount(){
this.fetchResults(1,10)
}
handleClick(){
  const API = 'https://randomuser.me/api'
  fetch(API)
      .then((response) => response.json())
      .then((data) => {
          this.setState({
            user: data.results[0]
          })
  const User ={
   username: this.state.user.login.username,
  gender:this.state.user.gender,
  dob:this.state.user.dob.date,
  email:this.state.user.email
}
window.location='/mock'
axios.post("/users/add",User)
.then(res => console.log(res.data));
 }).catch(error => console.log('Error', error));
}
render() {
  return (
<div className="container">
  <div className="card border-0 shadow my-5">
    <div className="card-body p-5">
      <h1 className="font-weight-light text-center">Add User</h1>
      <div style= {{height: '400px'}}  >
         <div style={{display:'flex', justifyContent:'center'}} className="form-inline mt-5 ">
    <label>  peupler la collection« users » avec cent (100) utilisateurs chargés en utilisant l’api « fetch » àpartir du site « https://randomuser.me ».</label>
    <input className="form-control mt-5 mr-sm-2 disabled" type="text" placeholder={this.state.total} disabled/>
    <button  className='btn  mt-5' onClick={this.handleClick}
          disabled={this.state.total>=100} >   add New User  </button>
         </div>    
      </div>
    </div>
  </div>
</div>
    )}
}