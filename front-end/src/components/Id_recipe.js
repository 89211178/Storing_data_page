import React from 'react';

function Id_recipe(link) {
  const lastDigitIndex = link.split('').findLastIndex((char) => !isNaN(parseInt(char)));
  const lastDigitPart = link.substring(lastDigitIndex);
  const lastDigit = parseInt(lastDigitPart);
  return lastDigit;
}

export default Id_recipe;