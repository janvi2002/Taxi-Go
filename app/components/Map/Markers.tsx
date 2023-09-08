import React, { useContext } from 'react'
import { UserLocationContext } from "@/context/UserLocationContext";
import {Map, Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DestinationCordiContext } from '@/context/DestinationCordiContext'
import { SourceCordiContext } from '@/context/SourceCordiContext'


const Markers = () => {
  const {soruceCordinates,setSourceCordinates}=useContext(SourceCordiContext);
  const {destinationCordinates,setDestinationCordinates}
  =useContext(DestinationCordiContext);
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
  return (
    <div>
      {/* for source */}
      {soruceCordinates.length!=0?  <Marker
    longitude={soruceCordinates?.lng}
    latitude ={soruceCordinates.lat}
    anchor="bottom">
      <img  className="w-8 h-8" src="./pin.png"/>
    </Marker> :null}
    {/* for destination */}
    {destinationCordinates.length!=0?  <Marker
    longitude={destinationCordinates?.lng}
    latitude ={destinationCordinates.lat}
    anchor="bottom">
      <img  className="w-8 h-8" src="./pin.png"/>
    </Marker> :null}
    </div>
  )
}

export default Markers