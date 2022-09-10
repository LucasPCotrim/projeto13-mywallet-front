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
import { loadTransactions, logOut, deleteTransaction } from '../../APIs/myWalletService.js';

function Transaction({ type, date, description, value, id, reloadPage, setReloadPage }) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const executeDeleteTransaction = (token, transactionId) => {
    const confirm = window.confirm('Deletar registro?');
    if (confirm) {
      const promise = deleteTransaction(token, transactionId);
      promise
        .then(() => {
          setReloadPage(!reloadPage);
        })
        .catch((res) => {
          alert(res.response?.data?.message || 'Error when connecting to the database');
        });
    }
  };
  const goToEditTransactionPage = () => {
    setUser({
      ...user,
      page: `edit${uppercasePage}Page`,
      currentTransactionId: id,
      currentTransactionValue: value,
      currentTransactionDescription: description,
    });
    navigate(`/transaction/edit${uppercasePage}`);
  };
  const uppercasePage = `${type[0].toUpperCase()}${type.slice(1)}`;
  return (
    <>
      <li>
        <TransactionStyle type={type}>
          <div className='transaction-info' onClick={() => goToEditTransactionPage()}>
            <span>{date}</span>
            {description}
          </div>
          <div className='transaction-value'>
            <span>
              {`R$ ${parseFloat(value).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}`}
            </span>
            <button onClick={() => executeDeleteTransaction(user.token, id)}>X</button>
          </div>
        </TransactionStyle>
      </li>
    </>
  );
}

function BottomLine({ balance }) {
  return (
    <>
      <BottomLineStyle positive={balance[0] !== '-'}>
        <h2>SALDO</h2>
        <h3>{`R$ ${balance}`}</h3>
      </BottomLineStyle>
    </>
  );
}

export default function MainPage() {
  const { user, setUser } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const [reloadPage, setReloadPage] = useState(false);

  useEffect(() => {
    if (user.token === '') {
      setUser({ ...user, page: 'LoginPage' });
      navigate('/');
      return;
    }
    const promise = loadTransactions(user.token);
    promise
      .then((res) => {
        setTransactions([...res.data.transactions]);
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
      });
  }, [reloadPage]);

  const executeLogOut = () => {
    const promise = logOut(user.token);
    promise
      .then(() => {
        setUser({ ...user, page: 'LoginPage' });
        navigate('/');
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
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
                  <Transaction
                    key={index}
                    type={transaction.type}
                    date={transaction.date}
                    description={transaction.description}
                    value={transaction.value}
                    id={transaction._id}
                    reloadPage={reloadPage}
                    setReloadPage={setReloadPage}
                  />
                );
              })}
            </ul>
            <BottomLine balance={balance} />
          </TransactionContainerStyle>
        )}

        <ButtonsContainerStyle>
          <button
            onClick={() => {
              setUser({ ...user, page: 'AddIncomePage' });
              navigate('/transaction/addIncome');
            }}>
            <img src={plusIcon} alt='plusIcon' />
            <h2>Nova entrada</h2>
          </button>
          <button
            onClick={() => {
              setUser({ ...user, page: 'AddPaymentPage' });
              navigate('/transaction/addPayment');
            }}>
            <img src={minusIcon} alt='minusIcon' />
            <h2>Nova saída</h2>
          </button>
        </ButtonsContainerStyle>
      </MainPageStyle>
    </>
  );
}
