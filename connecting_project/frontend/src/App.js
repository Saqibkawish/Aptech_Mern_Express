import logo from './logo.svg';
import './App.css';
import Main from './Component/Main';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Registration from './Component/Registration';

function App() {
  return (


      <BrowserRouter>
      
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reg" element={<Registration />} />
      </Routes>

      
      </div>
      </BrowserRouter>
    
    
   
  );
}

export default App;
