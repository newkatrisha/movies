import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import LogIn from './auth/LogIn';
import SignUp from '../components/auth/SignUp'
import MovieDetails from './movies/MovieDetails';
import MyMovies from './movies/MyMovies';
import Intro from './movies/Intro';
import MovieRate from './movies/MovieRate';
import MovieList from './movies/MovieList';
import Recommend from './movies/Recommend';
import User from './auth/User';


class App extends React.Component {
  render() {
    console.log('here');
    return (
      <BrowserRouter>
        <div className="App">
            <div id="navbar">
              <Navbar />
            </div>
            <div id='content'>
              <Switch>
                <Route exact path='/' component={Intro} />
                <Route path='/rate' component={MovieRate} />
                <Route exact path='/all' component={MovieList} />
                <Route path='/login' component={LogIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/movies/:id' component={MovieDetails} />
                <Route path='/mylist' component={MyMovies} />
                <Route path='/recommend' component={Recommend} />
                <Route path='/users/:id' component={User} />
              </Switch>
            </div>
            <Footer />
          </div>
          
      </BrowserRouter>
    );
  }
}

export default App;
