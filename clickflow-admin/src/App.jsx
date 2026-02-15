import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './component/Login';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the store
import Registration from './component/Registration';
import ForgetPassword from './component/ForgetPassword';
import Layout from './layout/Layout';
import UserSection from './component/UserSection';
import WithdrawRequests from './component/WithdrawRequests';
import WhatsAppSection from './component/WhatsAppSection';
import PremiumTasks from './component/PremiumTasks';
import TelegramSection from './component/telegramSection';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}> 
      <Router>
        <Routes>
          {/* <Route path="/" element={<AdminPanel />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Registration/>} />
          <Route path='/forgotpassword' element={<ForgetPassword/>} />
          <Route path='/' element={<Layout><UserSection/></Layout>} />
          <Route path='/withdraw-request' element={<Layout><WithdrawRequests/></Layout>} />
          <Route path='/premium-tasks' element={<Layout><PremiumTasks/></Layout>} />
          <Route path='/whatsapp' element={<Layout><WhatsAppSection/></Layout>} />
          <Route path='*' element={<h1 className='text-center text-3xl mt-10'>404 Not Found</h1>} />
          <Route path='/telegram' element={<Layout><TelegramSection/></Layout>} />
        </Routes>
      </Router>
    </Provider> 
  );
}

export default App;
