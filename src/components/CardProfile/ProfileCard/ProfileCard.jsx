import React, {useEffect, useState} from 'react';
import '../CardProfile.css'
import {Link} from 'react-router-dom'
import * as profileAPI from '../../../services/profile-api'
import { Component } from 'react';



class ProfileCard extends Component{
  state={
    profile:[]
  }
  
  async componentDidMount(){
    const user = await profileAPI.edit()
    this.setState({user:user})
  }
render(){
  const user= this.state.profile
 return(
     <div className="profilePic">
  <label className="custom-file-upload fas">
    <div className="img-wrap" >
      <img className='userProfile' for="photo-upload" src={user.imageUrl}/>
    </div>
  </label>
  <div className='inputProfile'>
    <div className="name">{user.name}</div>
    <div className="status">{user.status}</div>
    <div className='dream'>{user._dream}</div>
    <div className='favorite'>{user._favorite}</div>
  <Link to='/profile/edit' state={user}> <button type="submit" className="edit">   Edit Profile </button></Link>
  </div>
</div>
 )   
}
}

export default ProfileCard
