import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


function PartsAssembly() {
  

  return (
    <Container style={{border:'solid',height: 500 ,width: 500}}>
        <Typography variant='h4'>Drag Here</Typography>
    </Container>
  );
}

export default PartsAssembly;
