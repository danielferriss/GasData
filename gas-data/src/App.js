import React, { Component } from 'react';
import './App.css'
import './Fonts/FontSheet.css'
import './aboutgrid.css'
import Map from './components/Map.js'
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
    <div>
      <Navigation />
      <Main />
    </div>


    );
  }
}
export default App;
    const Navigation = () => (
      <nav>
        <ul>
          <li><NavLink exact activeClassName="current" to='/'>About</NavLink></li>
          <li><NavLink exact activeClassName="current" to='stations'>Gas Stations</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/departments'>Departments</NavLink></li>
          <li><NavLink exact activeClassName="current" to='/drivers'>Drivers</NavLink></li>
        </ul>
      </nav>
    );
    const Main = () => (
      <Switch>
        <Route exact path='/' component={About}></Route>
        <Route exact path='/stations' component={Stations}></Route>
        <Route exact path='/departments' component={Departments}></Route>
        <Route exact path='/drivers' component={Drivers}></Route>
      </Switch>
    );
    const About = () => (
      <div className='home'>
        <h1>Welcome to my portfolio website</h1>
        <p> Feel free to browse around and learn more about me.</p>
      </div>
    );

    const Stations = () => (
      <div className='about'>
        <h1>About Me</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        <div className='grid'><Map val={'akkhasdksadkh'}/></div>
      </div>
    );

    const Departments = () => (
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
      </div>
    );

    const Drivers = () => (
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
      </div>
    );

