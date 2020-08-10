import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeNews=this.onChangeNews.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      gender: '',
      email: '',
      dob: new Date(),
      news:false,
      users: []
    }
  }
  componentDidMount() {
    axios.get(`/users/${this.props.match.params.id}`).then((res) => {
        this.setState({ 
          username: res.data.username,
          gender: res.data.gender,
          email: res.data.email,
          dob: new Date(res.data.dob),
          news:res.data.news
        })
      })
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeDob(date) {
    this.setState({
      dob: date
    });
  }
  onChangeNews(e) {
    this.setState({
      news:e.target.checked
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const User = {
      username: this.state.username,
      gender: this.state.gender,
      email: this.state.email,
      dob: this.state.dob,
      news:this.state.news
    };
    console.log(User);
    axios.put(`/users/update/${this.props.match.params.id}`,User)
     .then(res => console.log(res.data));
    window.location = '/';
  }
  render() {
    return (
      <div className="card border-0 shadow my-5">
         <h3  className="  text-center text-uppercase font-weight-bold mt-3">Edit User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label  className=" text-uppercase font-weight-bold ml-3 mt-3">Username: </label>
            <input style={{width:'40rem'}}className="form-control ml-3"value={this.state.username}
                onChange={this.onChangeUsername}>
                   </input>   
                 </div>
          <div className="form-group"> 
            <label  className=" text-uppercase font-weight-bold ml-3 mt-3">Gender: </label><br></br>
            <label className="radio-inline  text-uppercase font-weight-bold mr-2 ml-4"><input type="radio" name="optradio" 
  checked={this.state.gender==="female"} onChange={this.onChangeGender}  value="female" />female</label>
<label className="radio-inline text-uppercase font-weight-bold mr-2 ml-4"><input type="radio" name="optradio" 
       checked={this.state.gender==="male"}onChange={this.onChangeGender}value="male"/>male</label>
          </div>
          <div className="form-group">
            <label  className=" text-uppercase font-weight-bold ml-3 mt-3">Email: </label>
            <input 
      style={{width:'40rem'}}type="text" className="form-control ml-3" value={this.state.email}
                onChange={this.onChangeEmail} /></div>
          <div className="form-group">
            <label  className="text-uppercase font-weight-bold ml-3 mt-3">Date of birthday: </label>
            <br></br> <DatePicker  className="ml-3"style={{width:'40rem'}} selected={this.state.dob}
              onChange={this.onChangeDob} />  </div>
          <div className="form-group"> 
            <label  className=" text-uppercase font-weight-bold ml-3 mt-3">News: </label><br></br>
 <input className="form-check-input ml-3" type="checkbox" name="chekbox1"  checked={this.state.news}
                onChange={this.onChangeNews} />
          </div>
          <div className="form-group ">
 <input type="submit" value="Edit"   style={{width:'10rem'}} className="btn btn-primary mt-3 ml-3" />
          </div>
        </form> 
      </div>
    )
  }
}