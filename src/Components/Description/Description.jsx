import React from 'react'
import { Container,Button} from '@mui/material';

import pc from '../../images/pc.jpeg'
import { useNavigate } from 'react-router-dom';
const Description = () => {
    const navigate=useNavigate()

    const handleStart = () => {
        navigate('/cart');
      };
  return (
    <Container>
        <img src={pc} alt=""  />
        
        <Button variant="contained"
          color="primary"
          style={{
            position: 'fixed',
            marginTop:'60px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }} onClick={handleStart}>Start</Button>
       
    </Container>
  )
}

export default Description
