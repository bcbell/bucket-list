import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import Home from '../Home/Home'
import EditProfile from "../Profile/EditProfile"
// import CardProfile from '../../components/CardProfile/CardProfile'
import Profile from '../Profile/Profile'
import ViewTrips from '../Trips/ViewTrips/ViewTrips'
import AddTrips from '../Trips/AddTrips/AddTrips'
import Messages from '../Messages/Messages'
import POISearch from "../POISearch/POISearch";
import DiscussionPost from '../Messages/DiscussionPost/DiscussionPosts'
import Destinations from '../Messages/Destinations/Destinations'
import FooterButtons from '../../components/Buttons/FooterButtons/FooterButtons'
import Favorite from '../../pages/Favorites/Favorite'
import Messenger from '../../pages/SocketMessenger/Messenger'
import JoinChat from '../../pages/SocketMessenger/JoinChat'
import VanillaAddTrip from '../VanillaAddTrip/VanillaAddTrip'
import VanillaTripList from '../VanillaTripList/VanillaTripList'
import POIDetails from '../POIDetails/POIDetails'
import VanillaEditTrip from "../VanillaEditTrip/VanillaEditTrip";
import MessageBoard from '../MessageBoard/MessageBoard'
import * as profileAPI from '../../services/profile-api'
import   * as userService from '../../services/userService.js'
import MessageDetails from '../MessageDetails/MessageDetails'

class App extends Component {
  state = {
    user: authService.getUser(),
   
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.create() });
  };

  // handleUpdateUser = async formData =>{
  //   const user = await userService.update(formData)
  //   this.setState(state =>({
  //     user: user,
  //   }), ()=> this.props.history.push('/profile'))
  // }
 handleCreateUserInfo= async formData=>{
   const profile= await profileAPI.update(this.state.user._id, formData)
   this.setState(profile)
  }
  
  // handleCreateUserInfo= async formData=>{
  //   const user= await profileService.create(this.state.user._id, formData)
  //   this.setState(user)
  //  }

  render() {
    const { user } = this.state
    
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <FooterButtons />
        <Route exact path='/' render={() => <Home />} />

        <Route
          exact
          path='/signup'
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path='/login'
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path='/users'
          render={() => (user ? <Users /> : <Redirect to='/login' />)}
        />
        <Route
          exact
          path='/profile'
          render={() => <Profile user={this.state.user} />}
        />
        <Route
          exact
          path='/addtrip'
          render={() => <AddTrips user={this.state.user} />}
        />
        <Route
          exact
          path='/trips'
          render={() => <ViewTrips user={this.state.user} />}
        />
        <Route
          exact
          path='/discussion'
          render={() => <Messages user={this.state.user} />}
        />
        <Route exact path='/search' render={() => <POISearch />} />
        <Route
          exact
          path='/discussion/:name'
          render={({ match }) => (
            <DiscussionPost match={match} user={this.state.user} />
          )}
        />
        <Route
          exact
          path='/destinations'
          render={({ match }) => (
            <Destinations match={match} user={this.state.user} />
          )}
        />
        <Route
          exact
          path='/destinations/:name'
          render={({ match }) => (
            <DiscussionPost match={match} user={this.state.user} />
          )}
        />
        <Route
          exact
          path='/favorites'
          render={() => <Favorite user={this.state.user} />}
        />

        <Route
          exact
          path='/vanilla'
          render={() =>
            authService.getUser() ? (
              <VanillaAddTrip user={this.state.user} />
            ) : (
              <Redirect to='/login' />
            )
          }
        />
       <Route 
          exact path='/profile/edit'
          render={({history, location}) => 
            <EditProfile
              user={this.state.user} history={history} handleCreateUserInfo={this.handleCreateUserInfo} location={location}/>
              }
            /> 
            <Route exact path='/profile'
            render={({match, location})=><Profile location={location} handleCreateUerInfo={this.handleCreateUserInfo} user={this.state.user}  match={match}/>
            }/>
            <Route exact path='/users/:user' render={({match})=> <Profile   match={match}/> }/>
  
            <Route 
          exact path='/addtrip'
          render={() => 
            <AddTrips 
              user={this.state.user} />
              }
            /> 
          <Route 
          exact path='/trips'
          render={() => 
            <ViewTrips 
              user={this.state.user} />
              }
            />
            <Route 
            exact path='/discussion'
            render={() => <Messages user={this.state.user} />}
            />
            <Route 
            exact path='/search'
            render={() => <POISearch />}
            />
            <Route
            exact path='/discussion/:name'
            render={({match})=>
            <DiscussionPost match={match} user={this.state.user}/>}
            />  
              <Route
            exact path='/destinations'
            render={({match})=>
            <Destinations match={match} user={this.state.user}/>}
            /> 
            <Route exact path='/destinations/:name' render={({match})=><DiscussionPost match={match} user={this.state.user}/>}
            />  
            <Route exact path='/favorites' render={()=><Favorite user={this.state.user}/>}
            />  
            <Route exact path='/messenger/:roomName'
            render={({match})=><Messenger component={Messenger} match={match} user={this.state.user}/>}
            />
            <Route exact path='/messenger' render={()=><JoinChat component={JoinChat} user={this.state.user}/>}
            />

           <Route 
             exact path='/vanilla'
             render={() => 
              authService.getUser() ?
              <VanillaAddTrip 
                user={this.state.user}  
              />
              : 
              <Redirect to='/login'/>
            }
          />
            <Route 
              exact path='/vanillatrips'
              render={() => 
                <VanillaTripList
                  user={this.state.user}
                />
              }
            />
            <Route 
             exact path='/edittrip'
             render={() => 
              <VanillaEditTrip />
            }
            />
            <Route 
            exact path = '/search/:id'
            render={({match}) => <POIDetails match={match}/>}
            />
            <Route 
            exact path='/messageBoard'
            render={()=> <MessageBoard user={this.state.user}/>}
            />
        <Route
          exact
          path='/vanillatrips'
          render={() => <VanillaTripList user={this.state.user} />}
        />
        <Route exact path='/edittrip' render={() => <VanillaEditTrip />} />
        <Route
          exact
          path='/search/:id'
          render={({ match }) => <POIDetails match={match} />}
        />
        <Route
          exact
          path='/messageBoard'
          render={({ history }) => (
            <MessageBoard history={history} user={this.state.user} />
          )}
        />
        <Route
          exact
          path='/messageBoard/:id'
          render={({ history, match }) => (
            <MessageDetails history={history} match={match} user={this.state.user} />
          )}
        />
      </>
    );
  }
}

export default App;
