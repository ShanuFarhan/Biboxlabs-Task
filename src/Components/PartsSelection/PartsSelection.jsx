import React from 'react'
import { Card, CardContent, CardMedia, Checkbox, Container, Typography,Grid } from '@mui/material';

const PartsSelection = ({ selectedParts, onSelectPart, parts }) => {
  return (
    <Container>
    <Typography variant="h4" gutterBottom>
      SELECT PARTS
    </Typography>
    <Grid container spacing={3}>
      {parts.map((part) => (
        <Grid item xs={6} sm={4} md={3} key={part.id} >
          <Card
            variant="outlined"
            className={`part-card ${selectedParts.includes(part.id) ? 'selected' : ''}`}
            onClick={() => onSelectPart(part.id)}
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
              <Checkbox
                checked={selectedParts.includes(part.id)}
                onChange={() => onSelectPart(part.id)}
                color="primary"
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}

export default PartsSelection
