import GlobalStyle from './global/GlobalStyle';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import LoginPage from './components/LoginPage/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import AddIncomePage from './components/AddIncomePage/AddIncomePage';
import AddPaymentPage from './components/AddPaymentPage/AddPaymentPage';
import MainPage from './components/MainPage/MainPage';

export default function App() {
  const [user, setUser] = useState({ name: '', email: '', token: '' });

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/main' element={<MainPage />} />
            <Route path='/add-income' element={<AddIncomePage />} />
            <Route path='/add-payment' element={<AddPaymentPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

