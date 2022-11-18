import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { Box, TextField } from "@mui/material";

const Forms = ({ title, setEmail, setPassword, handleAction }) => {
  return (
    <>
      <div className="forms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="./assets/login page.jpg" alt="no" className=" img-fluid" />
            </div>
            <div className="col-lg-6   p-4  form-cards text-center ">
              <h1 className=" fw-bold">{title} Form</h1>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  variant="standard"
                />
                <br />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="standard"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                
                <Button title={title} handleAction={handleAction} className="w-50" />
                <br />
                <button className="btn w-50"> <Link to="/resetpassword" className="nav-link ">
                 Reset Password
                </Link></button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
