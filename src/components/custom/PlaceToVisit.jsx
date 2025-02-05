import React from 'react'
import PlaceCard from './PlaceCard';

const PlaceToVisit = ({ trip }) => {

  

    const itinerary = trip?.tripData?.travelPlan?.itinerary;
    // console.log(itinerary)
    
  return (
    <div className='mt-8'>
      <h2 className='font-bold text-2xl mb-4'>Your Personalised Itinerary</h2>
      <div>
        {
            itinerary && Object.keys(itinerary).sort().map((day, idx) => (
                // console.log(itinerary[day])
                 <div>
                    
                        <h2 className='font-bold text-lg mt-6'>Day {idx+1}</h2>
                        <h3 className='font-semibold text-gray-700'>Theme : {itinerary[day].theme}</h3>
                    
                    
                    {
                        itinerary[day].plan.map((place,placeIdx)=>(
                          <div key={placeIdx}>
                            <PlaceCard place={place} />
                          </div>
                        ))
                    }

                 </div>
            ))
        }
      </div>
    </div>
  )
}

export default PlaceToVisit