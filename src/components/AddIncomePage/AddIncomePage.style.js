import styled from 'styled-components';

export const AddIncomePageStyle = styled.div`
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
    margin: 25px 0 40px 0;
    h1 {
      font-family: var(--body-font-family);
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #ffffff;
    }
  }
`;

export const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  margin-bottom: 36px;
  input {
    width: 100%;
    height: 58px;
    background-color: #ffffff;
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
    outline: none;
    &::placeholder {
      font-size: 20px;
      line-height: 23px;
      color: #000000;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }

  button {
    width: 100%;
    height: 46px;
    background-color: var(--button-background-color);
    border: none;
    border-radius: 4.64px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h2 {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 23px;
      color: #ffffff;
    }
  }
`;
