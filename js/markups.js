'use strict';

import state from "./state.js";
import { getFullTitle } from "./utils.js";

export const renderResult = ({ code, amount, full }) => {
  return `
    <div class="form-result__item-icon icon">
      <img src="./images/arrow-down.svg" alt="">
    </div>

    <div class="form-result__item-titles">
      <div class="form-result__item-title">${code}</div>
      <div class="form-result__item-full">${full}</div>
    </div>
    <div class="form-result__item-value">${amount.toFixed(2)}</div>
  `
};

const getCurrencyItemAction = (isBase) => {
  const { action: { remove, change } } = state;
  const actionName = isBase ? change : remove;

  return `<button class="currency-${actionName} currency-button" data-action="${actionName}">${actionName}</button>`
};

export const renderCurrencyItem = ({ code, base_code: baseCode, rate = 1 }) => {
  const isBase = code === baseCode;
  const fullTitle = getFullTitle(state.codes, code);
  const action = getCurrencyItemAction(isBase);

  return `<div class="currency-item ${isBase ? "currency-current" : ""}" data-item="${code}">
            <div class="currency-titles">
              <div class="currency-title">${code}</div>
              <div class="currency-full">${fullTitle}</div>
            </div>
            <div class="currency-amount">${rate.toFixed(2)}</div>
            <div class="currency-action">${action}</div>
          </div>`
};