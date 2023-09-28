import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import TaskPage from './Pages/TaskPage'
import Entry from './Pages/Entry'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Tasks' element={<TaskPage/>} />
        <Route path='/' element={<Entry/>} />

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
