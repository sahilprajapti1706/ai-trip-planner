import React from "react";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";

const Hotel = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-5 mb-5">Hotel Recommendation</h2>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trip?.tripData?.travelPlan?.hotels?.map((hotel, idx) => (
            <div className="cursor-pointer" key={idx}>
                <HotelCard hotel={hotel}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
