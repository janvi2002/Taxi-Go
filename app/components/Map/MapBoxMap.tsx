import React, { useContext, useEffect, useRef, useState } from "react";
import {Map, Marker} from 'react-map-gl';
import { UserLocationContext } from "@/context/UserLocationContext";
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from "./Markers";
import { DestinationCordiContext } from '@/context/DestinationCordiContext'
import { SourceCordiContext } from '@/context/SourceCordiContext'

const MapBoxMap = () => {
  const mapRef = useRef<any>();
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const {soruceCordinates,setSourceCordinates}=useContext(SourceCordiContext);
  const {destinationCordinates,setDestinationCordinates}
  =useContext(DestinationCordiContext);

  // for source
  useEffect(()=>{
    if(soruceCordinates){
      mapRef.current?.flyTo(
        {
          center:[
            soruceCordinates.lng,
            soruceCordinates.lat],
            duration:2500
        }
      )
    }
  },[soruceCordinates])
  // for destination
  useEffect(()=>{
    if(destinationCordinates){
      mapRef.current?.flyTo(
        {
          center:[
            destinationCordinates.lng,
            destinationCordinates.lat],
            duration:2500
        }
      )
    }
  },[destinationCordinates])

  return (
    <div className='p-5'>
      <h2 className="text-[20px] font-semibold">Map</h2>
      <div className='rounded-lg overflow-hidden mt-4'>
        {userLocation ? 
          <Map
          ref={mapRef}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: userLocation?.lng,
        latitude: userLocation?.lat,
        zoom: 14
      }}
      style={{width: '100%', height: 550, borderRadius:10}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Markers/>
        </Map> :
        null}
      

      </div>
    
    </div>
  )
}

export default MapBoxMap