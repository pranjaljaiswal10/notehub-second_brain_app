import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Signup from './pages/Signup'
import Home from './pages/Home'

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Signup/>
    },
    {
      path:"/content",
      element:<Home/>
    }
  ]
}])

export default appRouter
