import styled from 'styled-components';

export const MainPageStyle = styled.div`
  width: min(800px, 100vw);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 25px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0 22px 0;
    h1 {
      font-family: var(--body-font-family);
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #ffffff;
    }
    img {
      width: 24px;
      cursor: pointer;
    }
  }
`;

export const EmptyTransactionContainerStyle = styled.div`
  width: 100%;
  height: min(700px, calc(100vh - 31px - 22px - 114px - 13px - 80px));
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 0 30%;
  margin-bottom: 13px;
  p {
    font-family: var(--body-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

export const TransactionContainerStyle = styled.div`
  width: 100%;
  height: min(700px, calc(100vh - 31px - 22px - 114px - 13px - 80px));
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  padding: 23px 12px 10px 15px;
  margin-bottom: 13px;

  ul {
    width: 100%;
    height: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-start;
    gap: 15px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const BottomLineStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: var(--body-font-family);
  font-style: normal;
  font-size: 17px;
  line-height: 20px;
  h2 {
    font-weight: 700;
    color: #000000;
  }
  h3 {
    font-weight: 400;
    color: ${(props) => (props.positive ? '#03AC00' : '#C70000')};
  }
`;

export const TransactionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: var(--body-font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  .transaction-info {
    color: #000000;
    cursor: pointer;
    span {
      color: #c6c6c6;
      margin-right: 10px;
    }
  }

  .transaction-value {
    margin-right: 7px;
    span {
      color: ${(props) => (props.type === 'income' ? '#03AC00' : '#C70000')};
      margin-right: 11px;
    }
    button {
      width: 16px;
      height: 16px;
      background-color: transparent;
      text-align: center;
      cursor: pointer;
    }
  }

  button.delete-transaction {
  }
`;

export const ButtonsContainerStyle = styled.div`
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  button {
    width: 50%;
    height: 114px;
    padding: 10px calc(0.6 * calc(50% - 15px)) 10px 10px;
    background-color: var(--button-background-color);
    border: none;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: space-between;
    cursor: pointer;
    h2 {
      font-family: var(--body-font-family);
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
    }
    img {
      width: 25px;
    }
  }
`;
