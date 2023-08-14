import React from 'react'
import { Card, CardContent, CardMedia, Checkbox, Container, Typography,Grid, Button } from '@mui/material';

const FinalProduct = ({assembled}) => {
  return (
    <div>
      <h2>Final product</h2>
      {assembled && assembled.map((part,index)=>(
        <div className="image" style={{width: 'auto'}} key={index}>
          <CardMedia
          style={{marginLeft: 300,height: 200,width: 'auto'}}
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
