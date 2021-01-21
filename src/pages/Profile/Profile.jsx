import React, { useState, useEffect }  from 'react'
import * as profileAPI from '../../services/profile-api'
import FollowButton from '../../components/Buttons/FollowButton/FollowButton'
import './Profile.css'
import Countdown from '../../components/Counter/Countdown'
import ProfileCard from '../../components/CardProfile/ProfileCard/ProfileCard'
import Calendar from '../../components/Calendar/Calendar'


const Profile = (props) => {
    const user = props.user

   

      return (
       
        <>
        <div className='profile'>
            <h1 key={user.id} className='profile'>{user.name}'s Bucket List</h1>
              
            <div className='userProfile'> 
                <div className= 'profilePicture'>  
                    <div className='follow'>
                         <FollowButton/>
                    </div>
                    <h2 className='userProfile'>{user.name}</h2>
                    <div className='profilePic'>
                       <ProfileCard name={user.name} imageUrl={user.avatar} status={user.status} dream={user.dream} favorite={user.favorite} bio={user.bio}/>
                        
                    </div>
                </div>
                
                <div className='countdownProfile'>
                 <Countdown/>
                 <br/>
                 <Calendar/>

                </div>
            </div>
        </div>
       
        </>
    )

}

  
    export default Profile