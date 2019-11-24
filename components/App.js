import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import LogIn from './auth/LogIn';
import SignUp from '../components/auth/SignUp'
import MovieDetails from './movies/MovieDetails';
import CreateList from './movies/CreateList';
import AllMovies from './movies/AllMovies';
import MyMovies from './movies/MyMovies';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={AllMovies} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/movies/:id' component={MovieDetails} />
            <Route path='/create' component={CreateList} />
            <Route path='/mylist' component={MyMovies} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
