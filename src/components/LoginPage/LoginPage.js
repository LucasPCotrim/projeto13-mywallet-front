import { LoginPageStyle, FormStyle } from './LoginPage.style';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { logIn } from '../../APIs/myWalletService';
import UserContext from '../../contexts/UserContext';

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      email: '',
      password: '',
    });
  };
  const executeLogin = (event) => {
    event.preventDefault();
    const promise = logIn(form);
    promise
      .then((res) => {
        console.log(res.data.message);
        setUser({
          ...user,
          name: res.data.user.name,
          email: res.data.user.email,
          token: res.data.token,
        });
        clearForm();
        navigate('/main');
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
        clearForm();
      });
  };

  const disableButton = form.email === '' || form.password === '';

  return (
    <>
      <LoginPageStyle>
        <div className='logo-container'>
          <h1>My Wallet</h1>
        </div>
        <FormStyle onSubmit={executeLogin}>
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            value={form.email}
            onChange={handleForm}
          />
          <input
            type='password'
            name='password'
            placeholder='Senha'
            value={form.password}
            onChange={handleForm}
          />
          <button disabled={disableButton}>
            <h2>Entrar</h2>
          </button>
        </FormStyle>
        <Link to='/sign-up'>
          <div className='sign-up-link'>
            <h3>Primeira vez? Cadastre-se!</h3>
          </div>
        </Link>
      </LoginPageStyle>
    </>
  );
}
