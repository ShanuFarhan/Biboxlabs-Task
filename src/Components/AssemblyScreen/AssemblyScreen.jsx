
import React from 'react';
import { Container, Typography, Grid, Paper, Divider } from '@mui/material';
import PartsAssembly from '../PartsAssembly/PartsAssembly';

const AssemblyScreen = ({ selectedParts}) => {
  
  return (
    <Container maxWidth="md" sx={{ paddingTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Selected Items
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {selectedParts.map(item => (
            <Paper
              key={item.id}
              elevation={3}
              sx={{ marginBottom: 10, padding: 10, cursor: 'pointer' }}
              onClick={() => handleItemClick(item)}
            >
              <img src={item.image} alt={item.name} style={{ maxWidth: '100%' }} />
              <Typography variant="subtitle1">{item.name}</Typography>
            </Paper>
          ))}
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={6} sx={{ marginLeft: 70,marginTop:-150 }}>
          <PartsAssembly />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AssemblyScreen;
