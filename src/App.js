
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import CreateWallet from './Pages/Create-wallet';
import SignUp from './Pages/signup';
import Wallet from './Pages/Wallet'

// import AppContext from './Contexts/context';



function App() {
  return (
    <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/createwallet" element={<CreateWallet/>} />
              <Route path="/signup" element={<SignUp/>} /> 
              <Route path="/wallet" element={<Wallet/>} />
          </Routes>
    </Router>
  );
}

export default App;