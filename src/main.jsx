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
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import MyProfile from './pages/MyProfile';
import AboutUs from './pages/AboutUs';
import Lessons from './pages/Lessons';





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
      },
      {
        path: '/myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/lessons',
        element: <Lessons></Lessons>,
        loader: () => fetch('../allWords.json')
      }

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
