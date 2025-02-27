import { getPlaceDetails } from '@/services/GlobalAPI';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const HotelCard = ({hotel}) => {

    const [photoUrl, setPhotoUrl] = useState();
        
        useEffect(() => {
            hotel && getPlacePhoto();
        },[hotel])
        
        const data = {
          textQuery: hotel.hotelName
        }
      
        const getPlacePhoto = async() => {
          const result = await getPlaceDetails(data).then(res => {
            // console.log(res.data.places[0].photos[3].name);
            const photoName = res.data.places[0].photos[3].name;
            const url = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=400&maxWidthPx=1000&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
            setPhotoUrl(url);
            // console.log(url);
          })
        }
    
    
  return (
    <div>
         <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName}+${hotel?.hotelAddress}`}  target="_blank" rel="noreferrer">
              <img
                src={photoUrl}
                alt=""
                className="rounded-xl hover:scale-105 transition-all duration-100 w-96 h-64"
              />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium">{hotel.hotelName}</h2>
                <h2 className="font-medium text-xs text-gray-500">
                  📍{hotel.hotelAddress}
                </h2>
                <h2 className="font-medium text-sm ">💰{hotel.price}</h2>
                <h2 className="font-medium text-sm ">
                  ⭐ {hotel.rating} stars
                </h2>
              </div>
            </Link>
    </div>
  )
}

export default HotelCard