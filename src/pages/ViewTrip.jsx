import Hotel from '@/components/custom/Hotel';
import InfoSection from '@/components/custom/InfoSection';
import { db } from '@/services/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PlaceToVisit from '@/components/custom/PlaceToVisit';

const ViewTrip = () => {

    const {tripId} = useParams();
    const [trip, setTrip] = useState({});

    useEffect(() => {
        tripId && getTripData();
    },[tripId])

    const getTripData = async()=>{
        const docRef = doc(db, "Trips", tripId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // console.log(docSnap.data());
          setTrip(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
    }
    
    
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-55'>
        <InfoSection trip={trip}/>
        <Hotel trip={trip}/>
        <PlaceToVisit trip={trip}/>
    </div>
  )
}

export default ViewTrip