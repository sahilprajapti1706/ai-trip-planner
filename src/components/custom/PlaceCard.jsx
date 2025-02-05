import React, { useEffect, useState } from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { getPlaceDetails } from '@/services/GlobalAPI';

const PlaceCard = ({place, key}) => {

  const [photoUrl, setPhotoUrl] = useState();
    
    useEffect(() => {
        place && getPlacePhoto();
    },[place])
    
    const data = {
      textQuery: place.placeName
    }
  
    const getPlacePhoto = async() => {
      const result = await getPlaceDetails(data).then(res => {
        // console.log(res.data.places[0].photos[3].name);
        const photoName = res.data.places[0].photos[3].name;
        const url = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=800&maxWidthPx=800&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
        setPhotoUrl(url);
        // console.log(url);
      })
    }

 
  
  return (
    <div key={key} className='my-5 border p-3 rounded-xl hover:shadow-lg cursor-pointer'>
       <div className='flex gap-8'>
            <img src={photoUrl} alt="" className='w-[140px] h-[130px] rounded-xl'/>
            
            <div className='flex flex-col gap-2 py-2 w-full'>
              <div className='flex justify-between items-center'>
                <h2 className='font-bold'>{place.placeName}</h2>
                <Link to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`} target='_blank'>
                  <Button> <FaMapMarkedAlt/> </Button>
                </Link>
              </div>
                <h2 className='text-gray-500 text-sm'>{place.placeDetails}</h2>
                              
                      <div className='flex gap-5 items-center'>
                            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500  text-xs md:text-sm">⏱️ Time to Travel : <span className='font-semibold'>{place.timeTravel} </span></h2>
                            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500  text-xs md:text-sm'>🎫 {place.ticketsPricing}</h2>
                      </div>
            </div>
       </div>
    </div>
  )
}

export default PlaceCard