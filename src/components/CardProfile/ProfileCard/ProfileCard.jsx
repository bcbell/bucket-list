import React, {useEffect, useState} from 'react';
import '../CardProfile.css'
import {Link} from 'react-router-dom'
import  profileService from '../../../services/profile-api'
import { Component } from 'react';



class ProfileCard extends Component{
  state={
    profile:{
      id: '',
      name: '',
      status: "",
      dream: '',
      favorite: '',
      avatar: '',

    }
  }
  
  async componentDidMount(){
    const handleCreateUserInfo = await profileService.edit()
    this.setState({ handleCreateUserInfo})
console.log(handleCreateUserInfo.name)
  }
get
  
render(){
  const user =this.state.profile
  console.log(user.name.value)
 return(
     <div className="profilePic">
  <label className="custom-file-upload fas">
    <div className="img-wrap" >
      <img className='userProfile' for="photo-upload" src={user.src}/>
    </div>
  </label>
  <div key={user._id}  className='inputProfile'>
    <div key={user._id}  className="name">{user.name.value}</div>
    <div key={user._id} className='avatar'>{user.avatar}</div>
    <div key={user._id} className="status">{user.status}</div>
    <div key={user._id} className='dream'>{user._dream}</div>
    <div key={user._id} className='favorite'>{user.favorite}</div>
  <Link to='/profile/edit' state={user}> <button type="submit" className="edit">   Edit Profile </button></Link>
  </div>
</div>
 )   
}
}

export default ProfileCard
