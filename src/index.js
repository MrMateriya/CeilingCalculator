import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from "react-redux";
import {mainStore} from "./store";
import CeilingCalculatorPage from "./pages/CeilingCalculatorPage/components/CeilingCalculatorPage/CeilingCalculatorPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <CeilingCalculatorPage/>
  },
], {
  basename: '/CeilingCalculator/'
})
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={mainStore}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
