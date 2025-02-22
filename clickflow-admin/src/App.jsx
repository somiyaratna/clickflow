import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import AdminPanel from './component/AdminPanel';
import Login from './component/Login';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the store
import Registration from './component/Registration';
import ForgetPassword from './component/ForgetPassword';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/forgotpassword' element={<ForgetPassword/>} />
        </Routes>
      </Router>
    </Provider> 
  );
}

export default App;
