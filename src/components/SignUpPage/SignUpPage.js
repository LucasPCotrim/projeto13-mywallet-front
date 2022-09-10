import { SignUpPageStyle, FormStyle } from './SignUpPage.style';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { signUp } from '../../APIs/myWalletService.js';
import UserContext from '../../contexts/UserContext';

export default function SignUpPage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };
  const executeSignUp = (event) => {
    event.preventDefault();
    const promise = signUp(form);
    promise
      .then(() => {
        clearForm();
        setUser({ ...user, page: 'LoginPage' });
        navigate('/');
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
        clearForm();
      });
  };

  const disableButton =
    form.name === '' ||
    form.email === '' ||
    form.password === '' ||
    form.passwordConfirm === '' ||
    form.password !== form.passwordConfirm;

  return (
    <>
      <SignUpPageStyle>
        <div className='logo-container'>
          <h1>My Wallet</h1>
        </div>
        <FormStyle onSubmit={executeSignUp}>
          <input
            type='text'
            name='name'
            placeholder='Nome'
            value={form.name}
            onChange={handleForm}
          />
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
          <input
            type='password'
            name='passwordConfirm'
            placeholder='Confirme a senha'
            value={form.passwordConfirm}
            onChange={handleForm}
          />
          <button disabled={disableButton}>
            <h2>Entrar</h2>
          </button>
        </FormStyle>
        <Link to='/'>
          <div className='login-link'>
            <h3>Já tem uma conta? Entre agora!</h3>
          </div>
        </Link>
      </SignUpPageStyle>
    </>
  );
}
