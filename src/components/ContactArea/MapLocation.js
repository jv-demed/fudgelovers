import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

<MapContainer center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

// import { Component } from 'react';
// import { Map, TileLayer } from 'react-leaflet';

// class MapComponent extends Component{
//     state = {
//         lat: 55.70,
//         lng: 37.53,
//         zoom: 10
//     };

//     render(){
//         let center = [this.state.lat, this.state.lng];
//         return(
//             <Map zoom={this.state.zoom} center={center}>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//             </Map>
//         )
//     }
// }

// export default MapComponent