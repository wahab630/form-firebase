import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Base from "./components/layouts/Base";
// import Home from './pages/Home';
import Forms from "./components/elements/Forms";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const handleAction=(id)=>{
  console.log(id);
 };

  return (
    <>
      <Router>
        <Base>
          <Routes>
            {/* <Route index path='/' element={ <Home/>} ></Route>       */}
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
      </Router>
    </>
  );
}

export default App;
