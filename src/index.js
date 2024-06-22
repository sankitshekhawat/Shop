import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/@fortawesome/react-fontawesome/index'
import App from './App';
import { Netflixregistercomonents } from './components/Netflixcomponents';
import NetflixIndexcomponents from './components/NetflixIndexcomponents';
//import practice from './components/pactice';
import reportWebVitals from './reportWebVitals';
import databindingdemo from './components/databindingdemo';
import Databindingcomponent from './components/Databindingcomponent';
import Eventbindingcomponents from './components/Eventbindingcomponents';
import Loginpage from './components/Loginpage';
import ShoppingComponent from './components/ShoppingComponents';
//import { Practice } from './components/Practice';
import { PracticeNew } from './components/PracticeNew';
import { LoginComponents } from './components/LoginComponents';
import { FormComponent } from './components/FormComponent';
import { FormikDemo } from './components/FormikDemo';
import { Practice } from './components/Practice';
import { FormikValidation } from './components/FormikValidation';
import { YupValidation } from './components/YupValidation';
import { YupValidationComponent } from './components/YupValidationComponent';
import LifeCycleDemo from './components/LifeCycleDemo';
import ContextDemo from './components/ContextDemo';
import PracticeContextDemo from './components/PracticeContextDemo';
import { CookiesProvider } from 'react-cookie';
import UserLogin from './components/CookieUserLogin';
import ReducerDemo from './components/ReducerDemo';
import CustomHookDemo from './components/CustomHookDemo';
import { Sorting } from './components/SortingHook';
import { ShoppingIndex } from './Shopping/ShoppingIndex';
import IShopIndex from './IShop/IshopIndex';
import AxiosDemo from './components/AxiosDemo';
import Shop from './components/Shop';
import Shopp from './components/Shopp';
//import Twowaybinding from './components/Twowaybinding';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
