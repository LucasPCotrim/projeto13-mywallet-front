import { TransactionPageStyle, FormStyle } from './TransactionPage.style';
import { useState, useContext } from 'react';
import { createTransaction, editTransaction } from '../../APIs/myWalletService';
import UserContext from '../../contexts/UserContext';
import { useNavigate, useParams } from 'react-router-dom';

const headerText = {
  addIncome: 'Nova Entrada',
  addPayment: 'Nova Saída',
  editIncome: 'Editar Entrada',
  editPayment: 'Editar Saída',
};
const buttonText = {
  addIncome: 'Salvar Entrada',
  addPayment: 'Salvar Saída',
  editIncome: 'Atualizar Entrada',
  editPayment: 'Atualizar Saída',
};
const transactionType = { addIncome: 'income', addPayment: 'payment' };

export default function TransactionPage() {
  let { pageType } = useParams();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    type: transactionType[pageType],
    description: user.currentTransactionDescription,
    value: user.currentTransactionValue,
  });
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      type: transactionType[pageType],
      description: '',
      value: '',
    });
  };
  function executeRegister(event) {
    event.preventDefault();
    // Edit Transaction
    if (pageType === 'editIncome' || pageType === 'editPayment') {
      const type = pageType.replace('edit', '').toLowerCase();
      const promise = editTransaction(user.token, { ...form, type }, user.currentTransactionId);
      promise
        .then(() => {
          setUser({
            ...user,
            page: 'MainPage',
            currentTransactionId: '',
            currentTransactionValue: '',
            currentTransactionDescription: '',
          });
          navigate('/main');
        })
        .catch((res) => {
          alert(res.response.data.message);
        });
      // Create Transaction
    } else {
      const promise = createTransaction(form, user.token);
      promise
        .then(() => {
          setUser({ ...user, page: 'loginPage' });
          navigate('/main');
        })
        .catch((res) => {
          alert(res.response.data.message);
        });
    }
    clearForm();
  }

  const disableButton = form.value === '' || form.description === '' || parseFloat(form.value) <= 0;
  return (
    <TransactionPageStyle>
      <header>
        <h1>{headerText[pageType]}</h1>
      </header>
      <FormStyle onSubmit={executeRegister}>
        <input
          type='number'
          name='value'
          placeholder='Valor'
          value={form.value}
          onChange={handleForm}
        />
        <input
          type='text'
          name='description'
          placeholder='Descrição'
          value={form.description}
          onChange={handleForm}
        />
        <button disabled={disableButton}>
          <h2>{buttonText[pageType]}</h2>
        </button>
      </FormStyle>
    </TransactionPageStyle>
  );
}
