import React from 'react'
import { getAuth, signOut } from "firebase/auth";

const Signout = () => {
    const auth = getAuth();
signOut(auth).then(() => {
  console.log("success");
}).catch((error) => {
  console.log("not found");
});

  return (
    <>
    <div className="container">
        <button onClick={logout}>signout</button>
    </div>
    </>
  )
}

export default Signout