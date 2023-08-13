
import React from 'react';
import { Container, Typography, Grid, Paper, Divider, Button } from '@mui/material';
import PartsAssembly from '../PartsAssembly/PartsAssembly';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';

const AssemblyScreen = ({ selectedParts}) => {
  const navigate=useNavigate()
  const handlesubmit=()=>{
    navigate('/finalview')
  }
  return (
      <Droppable droppableId='selectedparts'>
      {(provided)=>(
          <div ref={provided.innerRef}
          {...provided.droppableProps}
          >
    <Container maxWidth="md" sx={{ paddingTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Selected Items
      </Typography>
      
      <Grid container spacing={2}>
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
        <Divider orientation="vertical" flexItem />
          
        <Grid  item xs={6} sx={{ marginLeft: 70,marginTop:-40}}>
          <PartsAssembly />
          <Button onClick={handlesubmit} variant='contained'>Finish</Button>
        </Grid>
        
    
      </Grid>
     
    </Container>
    {provided.placeholder}
    </div>
          )}
    </Droppable>
    
  );
};

export default AssemblyScreen;
