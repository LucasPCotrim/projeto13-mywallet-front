import { LoginPageStyle, FormStyle } from './LoginPage.style';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
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
  function executeLogin(event) {
    event.preventDefault();
    console.log(form);
    clearForm();
  }

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
