import React, { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { IoIosSend } from "react-icons/io";
import { getPlaceDetails } from '@/services/GlobalAPI';

const InfoSection = ({trip}) => {

  const [photoUrl, setPhotoUrl] = useState();
  
  useEffect(() => {
      trip && getPlacePhoto();
  },[trip])
  
  const data = {
    textQuery: trip?.userSelection?.location?.label,
  }

  const getPlacePhoto = async() => {
    const result = await getPlaceDetails(data).then(res => {
      // console.log(res.data.places[0].photos[5].name);
      const photoName = res.data.places[0].photos[3].name;
      const url = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=1000&maxWidthPx=1000&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
      setPhotoUrl(url);
      console.log(url);
    })
  }
  
  return (
    <div>
      <img src={photoUrl} alt="" className="h-[350px] w-full object-cover rounded-xl" />

      <div className="flex justify-between items-center">
          <div className='my-5 flex flex-col gap-3'>
            <h2 className='font-bold text-3xl'>{trip?.userSelection?.location?.label}</h2>
            <div className='flex gap-5'>
              <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm '>📅 {trip?.userSelection?.numberOfDays} Day</h2>
              <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500  text-xs md:text-sm'>💰 {trip?.userSelection?.budget} Budget</h2>
              <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm'> 🧑‍🤝‍🧑No. of Traveller : {trip?.userSelection?.traveler} </h2>
            </div>
          </div>
          <Button>
              <IoIosSend />
          </Button>
      </div>
    </div>
  )
}

export default InfoSection