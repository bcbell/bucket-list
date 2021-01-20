import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from '../Users/Users'
import "./App.css";
import Home from '../Home/Home'
import Profile from "../Profile/Profile"
import ViewTrips from '../Trips/ViewTrips/ViewTrips'
import AddTrips from '../Trips/AddTrips/AddTrips'
import Messages from '../Messages/Messages'
import POISearch from "../POISearch/POISearch";
import DiscussionPost from '../Messages/DiscussionPost/DiscussionPosts'
import Destinations from '../Messages/Destinations/Destinations'
import FooterButtons from '../../components/Buttons/FooterButtons/FooterButtons'
import Favorite from '../../pages/Favorites/Favorite'
import Messenger from '../../pages/SocketMessenger/Messenger'

import VanillaAddTrip from '../VanillaAddTrip/VanillaAddTrip'
import VanillaTripList from '../VanillaTripList/VanillaTripList'
import POIDetails from '../POIDetails/POIDetails'

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
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state
    
    return (
      <>
        <NavBar user={this.state.user} handleLogout={this.handleLogout}/>
        <FooterButtons/>
        <Route
          exact
          path="/"
          render={() => (<Home />)}
        />
        
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
       <Route 
          exact path='/profile'
          render={() => 
            <Profile
              user={this.state.user} />
              }
            /> 
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
            <Route exact path='/messenger'
            render={()=><Messenger  user={this.state.user} chatMessages={this.state.chat}/>}
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
            exact path = '/search/:id'
            render={({match}) => <POIDetails match={match}/>}
            />

      </>
    );
  }
}

export default App;
