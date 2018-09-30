import React, { Component } from 'react';
import './style.css'
import './Fonts/FontSheet.css'
import './aboutgrid.css'
import Map from './components/Map.js'

// AIzaSyC8VF_04TOfcMpc6pQhDC7D3LlDkrX91jc

class App extends Component {

  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8VF_04TOfcMpc6pQhDC7D3LlDkrX91jc"></script>
          <h1 className="App-title">PHL33T</h1>
        </header>
      </div>
      <nav id = "navbar"> </nav>
    <script src="navbar.js"></script>


    <div class = "grid">
      <div>
        What is PHL33T?
      </div>
      <div>
        IMAGE WILL GO HERE
      </div>
      <div>
        This is our project for PygHack.  We chose to work with the Fleet fuel data to...
      </div>
              <Map val={'akkhasdksadkh'}/>
    </div>
    </div>


    );
  }
}

export default App;
