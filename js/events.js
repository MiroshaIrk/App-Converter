'use strict';

import variables from "./variables.js";
import { fetchCodes, handleTabClick } from "./main.js";
import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { addCurrency, handleActionClick, handleAddCurrency, handleSingleSelectChange } from "./single.js";

const {
  form,
  tabs,
  switchBtn,
  addButton,
  amountInput,
  currencyList,
  currentCurrency,
  addCurrencySelect,
} = variables;


fetchCodes();

form.addEventListener('submit', handleSubmit);
addButton.addEventListener('click', addCurrency);
amountInput.addEventListener('keyup', handleInput);
switchBtn.addEventListener('click', switchCurrencies);
currencyList.addEventListener('click', handleActionClick);
currentCurrency.addEventListener('click', handleActionClick);
addCurrencySelect.addEventListener('change', handleAddCurrency);
singleSelect.addEventListener('change', handleSingleSelectChange);
tabs.forEach(tab => tab.addEventListener('click', handleTabClick));