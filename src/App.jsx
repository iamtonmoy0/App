import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import {AddTask} from './components/AddTask';

function App() {
  
  return (
    
    <div className="App">
      <Header title="Random"/>
      
      <AddTask/>
     <TaskList/>
     
     <Footer/>
    </div>
  )
}

export default App
