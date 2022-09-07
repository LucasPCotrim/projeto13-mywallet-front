import { AddIncomePageStyle, FormStyle } from './AddIncomePage.style';

export default function AddIncomePage() {
  return (
    <AddIncomePageStyle>
      <header>
        <h1>Nova entrada</h1>
      </header>
      <FormStyle>
        <input type='text' name='value' placeholder='Valor' />
        <input type='password' name='description' placeholder='Descrição' />
        <button>
          <h2>Salvar entrada</h2>
        </button>
      </FormStyle>
    </AddIncomePageStyle>
  );
}
