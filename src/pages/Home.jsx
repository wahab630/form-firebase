import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate()

  useEffect(()=>{
    let authToken = sessionStorage.getItem('auth')
   
    if(!authToken){
      navigate('/login')
    }
  },[]);

 
  function logout(){
    signOut(auth).then(() => {
      sessionStorage.removeItem('auth')
      navigate('/login')
  }).catch((error) => {
    // An error happened.
  });
  }
  return (
    <>
    <Button onClick={logout}>sign out</Button>
   
    </>
  )
}

export default Home