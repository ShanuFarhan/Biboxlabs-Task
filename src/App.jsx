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
import { DragDropContext } from 'react-beautiful-dnd'
import FinalProduct from './Components/FinalProduct/FinalProduct'

function App() {
  const [selectedParts, setSelectedParts] = useState([]);
  const ondrag=(result)=>{
    const {source,destination}=result;
    if(!destination) return
    if(destination.droppableId===source.droppableId && destination.index===source.index )
    return;
  let add,
  active=selectedParts;
  if(source.droppableId==="selectedparts"){
    add=active[source.index]
    active.splice(source.index,1)
  }
  // else{
  //   add=completed[source.index]
  //   completed.splice(source.index,1)
  // }
  if(destination.droppableId==="selectedparts"){
    active.splice(destination.index,0,add)
  }
  // else{
  //   completed.splice(destination.index,0,add)
  // }
  setSelectedParts(active)
  // setAssembled(completed)
  }
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
    <DragDropContext onDragEnd={ondrag}>

    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Description/>} />
          <Route path="/parts" element={ <PartsSelection  parts={parts} handleCheckbox={handleCheckbox}/>} />
          
          <Route
            path="/assemble"
            element={<AssemblyScreen parts={parts} selectedParts={selectedParts} handleCheckbox={handleCheckbox}/>}
          />
         <Route path='/finalview' element={<FinalProduct/>}/>
          </Routes>
      </div>
    </Router>
    </DragDropContext>
  )
}

export default App
