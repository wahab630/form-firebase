import React from 'react'
import { Button as MButton } from "@mui/material";

const Button = (props) => {
  return (
    <MButton variant="contained" >
       {props.title}
    </MButton>
  )
}

export default Button