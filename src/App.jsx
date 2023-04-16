import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './components/Header';
import { TaskList } from './components/TaskList';

function App() {
  
  return (
    
    <div className="App">
      <Header title="Random"/>
     <TaskList/>
    </div>
  )
}

export default App
