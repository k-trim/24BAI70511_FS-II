import {useState,useEffect} from "react";


function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
      });
  }, []);

  function convertCurrency() {
    fetch(`https://open.er-api.com/v6/latest/${from}`)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[to];
        const converted = amount * rate;
        setResult(converted.toFixed(2));
      });
  }

  function swapCurrency() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /><br />

     <label>From :</label>

      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>

      <br />  <br />

      <label>To :</label>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>

      <br /><br />
      <button onClick={swapCurrency}>Swap</button>
      <button onClick={convertCurrency}>Convert</button>
      <hr></hr>

      <h2>{amount} {from} = {result} {to}</h2>
    </div>
  );
}


export default App;