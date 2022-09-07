import { LoginPageStyle, FormStyle } from './LoginPage.style';

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
        <div className='sign-up-link'>Primeira vez? Cadastre-se!</div>
      </LoginPageStyle>
    </>
  );
}
