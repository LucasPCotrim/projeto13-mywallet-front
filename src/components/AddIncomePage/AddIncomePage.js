import { AddIncomePageStyle, FormStyle } from './AddIncomePage.style';
import { useState } from 'react';

export default function AddIncomePage() {
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
    console.log(form);
    clearForm();
  }

  const disableButton = form.value === '' || form.description === '';
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
