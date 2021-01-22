import React, {Component} from 'react';
import './CardProfile.css'
import {Link} from 'react-router-dom'
import {location} from 'react-router-dom'
import * as profileAPI from '../../services/profile-api'
import {useForm} from 'react-hook-form'
import { render } from '@testing-library/react';
 





const UserImgUpload =({
  onChange,src
})=>
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload" >
      <img className='userProfile' for="photo-upload" src={src}/>
    </div>
    <br/>
     <input className='chooseFile' id="photo-upload" type="file" onChange={onChange}/>

  </label>


const Name =({
  onChange,
  name
})=>
  <div className="field">
    <label className= 'cardProfile' htmlFor="name">
      name:
    </label>
    <input
      id="name"
      type="text"
      onChange={onChange}
      maxlength="20"
      value={name}
      required/>
  </div>


const Bio =({
  onChange,
  bio
})=>
<div className="field">
<label className= 'cardProfile' htmlFor="bio">
  Bio:
</label>
<textarea
  id="name"
  type="text"
  onChange={onChange}
  maxlength="500"
  value={bio}
  required/>
</div>

const Status =({
  onChange,
  status
})=>
  <div className="field">
    <label className='cardProfile' htmlFor="status">
      current status:
    </label>
    <select onChange={onChange}  value={status} >
      <option>Dreaming of a vacation</option>
      <option>Business Trip</option>
      <option>Weekend Getaway</option>
      <option>Honeymoon or Romantic Vacation</option>
      <option>Family Trip</option>
    </select>
    {/* <input 
      id="status" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={value} 
      placeholder="It's a nice day!" 
      required/> */}
  </div>
const Dream =({
  onChange,
  dream
})=>
  <div className="field">
    <label className='cardProfile' htmlFor="dream">
      dream destination:
    </label>
    <input 
      id="dream" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={dream} 
      placeholder="Bora Bora!" 
      />
  </div>

const Favorite =({
  onChange,
  favorite
})=>
  <div className="field">
    <label className='cardProfile' htmlFor="dream">
      favorite destination:
    </label>
    <input 
      id="favorite" 
      type="text" 
      onChange={onChange} 
      maxLength="35" 
      value={favorite} 
      placeholder="Africa!" 
      />
  </div>

const Profile =({
  onSubmit,
  src,
  name,
  bio,
  status,
  dream,
  favorite
})=>
  <div className="profilePic">
    <form className='cardProfile' onSubmit={onSubmit} >
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img className='userProfile' for="photo-upload" src={src}/>
        </div>
      </label>
      <div className='inputProfile'>
        <div className="name">{name}</div>
        <div className='stauts'>{status}</div>
        <div className='bio'>{bio}</div>
        <div className='status'>{dream}</div>
        <div className='favorite'>{favorite}</div>
      <button type="submit" className="edit"> Edit Profile </button>
      <Link to ={{pathname:'/profile'}} ><button>Cancel</button></Link>
      </div>
    </form>
  </div>


const Edit =({
  onSubmit,
  children,
})=>
  <div className="profilePic">
    <form  onSubmit={onSubmit}>
        {children} 
     <button type="submit" className="save">Save </button>
    </form>
  </div>

class CardProfile extends Component {

  state = {
    user: '',
    file: '',
    imgUrl: '',
    name:'',
    bio: '',
    status: '',
    dream: '',
    favorite: '',
    // active: 'edit',
    // invalidForm: false,
   
    
  }

  formRef= React.createRef()

  photoUpload = e =>{
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  editName = e =>{
    const name = e.target.value;
    const formData={...this.state.formData, [e.target.name]:e.target.name}
    this.setState({
      formData: formData,
      name,
    });
  }

  editBio = e => {
    const bio = e.target.value;
    const formData={...this.state.formData, [e.target.name]:e.target.bio}
    this.setState({
      formData: formData,
      bio,
    });
  }
  editStatus = e => {
    const status = e.target.value;
    const formData={...this.state.formData, [e.target.name]:e.target.status}
    this.setState({
      formData: formData,
      status,
    });
  }
  editDream = e => {
    const dream = e.target.value;
    const formData={...this.state.formData, [e.target.dream]:e.target.dream}
    this.setState({
      formData: formData,
      dream,
    });
  }
 

  editFavorite = e => {
    const favorite = e.target.value;
    const formData={...this.state.formData, [e.target.favorite]:e.target.favorite}
    this.setState({
      formData: formData,
      favorite,
    });
  }

  

  render() {
    const {imageUrl,
           name,
           bio,
           dream,
           status,
           favorite,
           } = this.state;
          //  active
           const handleSubmit= e =>{
             e.preventDefault()
    this.props.handleCreateUserInfo(this.state.formData)
  
    // let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
    // this.setState({
      // active: activeP,
    // })
  }

    
    return (
      <div>


        {/* {(active === 'edit')?(  */}
          <Edit onSubmit={handleSubmit}>
            <UserImgUpload onChange={this.photoUpload} src={imageUrl}/>
            <Name onChange={this.editName} name={name} value={name}/>
            <Status onChange={this.editStatus} value={status}/>
            <Bio onChange={this.editBio} value={bio}/>
            <Dream onChange={this.editDream} value={dream}/>
            <Favorite onChange={this.favorite} value={favorite}/>
          </Edit>
        {/* // ):(
        //   <Profile */}
        {/* //   onSubmit={handleSubmit}
        //     src={imageUrl}
        //     name={name}
        //     status={status}
        //     dream={dream}
        //     favorite={favorite}
        //     bio={bio}/>) */}
      </div>
    )
  }
// }
}












export default CardProfile