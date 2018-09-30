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
      position={{ lat: 40.1153841, lng: -88.18895309999999 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Urbana Farmtown' }
    />
      <Marker
      position={{ lat: 40.13026119999999, lng: -88.19700849999998 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Freedom Oil Co.' }
    />
      <Marker
      position={{ lat: 40.1157165, lng: -88.18228140000002 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Caseys Gen. Store 323' }
    />
      <Marker
      position={{ lat: 40.13338090000001, lng: -88.25878410000001 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Mach. 1 Food Shop 19' }
    />
      <Marker
      position={{ lat: 40.07382399999999 , lng: -88.24916100000002  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Thorntons #0385 Q' }
    />
      <Marker
      position={{ lat: 40.116098, lng: -88.2773459 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Thorntons #0386' }
    />
      <Marker
      position={{ lat: 40.1110275, lng: -88.21876729999997 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Circle K #1434' }
    />
      <Marker
      position={{ lat:40.05885529999999 , lng:-88.25148000000002  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Circle K #1400' }
    />
      <Marker
      position={{ lat: 40.3076943, lng: -88.1743156 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'BP 8608770' }
    />
      <Marker
      position={{ lat:40.2390213 , lng:-88.19000499999999  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Caseys Gen. Store 149' }
    />
      <Marker
      position={{ lat: 40.0860406, lng:-88.1873137  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Meijer 247' }
    />
      <Marker
      position={{ lat: 40.1162058-88.21325389999998, lng:  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Circle K #1413' }
    />
      <Marker
      position={{ lat:40.1125714 , lng: -88.27235840000003 }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Circle K #1399' }
    />
      <Marker
      position={{ lat:40.0950795 , lng:-88.19128490000003  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'BP 8617102' }
    />
      <Marker
      position={{ lat:40.112804 , lng:-88.20422889999998  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Schnucks Urbana Expr.' }
    />
      <Marker
      position={{ lat:40.1086496 , lng:-88.20463219999999  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'SZBD Inc.' }
    />
      <Marker
      position={{ lat:40.1160711 , lng:-88.22940549999998  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ 'Mac's Convenience Sto' }
    />
      <Marker
      position={{ lat: , lng:  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ '' }
    />
      <Marker
      position={{ lat: , lng:  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ '' }
    />
      <Marker
      position={{ lat: , lng:  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ '' }
    />
      <Marker
      position={{ lat: , lng:  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ '' }
    />
      <Marker
      position={{ lat: , lng:  }}
      icon={{ url: 'https://openclipart.org/image/2400px/svg_to_png/103027/1293960051.png', scaledSize: { width: 32, height: 32 }}}
      title={ '' }
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