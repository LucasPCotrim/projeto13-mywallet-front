import GlobalStyle from './global/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <LoginPage></LoginPage>
              </>
            }
          />
          <Route
            path='/sign-up'
            element={
              <>
                <h1>Sign-Up Page</h1>
              </>
            }
          />
          <Route
            path='/main'
            element={
              <>
                <h1>Main Page</h1>
              </>
            }
          />
          <Route
            path='/add-income'
            element={
              <>
                <h1>AddIncome Page</h1>
              </>
            }
          />
          <Route
            path='/add-payment'
            element={
              <>
                <h1>AddPayment Page</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

