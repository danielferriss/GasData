import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.1106, lng:-88.2073 } }
        defaultZoom = { 13 }
      >
      <Marker
      position={{ lat: 40.1106, lng: -88.2073 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title= { 'name' }
    />
      <Marker
      position={{ lat: 40.11, lng: -88.2073 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title= { 'name' }
    />
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;