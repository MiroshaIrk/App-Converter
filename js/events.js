'use strict';

import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { fetchCodes, handleTabClick } from "./main.js";
import variables from "./variables.js";

const { amountInput, form, switchBtn, tabs } = variables;


fetchCodes();

amountInput.addEventListener('keyup', handleInput);
form.addEventListener('submit', handleSubmit);
switchBtn.addEventListener('click', switchCurrencies);
tabs.forEach(tab => tab.addEventListener('click', handleTabClick));