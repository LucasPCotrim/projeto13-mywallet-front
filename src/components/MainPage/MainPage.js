import {
  MainPageStyle,
  EmptyTransactionContainerStyle,
  TransactionContainerStyle,
  BottomLineStyle,
  TransactionStyle,
  ButtonsContainerStyle,
} from './MainPage.style';
import { useContext, useEffect, useState } from 'react';
import logOutIcon from '../../assets/imgs/logOutIcon.svg';
import plusIcon from '../../assets/imgs/plusIcon.svg';
import minusIcon from '../../assets/imgs/minusIcon.svg';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { loadTransactions, logOut } from '../../APIs/myWalletService.js';

export default function MainPage() {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.token === '') {
      navigate('/');
      return;
    }
    const promise = loadTransactions(user.token);
    promise
      .then((res) => {
        console.log(res.data.message);
        console.log(res.data.transactions);
        setTransactions([...res.data.transactions]);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const executeLogOut = () => {
    const promise = logOut(user.token);
    promise
      .then((res) => {
        console.log(res.data.message);
        navigate('/');
      })
      .catch((res) => {
        alert(res.response.data.message);
      });
  };

  const getBalance = () => {
    const balance = parseFloat(
      transactions.reduce((acc, transaction) => {
        let value = parseFloat(transaction.value.replace(',', '.'));
        return transaction.type === 'payment' ? acc - value : acc + value;
      }, 0)
    );

    return balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  };
  const balance = getBalance();
  return (
    <>
      <MainPageStyle>
        <header>
          <h1>{`Olá, ${user.name}`}</h1>
          <img src={logOutIcon} alt='logOutIcon' onClick={() => executeLogOut()} />
        </header>
        {transactions.length === 0 ? (
          <EmptyTransactionContainerStyle>
            <p>Não há registros de entrada ou saída</p>
          </EmptyTransactionContainerStyle>
        ) : (
          <TransactionContainerStyle>
            <ul>
              {transactions.map((transaction, index) => {
                return (
                  <li key={index}>
                    <TransactionStyle type={transaction.type}>
                      <div className='transaction-info'>
                        <span>{transaction.date}</span>
                        {transaction.description}
                      </div>
                      <div className='transaction-value'>{`R$ ${parseFloat(
                        transaction.value
                      ).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</div>
                    </TransactionStyle>
                  </li>
                );
              })}
            </ul>
            <BottomLineStyle positive={balance[0] !== '-'}>
              <h2>SALDO</h2>
              <h3>{`R$ ${balance}`}</h3>
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
