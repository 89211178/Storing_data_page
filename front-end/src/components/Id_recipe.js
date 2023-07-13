import React from 'react';

function Id_recipe(link) {
  // Find the last occurrence of a digit in the link
  const lastDigitIndex = link.split('').findLastIndex((char) => !isNaN(parseInt(char)));

  // Extract the last digit part from the link
  const lastDigitPart = link.substring(lastDigitIndex);

  // Convert the last digit part to an integer
  const lastDigit = parseInt(lastDigitPart);

  // Return the last digit
  return lastDigit;
}

export default Id_recipe;