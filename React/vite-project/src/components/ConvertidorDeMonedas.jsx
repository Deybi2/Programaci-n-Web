/*import { useEffect, useState } from 'react';

export function ConvertidorDeMonedas() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/f90d371b677030470c0f6780/latest/USD")
      .then(response => response.json())
      .then(data => setRates(data.conversion_rates))
      .catch(console.error);
  }, []);

  const handleConversion = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  return (
    <div>
      <h1>Convertidor de Monedas</h1>
      <div>
        <label>Cantidad: </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>De: </label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {Object.keys(rates).map(rate => (
            <option key={rate} value={rate}>{rate}</option>
          ))}
        </select>
      </div>
      <div>
        <label>A: </label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {Object.keys(rates).map(rate => (
            <option key={rate} value={rate}>{rate}</option>
          ))}
        </select>
      </div>
      <button onClick={handleConversion}>Convertir</button>
      <h2>{amount} {fromCurrency} son {convertedAmount} {toCurrency}</h2>
    </div>
  );
}*/

import { useEffect, useState } from 'react';
import './ConvertidorDeMonedas.css'; // Asegúrate de tener este archivo CSS

export function ConvertidorDeMonedas() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/f90d371b677030470c0f6780/latest/USD")
      .then(response => response.json())
      .then(data => setRates(data.conversion_rates))
      .catch(console.error);
  }, []);

  const handleConversion = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  return (
    <div className="converter-container">
      <h1>Convertidor de Monedas</h1>
      <div className="converter-inputs">
        <div className="converter-group">
          <label>Cantidad:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="converter-group">
          <label>De:</label>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {Object.keys(rates).map(rate => (
              <option key={rate} value={rate}>{rate}</option>
            ))}
          </select>
        </div>
        <div className="converter-group">
          <label>A:</label>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {Object.keys(rates).map(rate => (
              <option key={rate} value={rate}>{rate}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="converter-button" onClick={handleConversion}>Convertir</button>
      <h2>{amount} {fromCurrency} son {convertedAmount} {toCurrency}</h2>
    </div>
  );
}