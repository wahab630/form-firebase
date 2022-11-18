import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase";
import { Link } from "react-router-dom";

const Hero = () => {
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "user");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log("Document data:", data);
    };
    getUsers();
  });
  const Delete = (id) => {
    console.log(id);
    deleteDoc(doc(db, "user", id));
  };

  return (
    <>
      <div className="contaier">
        <div className="row">
          <div className="col-lg-8 mx-auto border my-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user) => {
                  return (
                    <tr>
                      <th scope="row">3</th>
                      <td> {user.name}</td>
                      <td>{user.address}</td>

                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => Delete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                      <Link to={`/edit/${user.id}`} className="btn btn-primary">
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
