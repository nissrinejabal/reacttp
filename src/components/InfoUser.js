import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import moment from 'moment'
export default class InfoUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: [],
            img:""  }
    }
    componentDidMount() {
axios.get(`/users/${this.props.match.params.id}`).then((res) => {  this.setState({  user:res.data})
     var src;
     if(this.state.user.photo){
     src = require(`../assets/${this.state.user.photo}`)
        } else{src=require(`../assets/image-not-found.jpg`) }
            this.setState({ img: src}) ;
          } ) }
    
    render() {
        return (
            <div className="container profile">
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                        <img src={this.state.img}  alt=""></img>  
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head ">
                             <h5>{this.state.user.username}  </h5>
                          <h6>{this.state.user.email} </h6>  <br/>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>  
                            </ul>
                             </div>  </div>
                    <div className="col-md-2">
                        <Link to={`/edit/${this.state.user._id}`} >
                        <button type="submit" className="profile-edit-btn" name="btnAddMore">Edit profile </button></Link>
                    </div> </div>
      <div className="row">
    <div className="col-md-4">
     <div className="profile-work">
        <p>News:</p>
     <input type="checkbox"  disabled checked={this.state.user.news}/> </div> </div>
         <div className="col-md-8">
     <div className="tab-content profile-tab" id="myTabContent">
    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
             <div className="row">
                  <div className="col-md-6">
                        <label>User Id</label> </div>
                  <div className="col-md-6">
       <p>{this.state.user._id}</p>  </div> </div>
       <div className="row">
            <div className="col-md-6">
              <label>Gender</label> </div>
                 <div className="col-md-6">
               <p>{this.state.user.gender}</p></div></div>
                         <div className="row">
                       <div className="col-md-6">
                            <label>dob</label></div>
               <div className="col-md-6">
<p>{ moment(this.state.user.dob).format('MMM-DD-YYYY')}</p></div> </div> </div></div> </div></div>
            </form></div>
        )
    }
}
