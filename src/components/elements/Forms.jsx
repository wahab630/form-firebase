import React from "react";
import Button from "./Button";
import { Box, TextField } from "@mui/material";

const Forms = ({ title, setEmail, setPassword, handleAction }) => {
  return (
    <>
      <div className="forms">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto border p-4 mt-5">
              <h1>{title} Form</h1>
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
                  variant="outlined"
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button title={title} handleAction={handleAction} />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
