import { AddIncomePageStyle, FormStyle } from './AddIncomePage.style';
import { useState, useContext } from 'react';
import { createTransaction } from '../../APIs/myWalletService';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function AddIncomePage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    type: 'income',
    description: '',
    value: '',
  });
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      type: 'income',
      description: '',
      value: '',
    });
  };
  function executeRegister(event) {
    event.preventDefault();
    const promise = createTransaction(form, user.token);
    promise
      .then((res) => {
        console.log(res);
        navigate('/main');
      })
      .catch((res) => {
        alert(res.response.data.message);
      });
    clearForm();
  }

  const disableButton = form.value === '' || form.description === '' || parseFloat(form.value) <= 0;
  return (
    <AddIncomePageStyle onSubmit={executeRegister}>
      <header>
        <h1>Nova entrada</h1>
      </header>
      <FormStyle>
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
          <h2>Salvar entrada</h2>
        </button>
      </FormStyle>
    </AddIncomePageStyle>
  );
}
