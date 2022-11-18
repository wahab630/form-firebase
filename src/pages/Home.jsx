import { Button } from "@mui/material";
import { getStorage,ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {FaCamera} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { TextField } from "@mui/material";
import { db } from "../Firebase";
import { useNavigate, Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const Home = () => {
  
  const auth = getAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [ImageUpload, setImageUpload] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [progress, setprogress] = useState(0);


  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");

    if (!authToken) {
      navigate("/login");
    }
  }, []);
  const adduser = () => {
    // alert("hello");
    addDoc(collection(db, "user"), {
      name: name,
      address: address,
    });

    const storage = getStorage();

// Create the file metadata
// /** @type {any} */
// const metadata = {
//   contentType: 'image/jpeg'
// };

// Upload file and metadata to the object 'images/mountains.jpg'

const storageRef = ref(storage, 'images/', fileUrl.name );
const uploadTask = uploadBytesResumable(storageRef, fileUrl);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
  };

  function logout() {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("auth");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <>
    <div className="home">
    <div className="container">
        <div className="row">
          <div className="col-lg-6 home-center mx-auto  py-5 text-center">
            <h1>Login Successful</h1>
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
          
              <label>
                {progress < 1 ? (
                  <>
                    <input
                      type='file'
                      id='input-file'
                      className='form-control '
                    onChange={(e) => {setFileUrl(e.target.files[0])}}
                    />
                    <FaCamera size={30} /> <br />
                    <progress value={progress} max='100' />
                  </>
                ) : (
                  <img src={fileUrl} alt='...' />
                )}
              </label>
            <br />
            <br />
            <Button onClick={adduser}  variant="contained">
              Add user
            </Button>
            <br />
            <br />
            <Button variant="contained">
            <Link to="/hero" className="text-white text-decoration-none">
              Check User Details
            </Link> 
            </Button>
           
            <br />
            <br />
            <Button onClick={logout} variant="contained">sign out</Button>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Home;
