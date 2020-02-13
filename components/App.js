import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import LogIn from './auth/LogIn';
import SignUp from '../components/auth/SignUp'
import MovieDetails from './movies/MovieDetails';
import CreateList from './movies/CreateList';
import AllMovies from './movies/AllMovies';
import MyMovies from './movies/MyMovies';
import Intro from './movies/Intro';
import MovieRate from './movies/MovieRate';

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
                <Route exact path='/all' component={AllMovies} />
                <Route path='/login' component={LogIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/movies/:id' component={MovieDetails} />
                <Route path='/create' component={CreateList} />
                <Route path='/mylist' component={MyMovies} />
              </Switch>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
