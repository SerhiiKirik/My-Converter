import React from 'react';

type Props = {
  currencyOptions: string[];
  selectedCurrency: string;
  onChangeCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  amount: number;
  onChangeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
};

export const CurrencyRow: React.FC<Props> = (
  {
    currencyOptions, selectedCurrency, onChangeCurrency, amount,
    onChangeAmount, id
  },
) => {
  return (
    <div className="App__input">
      <input type="text" className="App__input" value={amount} onChange={onChangeAmount} id={id} defaultValue={0} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option
            value={option}
            key={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
