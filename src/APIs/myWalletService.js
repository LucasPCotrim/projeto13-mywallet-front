import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function signUp(body) {
  const signUpAPI = `${BASE_URL}/sign-up`;
  return axios.post(signUpAPI, body);
}

function logIn(body) {
  const loginAPI = `${BASE_URL}/login`;
  return axios.post(loginAPI, body);
}

function loadTransactions(token) {
  const transactionsAPI = `${BASE_URL}/transactions`;
  return axios.get(transactionsAPI, { headers: { Authorization: `Bearer ${token}` } });
}

function createTransaction(body, token) {
  const transactionsAPI = `${BASE_URL}/transactions`;
  return axios.post(transactionsAPI, body, { headers: { Authorization: `Bearer ${token}` } });
}

function logOut(token) {
  const logOutAPI = `${BASE_URL}/logout`;
  return axios.post(logOutAPI, {}, { headers: { Authorization: `Bearer ${token}` } });
}

function deleteTransaction(token, transactionId) {
  const deleteTransactionAPI = `${BASE_URL}/transactions/${transactionId}`;
  return axios.delete(deleteTransactionAPI, { headers: { Authorization: `Bearer ${token}` } });
}

function editTransaction(token, body, transactionId) {
  const editTransactionAPI = `${BASE_URL}/transactions/${transactionId}`;
  return axios.put(editTransactionAPI, body, { headers: { Authorization: `Bearer ${token}` } });
}

export {
  signUp,
  logIn,
  loadTransactions,
  createTransaction,
  logOut,
  deleteTransaction,
  editTransaction,
};
