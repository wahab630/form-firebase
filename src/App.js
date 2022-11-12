import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import {  Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Base from "./components/layouts/Base";
// import Home from './pages/Home';
import Forms from "./components/elements/Forms";
import { app, db } from "./Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate()
  const authentication  =getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAction = (id) => {
    // console.log(id);
    if(id===2){
      createUserWithEmailAndPassword(authentication,email,password).then(
        (res)=>{
        sessionStorage.setItem('auth', res._tokenResponse.refreshToken)
        navigate('/')
        addDoc(collection(db, "users"), {
          email, password
        }).then(() => console.log('data saved'))//.catch(e => console.log('error while storing', e))
      }).catch(e =>{
        if(e.code== "auth/wrong-password"){
          toast.error('please check your password')
        }
        if(e.code== "auth/user-not-found"){
          toast.error('please check your email ')
        }
      });
      // .catch(e => {
      //   alert('error')
      //   console.log(e)
      // })
      
    }
    if(id===1){
      signInWithEmailAndPassword(authentication,email,password).then(
        (res)=>{
          sessionStorage.setItem('auth', res._tokenResponse.refreshToken)
          navigate('/')
        }).catch(e =>{
          if(e.code== "auth/wrong-password"){
            toast.error('please check your password')
          }
          if(e.code== "auth/user-not-found"){
            toast.error('please check your ')
          }
        });


        // .catch(e => {
        //   alert('error')
        //   console.log(e)
        // })
      
    }
  };

  return (
    <>
      <>
        <Base>
        <ToastContainer />
          <Routes>
            <Route index path='/' element={ <Home/>} />    
            <Route
              path="/login"
              element={
                <Forms
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(1)}
                  title="Login"
                />
              }
            ></Route>
            <Route
              path="/register"
              element={
                <Forms
                  setEmail={setEmail}
                  setPassword={setPassword}
                  handleAction={() => handleAction(2)}
                  title="Register"
                />
              }
            ></Route>
          </Routes>
        </Base>
      </>
    </>
  );
}

export default App;
