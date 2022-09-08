import { LoginPageStyle, FormStyle } from './LoginPage.style';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <LoginPageStyle>
        <div className='logo-container'>
          <h1>My Wallet</h1>
        </div>
        <FormStyle>
          <input type='email' name='email' placeholder='E-mail' />
          <input type='password' name='password' placeholder='Senha' />
          <button>
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
