import React, { lazy,Suspense } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
// import Body from './components/Body';
import Menu from './components/Menu';
import Cart from './components/Cart';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//code-splitting/dynamic bundling/lazy loading/on demand load/chunking
const Body=lazy(()=>import('./components/Body'))

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Suspense fallback={()=><h1>Loading...</h1>}><Body/></Suspense>
        },
      {
        path:"/about",
        element:<About/>
        },
      {
        path:"/contact",
        element:<Contact/>
        },
      {
        path:"/restaurants/:resId",
        element:<Menu/>
        },
      {
        path:"/cart",
        element:<Cart/>
        },
    ],
    errorElement:<Error/>
    },
  
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
  
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
