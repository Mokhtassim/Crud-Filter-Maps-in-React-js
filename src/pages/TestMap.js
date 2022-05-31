import React,{useMemo} from "react";
import {useLoadScript, Marker, GoogleMap} from "@react-google-maps/api";
export default function TestMap() {
   

    const { isLoaded} = useLoadScript({
        "googleMapsApiKey": "AIzaSyBReYPol32CDtYAwG5702y6y5B-wppi9WY"
    })

    if(!isLoaded) 
    return <div>Loading...</div> ;
return <MapScript />;
    
}

const MapScript = () => {
    const center = useMemo(() => (
        {lat:33.57379585249515, 
            lng: -7.589739173640081}
        ),[])
return(
    <GoogleMap zoom={11} 
    center={center} 
    mapContainerClassName="map-container">
        <Marker position={center} />
    </GoogleMap>)
    
}
// AIzaSyA4bxMvLW7DVAQWS4slv8NKuwz7deZW2CI
// import React, { Component } from "react"
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// export class TestMap extends Component {
  
//   render() {
//     const mapStyles = {
//       width: '100%',
//       height: '100%',
//     };
//     return (
//         <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176}}
//         />
//     );
//   }
// }
 
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCT6p48bqjzPbTp1HRrjXJuqS73wDA0PsR4'
// })(TestMap);