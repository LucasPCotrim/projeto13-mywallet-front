import {
  MainPageStyle,
  EmptyTransactionContainerStyle,
  TransactionContainerStyle,
  BottomLineStyle,
  TransactionStyle,
  ButtonsContainerStyle,
} from './MainPage.style';
import logOutIcon from '../../assets/imgs/logOutIcon.svg';
import plusIcon from '../../assets/imgs/plusIcon.svg';
import minusIcon from '../../assets/imgs/minusIcon.svg';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();

  const transactions = [
    { date: '30/11', description: 'Almoço mãe', type: 'payment', value: '39,90' },
    { date: '27/11', description: 'Mercado', type: 'payment', value: '542,54' },
    { date: '26/11', description: 'Compras Churrasco', type: 'payment', value: '67,70' },
    { date: '20/11', description: 'Empréstimo Maria', type: 'income', value: '500,00' },
    { date: '15/11', description: 'Salário', type: 'income', value: '3000,00' },
  ];
  // const transactions = [];

  const getBalance = () => {
    return transactions
      .reduce((acc, transaction) => {
        const valueString = transaction.value.replace(',', '.');
        let value = parseFloat(valueString);
        if (transaction.type === 'payment') {
          value = -value;
        }
        return acc + value;
      }, 0)
      .toFixed(2);
  };
  const balance = getBalance();
  return (
    <>
      <MainPageStyle>
        <header>
          <h1>Olá, Fulano</h1>
          <img src={logOutIcon} alt='logOutIcon' />
        </header>
        {transactions.length === 0 ? (
          <EmptyTransactionContainerStyle>
            <p>Não há registros de entrada ou saída</p>
          </EmptyTransactionContainerStyle>
        ) : (
          <TransactionContainerStyle>
            <ul>
              {transactions.map((transaction) => {
                return (
                  <>
                    <li>
                      <TransactionStyle type={transaction.type}>
                        <div className='transaction-info'>
                          <span>{transaction.date}</span>
                          {transaction.description}
                        </div>
                        <div className='transaction-value'>{transaction.value}</div>
                      </TransactionStyle>
                    </li>
                  </>
                );
              })}
            </ul>
            <BottomLineStyle balance={balance}>
              <h2>SALDO</h2>
              <h3>{balance}</h3>
            </BottomLineStyle>
          </TransactionContainerStyle>
        )}

        <ButtonsContainerStyle>
          <button onClick={() => navigate('/add-income')}>
            <img src={plusIcon} alt='plusIcon' />
            <h2>Nova entrada</h2>
          </button>
          <button onClick={() => navigate('/add-payment')}>
            <img src={minusIcon} alt='minusIcon' />
            <h2>Nova saída</h2>
          </button>
        </ButtonsContainerStyle>
      </MainPageStyle>
    </>
  );
}
