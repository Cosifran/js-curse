import React from "react"
//Import own components
import Login from "./components/auth/Login"
import Projects from "./components/project/Projects"
import NewAccount from "./components/auth/NewAccount"
//Import router fuctions
import {createBrowserRouter, RouterProvider} from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: 'Error'
    }
  ])
  return (
     <RouterProvider router={router}/>
  )
}

export default App
