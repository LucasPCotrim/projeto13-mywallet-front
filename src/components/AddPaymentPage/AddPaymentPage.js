import { AddPaymentPageStyle, FormStyle } from './AddPaymentPage.style';
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
      type: 'payment',
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
    <AddPaymentPageStyle>
      <header>
        <h1>Nova saída</h1>
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
          <h2>Salvar saída</h2>
        </button>
      </FormStyle>
    </AddPaymentPageStyle>
  );
}
