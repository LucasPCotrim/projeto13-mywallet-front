import styled from 'styled-components';

export const AddPaymentPageStyle = styled.div`
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
    img {
      width: 24px;
      cursor: pointer;
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
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  button {
    width: 100%;
    height: 46px;
    background-color: var(--button-enabled-background-color);
    border: none;
    border-radius: 4.64px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:disabled {
      background-color: var(--button-background-color);
      cursor: initial;
    }
    h2 {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 23px;
      color: #ffffff;
    }
  }
`;
