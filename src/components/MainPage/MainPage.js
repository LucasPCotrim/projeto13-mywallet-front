import {
  MainPageStyle,
  EmptyTransactionContainerStyle,
  TransactionContainerStyle,
  TransactionStyle,
  ButtonsContainerStyle,
} from './MainPage.style';
import logOutIcon from '../../assets/imgs/logOutIcon.svg';
import plusIcon from '../../assets/imgs/plusIcon.svg';
import minusIcon from '../../assets/imgs/minusIcon.svg';

export default function MainPage() {
  const transactions = [{ date: '30/11', description: 'Almoço mãe', value: '39,90' }];
  // const transactions = [];
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
              <li>
                <TransactionStyle type={'payment'}>
                  <div className='transaction-info'>
                    <span>30/11</span>Almoço mãe
                  </div>
                  <div className='transaction-value'>39,90</div>
                </TransactionStyle>
              </li>
              <li>
                <TransactionStyle type={'payment'}>
                  <div className='transaction-info'>
                    <span>27/11</span>Mercado
                  </div>
                  <div className='transaction-value'>542,54</div>
                </TransactionStyle>
              </li>
            </ul>
            <div className='bottom-line'>
              <h2>SALDO</h2>
              <h3>2849,96</h3>
            </div>
          </TransactionContainerStyle>
        )}

        <ButtonsContainerStyle>
          <button>
            <img src={plusIcon} alt='plusIcon' />
            <h2>Nova entrada</h2>
          </button>
          <button>
            <img src={minusIcon} alt='minusIcon' />
            <h2>Nova saída</h2>
          </button>
        </ButtonsContainerStyle>
      </MainPageStyle>
    </>
  );
}
