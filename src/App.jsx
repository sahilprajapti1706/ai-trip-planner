import React from 'react'
import './App.css'
import { Routes, Route} from "react-router-dom"
import CreateTrip from './pages/CreateTrip'
import Home from './pages/Home'
import Header from './components/custom/Header'
import { Toaster } from "@/components/ui/toaster"
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './pages/ViewTrip'



const App = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_API_ID}>
            <Header />
            <Toaster/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/create-trip" element={<CreateTrip/>} />
              <Route path="/trip/:tripId" element={<ViewTrip/>} />
            </Routes>
    </GoogleOAuthProvider>;
    </div>
  )
}

export default App