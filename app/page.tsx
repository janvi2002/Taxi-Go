"use client"
import { UserButton } from "@clerk/nextjs";
import React ,{useState,useEffect} from "react";
import Booking from "./components/Booking/Booking";
import MapBoxMap from "./components/Map/MapBoxMap";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceCordiContext } from "@/context/SourceCordiContext";
import { DestinationCordiContext } from "@/context/DestinationCordiContext";
export default function Home() {
  const [userLocation,setUserLocation]=useState<any>();
  const [soruceCordinates,setSourceCordinates]=useState<any>([]);
  const [destinationCordinates,setDestinationCordinates]=useState<any>([]);
  useEffect(()=>{
    getUserLocation();
  },[])

  const getUserLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(pos){
      setUserLocation({
        lat:pos.coords.latitude,
        lng:pos.coords.longitude
      })
    })
  }
  return (
    <div>
      <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
        <SourceCordiContext.Provider value={{soruceCordinates,setSourceCordinates}}>
        <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
        <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <Booking />
        </div>
        <div className="col-span-2 order-first md:order-last">
          <MapBoxMap />
        </div>
      </div>
        </DestinationCordiContext.Provider>
        </SourceCordiContext.Provider>
      
      </UserLocationContext.Provider>
      
    </div>
  );
}
