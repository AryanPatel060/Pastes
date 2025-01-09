import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'



function App() {
 
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: 
        <div>
        <Navbar/>
        <Home/>
        </div>,
      },
      {
        path:"/pastes",
        element: 
        <div>
        <Navbar/>
        <Pastes/>
        </div>,
      },
      {
        path:"/pastes/:id",
        element: 
        <div>
        <Navbar/>
        <ViewPaste/>
        </div>,
      }
    ]
  )

  return (
    <RouterProvider router={router}>
      <p className='font-bold'>
        hello
      </p>
    </RouterProvider>
  )
}
export default App
