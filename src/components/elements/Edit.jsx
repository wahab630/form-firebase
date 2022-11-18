import React,{useState} from 'react'
import { TextField } from "@mui/material";
import { doc, setDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import {db} from '../../Firebase'

const Edit = () => {
    const {id} = useParams()// params ma id di ha?
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");  
  
  const updateUser = () => {
    setDoc(doc(db, "user", id), {
        name,
        address
    })
  }
  
  return (

    <>
    <div className="container">
        <div className="row">
        <div className="col-lg-6 border mx-auto my-5 text-center">
            <br />
            <TextField
              id="name"
              label="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <br />
            <br className="my-5" />
            <TextField
              id="address"
              label="address"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
            />
            <br />  
            <br />
            <button className="btn btn-warning" onClick={updateUser}>
              Update
            </button>
            <br />
            <br />
            
          </div>
        </div>
    </div>
    </>
  )
}

export default Edit