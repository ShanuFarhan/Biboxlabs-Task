
import React from 'react';
import { Container, Typography, Grid, Paper, Divider, Button } from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Link, useNavigate } from 'react-router-dom';

const AssemblyScreen = ({ selectedParts,assembled,handleAssembled}) => {
  return (
      
    <Container maxWidth="md" sx={{ paddingTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Selected Items
      </Typography>
      
      <Grid container spacing={2}>
      <Droppable droppableId='selectedparts'>
      {(provided)=>(
          <div ref={provided.innerRef}
          {...provided.droppableProps}
          >
      <Paper style={{maxHeight: 300,maxWidth: 500, overflow: 'auto'}}>
        <Grid  item xs={6}>
          {selectedParts.map((item,index) => (
            
            <Paper
              index={index}
              key={item.id}
              elevation={3}
              sx={{maxWidth:500, marginBottom: 10, padding: 10, cursor: 'pointer' }}
              // onClick={() => handleItemClick(item)}
            >
              <Draggable key={item.id} draggableId={item.id.toString()} index={index}> 
            {(provided)=>(
              <div {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              >
              <img src={item.image} alt={item.name} style={{ maxWidth: '100%' }} />
              </div>
              )}
              </Draggable>
              <Typography variant="subtitle1">{item.name}</Typography>
            </Paper>
       
          ))}
        </Grid>
        </Paper>
        {provided.placeholder}
    </div>
          )}
    </Droppable>
        <Divider orientation="vertical" flexItem />
       
        <Grid  item xs={6} sx={{ marginLeft: 70}}>
        <Droppable droppableId='DroppedContainer'>
        {(provided)=>(
          <div ref={provided.innerRef}
          {...provided.droppableProps}
          >
        <Container  style={{border:'solid',height: 'auto' ,width: 'auto'}}>
          <Typography  variant='h4'>Drag Here</Typography>
          {assembled.map((item)=>(
            <img src={item.image} alt="" />
          ))}
         </Container>
         {provided.placeholder}
    </div>
          )}
    </Droppable>
        <Link to={{
          pathname: "/finalview"
        }}> <Button onClick={handleAssembled} variant='contained'>Finish</Button></Link> 
        </Grid>
        
    
      </Grid>
   
     
    </Container>
    
    
  );
};

export default AssemblyScreen;
