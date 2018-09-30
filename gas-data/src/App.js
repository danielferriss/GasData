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
        <h1>Urbana Motor Pool Analysis</h1>
        <p>This data visualization was made for Pyghack 2018. Our goal was to see if tax dollar usage is being maximized. To start everything off, we wrote a data cleaning program. There were cases in which drivers were reported a driving greater than 900,000 miles in between fill ups. While cleaning the data we tracked by card to see who was generating the most erroneous data. With this cleaned data, we checked gas prices to see if drivers were going to cheaper gas stations, found average fuel economies for different city departments, and more.</p>

      </div>
    );

    const Stations = () => (
      <div className='home'>
        <h1>Gas Stations</h1>
        <p>On this page we compare the average price at each gas station over the last week.</p>
        <p>Blue dots are within one standard deviation. Red are one SD more expensive. Larger dots means more traffic.</p>
        <div className='grid2'><Map/></div>
      </div>
    );

    const Departments = () => (
      <div className='home'>
        <h1>Inter Departmental Comparisons</h1>
        <p>PD = Police Department FD = Fire Department FI = Finance MP = Motor Pool CD = Community Development EX Executive Department PE = Parking Enforcement PW = Public Works</p>
        
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
            layout={ {width: 600, height: 600, title: 'Average Gas Bought (gallons)'} }
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
      <h1>Data by Driver</h1>
      <p>On this page we compare driver stats by Card ID</p>
       <div className='grid'>  
        <Plot
        data={[
          {type: 'bar', x: ['ID 97', 'ID 1', 'ID 24', 'ID 26', 'ID 23', 'ID 27', 'ID 29', 'ID 149', 'ID 28', 'ID 62'], y: [55, 51, 22, 13, 10, 9, 9, 9, 8, 8]},
        ]}
        layout={ {width: 600, height: 600, title: 'Yearly Odometer Anomalies'} }
        />

        <Plot
        data={[
          {type: 'bar', x: ['ID 24', 'ID 37', 'ID 13', 'ID 43', 'ID 15', 'ID 40', 'ID 5'], y: [26122, 24429, 20469, 20193, 19668, 16865, 16181]},
        ]}
        layout={ {width: 600, height: 600, title: 'Yearly Odometer Anomalies'} }
        />

        </div>
      </div>
    );

