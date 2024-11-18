import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOuts from './layOuts/MainLayOuts';
import Home from './pages/Home';
import StartLearning from './pages/StartLearning';
import Tutorial from './pages/Tutorial';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/startLearning',
        element: <StartLearning></StartLearning>
      },
      {
        path: '/tutorials',
        element: <Tutorial></Tutorial>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
