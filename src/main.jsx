import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDetalis from './components/FriendDetails/FriendDetalis';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/blog",
//     element: <Blog></Blog>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element: <App></App>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path:'friend/:userId',
        element:<FriendDetalis></FriendDetalis>,
        loader: (params)=>fetch(`https://jsonplaceholder.typicode.com/users/${params.params.userId}`),
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
