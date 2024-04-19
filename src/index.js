import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PlusButton from "./UI/PlusButton/PlusButton";
import MinusButton from "./UI/MinusButton/MinusButton";
import CountedInput from "./components/CountedInput/CountedInput";
import TypesOfValue from "./components/CountedInput/constants/TypesOfValue";
import SelectorInput from "./components/SelectorInput/SelectorInput";
import TextButton from "./UI/TextButton/TextButton";
import RoomSelector from "./modules/RoomSelector/components/RoomSelector/RoomSelector";
import RoomForm from "./modules/RoomSelector/components/RoomForm/RoomForm";
import { Provider } from "react-redux";
import {mainStore} from "./store";
import CeilingCalculatorPage from "./pages/CeilingCalculatorPage/components/CeilingCalculatorPage/CeilingCalculatorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/*',
    element: <h1>WrongPath</h1>
  },
  {
    path: '/plusbutton',
    element: <PlusButton/>
  },
  {
    path: '/minusbutton',
    element: <MinusButton/>
  },
  {
    path: '/countedinput',
    element: <>
      <CountedInput onChange={(e) => {
        console.log(e)}} className={'ktotot'}/>
      <CountedInput valueType={TypesOfValue.pieces}/>
    </>
  },
  {
    path: '/selector',
    element: <SelectorInput
      options={[
      {id: 1, value: 'glossy', text: 'Глянцевая'},
      {id: 2, value: 'matte', text: 'Матовая'},
      {id: 3, value: 'satin', text: 'Сатиновая'},
      {id: 4, value: 'fabric', text: 'Тканевая'},
      {id: 5, value: 'exclusive', text: 'Эксклюзивная'},]}
      onChange={option => console.log(option)}
    />
  },
  {
    path: '/button',
    element: <>
      <TextButton descriptionText={'текст текст текст'}>Скачать мету</TextButton>
      <TextButton type='filled' descriptionText={'smth'}>Оформить заказ</TextButton>
      <TextButton type='filled'>Оформить заказ</TextButton>
    </>
  },
  {
    path: '/roomselector',
    element: <RoomSelector/>,
  },
  {
    path: '/roomform',
    element: <RoomForm id={1}/>,
  },
  {
    path: '/CeilingCalculator',
    element: <CeilingCalculatorPage/>,
  },
])
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
