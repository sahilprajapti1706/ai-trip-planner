import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
import {  useNavigate } from 'react-router-dom';


const Header = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  
  const navigate = useNavigate();
  
  return (
    <div className='p-2 shadow-sm flex justify-between items-center'>
        <img src="/logo.svg" alt="" />
        <div>
          {
            user ? (
              <div className='flex items-center gap-5'>
                <Button variant="outline" className="rounded-xl">My Trips</Button>
                <Popover>
                  <PopoverTrigger>
                    <div className='flex items-center gap-2 cursor-pointer'>
                      <img src={user?.picture} alt="" className='rounded-full w-10 h-10'/>
                      <span>{user?.given_name}</span>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="text-center cursor-pointer">
                    <h2 onClick={()=>{
                      googleLogout();
                      localStorage.removeItem('user');
                      navigate('/');
                    }}>Logout</h2>
                  </PopoverContent>
                </Popover>

              </div>
            ) : (
            <Button> Sign In</Button>
            )
          }
            
        </div>
    </div>
  )
}

export default Header