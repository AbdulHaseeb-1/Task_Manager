import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import TaskPage from './Pages/TaskPage'
import Entry from './Pages/Entry'
import Calander from './Pages/Calander'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entry/>} />
        <Route path='/Tasks' element={<TaskPage/>} />
        <Route path='/calander' element={<Calander/>} />
        

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
