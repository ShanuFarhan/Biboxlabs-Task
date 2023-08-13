import { useState } from 'react'
import monitor from './images/monitor.jpg'
import keyboard from './images/keyboard.jpg'
import mouse from './images/mouse.jpg'
import CPU from './images/CPU.jpg'
import Speaker from './images/Speaker.jpg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Description from './Components/Description/Description';
import PartsSelection from './Components/PartsSelection/PartsSelection';
import AssemblyScreen from './Components/AssemblyScreen/AssemblyScreen'

function App() {
  const [selectedParts, setSelectedParts] = useState([]);

  // const handleCheckbox = (parts) => {
  //   if (selectedParts.includes(parts)) {
  //     setSelectedParts(selectedParts.filter(p => p !== parts));
  //   } else {
  //     setSelectedParts([...selectedParts, parts]);
  //   }
    
  // };
 const handleCheckbox=(parts)=>{

  setSelectedParts([...selectedParts, parts]);
 
 }


  const parts = [
    { id: 1, name: 'Monitor', image: monitor },
    { id: 2, name: 'Keyboard', image:keyboard },
    { id: 3, name: 'Mouse', image:mouse },
    { id: 4, name: 'CPU', image:CPU },
    { id: 5, name: 'Speaker', image:Speaker },
  ];


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Description/>} />
          <Route path="/parts" element={ <PartsSelection  parts={parts} handleCheckbox={handleCheckbox}/>} />
          <Route
            path="/assemble"
            element={<AssemblyScreen selectedParts={selectedParts} handleCheckbox={handleCheckbox}/>}
          />
          </Routes>
      </div>
    </Router>
  )
}

export default App
