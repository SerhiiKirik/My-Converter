import React, { useEffect, useState } from 'react';
import './App.scss';
import { getData } from './api/api';
import { CurrencyRow } from './components/CurrencyRow/CurrencyRow';

export const App: React.FC = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [toAmount, setToAmount] = useState<number>(0);
  const [fromAmount, setFromAmount] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    if (event.target.id === 'from') {
      setFromAmount(+event.target.value);
    } else {
      setToAmount(+event.target.value);
    }
  };

  const fetchData = async () => {
    try {
      const currency = await getData('latest', 'format=1');

      const firstCurrency = Object.keys(currency.rates)[0];

      setCurrencyOptions([...Object.keys(currency.rates)]);
      setFromCurrency(currency.base);
      setToCurrency(firstCurrency);
      setExchangeRate(+currency.rates[firstCurrency]);
    } catch (error) {
      console.warn('Error has occurred when fetching latest rates.');
    };
  }

  useEffect(() => {
    fetchData()
  }, []);

  const changeConvertFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(event.target.value);
  };

  const changeConvertTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(event.target.value);
  };

  useEffect(() => {
    console.log(fromAmount, exchangeRate)
    setFromAmount(toAmount ? toAmount / exchangeRate : 0);
  }, [toAmount]);

  useEffect(() => {
    console.log(toAmount, exchangeRate)
    setToAmount(fromAmount * exchangeRate);
  }, [fromAmount]);


  return (
    <div className="App__wrapper">
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={changeConvertFrom}
        amount={fromAmount}
        onChangeAmount={handleInputChange}
        id={'from'}
      />
      <div className="App__title">Convert</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={changeConvertTo}
        amount={toAmount}
        onChangeAmount={handleInputChange}
        id={'to'}
      />
    </div>
  );
};
