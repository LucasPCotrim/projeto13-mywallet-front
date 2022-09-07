import { SignUpPageStyle, FormStyle } from './SignUpPage.style';

export default function SignUpPage() {
  return (
    <>
      <SignUpPageStyle>
        <div className='logo-container'>
          <h1>My Wallet</h1>
        </div>
        <FormStyle>
          <input type='text' name='name' placeholder='Nome' />
          <input type='email' name='email' placeholder='E-mail' />
          <input type='password' name='password' placeholder='Senha' />
          <input type='password' name='password-confirm' placeholder='Confirme a senha' />
          <button>
            <h2>Entrar</h2>
          </button>
        </FormStyle>
        <div className='sign-up-link'>
          <h3>Já tem uma conta? Entre agora!</h3>
        </div>
      </SignUpPageStyle>
    </>
  );
}
