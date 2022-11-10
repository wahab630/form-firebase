import React from 'react'
import { Button as MButton } from "@mui/material";

const Button = ({title,handleAction}) => {
  return (
    <MButton variant="contained" onClick={handleAction} >
       {title}
    </MButton>
  )
}

export default Button