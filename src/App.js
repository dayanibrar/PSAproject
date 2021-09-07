import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footerplain from "./components/Footer";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import AdBar from "./components/Ad";




function App() {
  return (
  <BrowserRouter>
   <AdBar />
  <NavBar />
  <Switch>
  <Route component={Home} path='/' exact />
  </Switch>
  <Footerplain />
  
  </BrowserRouter>
  )
}


export default App;
