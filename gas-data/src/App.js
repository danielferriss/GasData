import React, { Component } from 'react';
import './App.css';
import './Fonts/FontSheet.css';
import './aboutgrid.css';
import Map from './components/Map.js';
import Department from './components/Department.js';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route } from 'react-router-dom';
import Plot from 'react-plotly.js';


import { VictoryPie } from 'victory';


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
      <div className='home'>
        <h1>Gas Stations</h1>
        <p>On this page we compare the average price at each gas station over the last week.</p>
        <div className='grid'><Map/></div>
      </div>
    );

    const Departments = () => (
      <div className='home'>
        <h1>Inter Departmental Comparisons</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
        <div className='grid'> 

        <Plot
        data={[
          {type: 'bar', x: ['PD', 'PW', 'Unassigned', 'MP', 'FD', 'CD', 'PE', 'EX'], y: [101.99, 129.13, 223.87, 151.7, 100.17, 217.04, 201.17, 208.64]},
        ]}
        layout={ {width: 600, height: 600, title: 'Average Distance Between Fillups (miles)'} }
        />

        <Plot
        data={[
          {type: 'bar', x: ['PD', 'PW', 'Unassigned', 'MP', 'FD', 'CD', 'PE', 'EX'], y: [10.63, 6.87, 16.55, 8.5, 6.5, 18.54, 24.19, 13.58]},
        ]}
        layout={ {width: 600, height: 600, title: 'Average Fuel Economy (mpg)'} }
        />

        <Plot
        data={[
          {type: 'bar', x: ['PD', 'PW', 'Unassigned', 'MP', 'FD', 'CD', 'PE', 'EX'], y: [9.11, 22.4, 15.52, 19.12, 18.91, 12.31, 8.38, 17.49]},
        ]}
        layout={ {width: 600, height: 600, title: 'Average Gas Bought (gallons'} }
        />

        <Plot
        data={[
          {type: 'bar', x: ['PD', 'PW', 'Unassigned', 'MP', 'FD', 'CD', 'PE', 'EX'], y: [73501.45, 75290.45, 2215.52, 15754.79, 27612.91, 2820.94, 2424.37, 3984.07]},
        ]}
        layout={ {width: 600, height: 600, title: 'Total Money Spent Yearly (dollars)'} }
        />


        </div>
      </div>
    );

    const Drivers = () => (
      <div className='home'>
        <h1>Contact Me</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
                <div className='grid'> 

        <Plot
        data={[
          {type: 'bar', x: ['ID 97', 'ID 1', 'ID 24', 'ID 26', 'ID 23', 'ID 27', 'ID 29', 'ID 149', 'ID 28', 'ID 62'], y: [55, 51, 22, 13, 10, 9, 9, 9, 8, 8]},
        ]}
        layout={ {width: 600, height: 600, title: 'Yearly Odometer Anomalies'} }
        />
        </div>
      </div>
    );

