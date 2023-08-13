import React from 'react'
import { Card, CardContent, CardMedia, Checkbox, Container, Typography,Grid, Button } from '@mui/material';

const FinalProduct = ({assembled}) => {
  return (
    <div>
      <h2>Final product</h2>
      {assembled && assembled.map((part)=>(
        <div className="image">
          <CardMedia
          style={{height: 200,width: 200}}
            component="img"
            image={part.image}
            alt={part.name}
          />
          
          </div>
     
      ))}
    </div>
  )
}

export default FinalProduct
