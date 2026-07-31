import { useEffect } from "react";
import { useCurrencyStore } from "../store/CurrencyStore";
// https://api.frankfurter.dev/v1/latest?amount=100&from=EUR&to=USD
function ChangeCurrencyForm() {
  const amount = useCurrencyStore((state) => state.amount);
  const setAmount = useCurrencyStore((state) => state.setAmount);

  const fromCurrency = useCurrencyStore((state) => state.fromCurrency);
  const setFromCurrency = useCurrencyStore((state) => state.setFromCurrency);

  const toCurrency = useCurrencyStore((state) => state.toCurrency);
  const setToCurrency = useCurrencyStore((state) => state.setToCurrency);

  const result = useCurrencyStore((state) => state.result);
  const setResult = useCurrencyStore((state) => state.setResult);

  useEffect(() => {
    const controller = new AbortController();
    async function FetchData() {
      if (fromCurrency === toCurrency) {
        alert("From and To currencies cannot be the same.");
        setResult(amount);
        return;
      }
      try {
        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal },
        );
        if (!res.ok) throw new Error("Something Went Wrong");
        const data = await res.json();
        setResult(data.rates[toCurrency]);
      } catch (error) {
        console.error(error);
      }
    }
    if (amount && fromCurrency && toCurrency) {
      FetchData();
    }
    return () => {
      controller.abort();
    };
  }, [amount, fromCurrency, toCurrency, setResult]);

  return (
    <form className="converter">
      <h1 style={{ textAlign: "center" }}>Currency Converter</h1>

      <label>
        Amount
        <input
          type="number"
          placeholder="Enter amount"
          value={amount > 0 ? amount : ""}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </label>

      <label>
        From
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </label>

      <label>
        To
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </label>

      <label>
        Result
        <input type="text" value={result > 0 ? result : "0.00"} disabled />
      </label>
    </form>
  );
}
export default ChangeCurrencyForm;
