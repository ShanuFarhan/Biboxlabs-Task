import React,{useState} from 'react'
import { Card, CardContent, CardMedia, Checkbox, Container, Typography,Grid, Button } from '@mui/material';
import {Link, useNavigate} from 'react-router-dom'
const PartsSelection = ({parts,handleCheckbox }) => {
  const navigate=useNavigate()
const handleContinue=()=>{
  navigate('/assemble')
}

  return (
    <Container>
    <Typography variant="h4" gutterBottom>
      SELECT PARTS
    </Typography>
    <Grid container spacing={3}>
      {parts&&parts.map((part) => (
        <Grid item xs={6} sm={4} md={3} key={part.id} >
          <Card
            variant="outlined"           
          >
            <CardMedia
              component="img"
              height="180px"
              width="20px"
              image={part.image}
              alt={part.name}
            />
            <CardContent>
              <Typography  variant="h6">{part.name}</Typography>
              {/* <Checkbox
                
                color="primary"
              /> */}
              <Button onClick={()=>handleCheckbox(part)} variant='contained'>ADD</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Link
        to={{
          pathname: "/assemble"
        }}
      >
        <Button onClick={handleContinue} variant="contained" color="primary">
          Continue
        </Button>
      </Link>
  </Container>
  )
}

export default PartsSelection
