import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appstore from './Utils/store.js';
import UserAuth from './Componets/Auth/UserAuth.js';
const route=new createBrowserRouter([
  {
    path:"/",
    element:<UserAuth state={"ADMIN"}>asdada</UserAuth>

  },
  {
    path:"/no",
    element:<h1>login required he bhai ji</h1>

  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
   <Provider store={appstore}>
    <RouterProvider router={route} />
   </Provider>
  // </React.StrictMode>
  // <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
