import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SelectBudgetOptions, SelectTravelList, AI_PROMPT } from "@/data/data";
import { useToast } from "@/hooks/use-toast";
import { chatSession } from "@/services/AIModal";
import { db } from "@/services/FirebaseConfig";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { toast } = useToast();

  const login = useGoogleLogin({
    onSuccess: (response) => {
     getUserProfile(response);
    },
    onError: (error) => {
      // console.log(error);
    },
  })

  const getUserProfile = (tokenInfo) => {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}` ,{
        headers : {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: "application/json",
        }
      }).then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res?.data));
        setOpenDailog(false);
        generateTrip();
      })
     
  }

  const generateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (formData?.numberOfDays > 10) {
      toast({
        title: "Total Days Exceeds",
        description: "Days should be less than 10",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    const prompt = `Generate Travel Plan for Location : ${formData?.location?.label}, for ${formData?.numberOfDays} Days for ${formData?.traveler} with a ${formData?.budget} budget, give me Hotels options list with hotelName, hotelAddress, price, hotel, image url, geo-coordinates, rating, descriptions and suggest itinerary with placeName, place details, place image url , geo-coordinates, tickets pricing, time travel each of the location for ${formData?.numberOfDays} days with each day plan with best time to visit in JSON format`;

    const result = await chatSession.sendMessage(prompt);
    const tripInfo = JSON.parse(result?.response?.text());
    console.log(tripInfo);
    setLoading(false);
    saveTripToDB(tripInfo);
    };

    const saveTripToDB = async (tripData) => {
    setLoading(true);
    const docId = Date.now().toString();
    const user = JSON.parse(localStorage.getItem("user"));
    
     await setDoc(doc(db, "Trips", docId), {
      userSelection: formData,
      tripData: tripData,
      userEmail: user?.email,
      id: docId
     });
    setLoading(false);
    navigate(`/trip/${docId}`);
  }

  
  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-4xl ">Tell us your tarvel preference</h2>
      <p className="mt-3 text-gray-500 text-lg">
        Just provide some basic information and our trip planner will genrate a
        customized itinerary based on your prefernece
      </p>

      <div className="mt-14 flex flex-col gap-9">
        <div>
          <h2 className="text-xl my-3 font-medium">Where you wanna go?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning for?
          </h2>
          <Input
            placeholder={"Eg. 3"}
            type="number"
            onChange={(e) => {
              handleInputChange("numberOfDays", e.target.value);
            }}
          />
        </div>

        <div className="">
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  handleInputChange("budget", item.title);
                }}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                  formData?.budget == item.title && "shadow-lg border-black"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                </div>
                <div className="text-center">
                  <h2 className="text-sm text-gray-500">{item.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on travel with?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelList.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  handleInputChange("traveler", item.people);
                }}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                  formData?.traveler == item.people && "shadow-lg border-black"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                </div>
                <div className="text-center">
                  <h2 className="text-sm text-gray-500">{item.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <Button onClick={generateTrip} disabled={loading}>{loading ? "Generating..." : "Generate Trip"}</Button>
      </div> 

      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="logo" />
              <h2 className="font-bold text-lg mt-7 ">Sign in with Google</h2>
              <p>Sign in with Google for easy access to the app</p>
              <Button onClick={login} className="w-full mt-5">
                <img src="/google-icon.svg" alt="Google logo" className="inline-block mr-2 w-6 h-6" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;
