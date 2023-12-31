import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme();
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
  
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  </ThemeProvider>
  
// </React.StrictMode>,

)
