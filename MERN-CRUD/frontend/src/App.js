import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Main from './Component.jsx/Main';
import Rigester from './Component.jsx/Rigester';
import Show_data from './Component.jsx/Show_data';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/reg' element={<Rigester/>}/>
      <Route path='/show' element={<Show_data/>}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;