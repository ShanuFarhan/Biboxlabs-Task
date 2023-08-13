import React from 'react';
import { Paper } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const parts = [
  { id: 'wheel', name: 'Wheel' },
  { id: 'frame', name: 'Frame' },
  { id: 'seat', name: 'Seat' },
  // Add more parts
];

function PartsAssembly() {
  // ... (drag and drop logic)

  return (
    <Paper elevation={3} sx={{ maxHeight: '80vh', overflowY: 'auto', padding: 10 }}>
      <DragDropContext>
        <Droppable droppableId="parts">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {parts.map((part, index) => (
                <Draggable key={part.id} draggableId={part.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Paper elevation={3} sx={{ marginBottom: 10, padding: 10 }}>
                        {part.name}
                      </Paper>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Paper>
  );
}

export default PartsAssembly;
