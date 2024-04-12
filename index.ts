#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Defined the exchange rates manually
const exchangeRates:any = {
  PKR: { USD: 0.0056, INR: 0.52, CAD: 0.0071, SAR: 0.021, EUR: 0.0053 },
  USD: { PKR: 178.57, INR: 74.51, CAD: 1.27, SAR: 3.75, EUR: 0.95 },
  INR: { PKR: 2.40, USD: 0.013, CAD: 0.017, SAR: 0.050, EUR: 0.012 },
  CAD: { PKR: 140.85, USD: 0.79, INR: 60.18, SAR: 2.86, EUR: 0.74 },
  SAR: { PKR: 49.26, USD: 0.27, INR: 21.07, CAD: 0.35, EUR: 0.26 },
  EUR: { PKR: 188.68, USD: 1.05, INR: 80.65, CAD: 1.36, SAR: 3.84 }
};

// Function to calculate the conversion
const calculateConversion = (from:any, to:any, amount:any) => {
  const rate = exchangeRates[from][to];
  return (amount * rate).toFixed(2);
};

// Main function to convert currencies
const convertCurrency = async () => {
  const currency_convertor = await inquirer.prompt([
    {
      name: "from",
      type: "list",
      choices: ["PKR", "USD", "INR", "CAD", "SAR", "EUR"],
      message: chalk.blue("From which currency do you want to convert?")
    },
    {
      name: "to",
      type: "list",
      choices: ["PKR", "USD", "INR", "CAD", "SAR", "EUR"],
      message: chalk.blue("To which currency do you want to convert?")
    },
    {
      name: "amount",
      type: "number",
      message: chalk.blue("How much do you want to convert?")
    }
  ]);

  const convertedAmount = calculateConversion(currency_convertor.from, currency_convertor.to, currency_convertor.amount);

  console.log(`${currency_convertor.amount} ${currency_convertor.from} is equal to ${convertedAmount} ${currency_convertor.to}`);
};

convertCurrency();
