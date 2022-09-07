import { AddPaymentPageStyle, FormStyle } from './AddPaymentPage.style';

export default function AddIncomePage() {
  return (
    <AddPaymentPageStyle>
      <header>
        <h1>Nova saída</h1>
      </header>
      <FormStyle>
        <input type='text' name='value' placeholder='Valor' />
        <input type='password' name='description' placeholder='Descrição' />
        <button>
          <h2>Salvar saída</h2>
        </button>
      </FormStyle>
    </AddPaymentPageStyle>
  );
}
