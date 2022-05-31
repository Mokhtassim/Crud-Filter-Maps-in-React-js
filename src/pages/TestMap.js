import React,{useMemo} from "react";
import {useLoadScript, Marker, GoogleMap} from "@react-google-maps/api";
export default function TestMap() {
   

    const { isLoaded} = useLoadScript({
        "googleMapsApiKey": "Enter GOOGLE MAPS API KEY"
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