"use client";
import { useEffect, useState } from "react";
import "./calculator.css";
import "./result.css";

export default function Home() {
  const [result, setResult] = useState<number>(0);
  const [total, setTotal] = useState();
  const [amount, setAmount] = useState();
  const [years, setYears] = useState();
  const [rate, setRate] = useState();
  const [type, setType] = useState("");

  const [errorStates, setErrorState] = useState({
    amount: false,
    years: false,
    rate: false,
    type: false,
  });

  const errorCheck = (variable: number | string | undefined, guide: string) => {
    if (!variable || variable == 0) {
      setErrorState((prevState) => ({
        ...prevState,
        [guide]: !variable,
      }));
    }
    return;
  };
  const handleClick = async () => {
    await errorCheck(amount, "amount");
    await errorCheck(years, "years");
    await errorCheck(rate, "rate");
    await errorCheck(type, "type");
    console.log(errorStates);

    if (Object.values(errorStates).some((v) => v === true)) return;

    const P = amount;
    const annualRate = rate / 100;
    const r = annualRate / 12;
    const n = years * 12;

    let monthlyPayment = 0;

    if (type === "repayment") {
      const numerator = r * Math.pow(1 + r, n);
      const denominator = Math.pow(1 + r, n) - 1;
      monthlyPayment = P * (numerator / denominator);
    } else {
      monthlyPayment = (P * annualRate) / 12;
    }

    setResult(parseFloat(monthlyPayment.toFixed(2)));
    setTotal(parseFloat((monthlyPayment * n).toFixed(2)));
  };

  useEffect(() => {}, [errorStates]);

  return (
    <main>
      <section id="calculator-form">
        <div className="title-and-clear-btn-container">
          <h1>Mortgage Calculator</h1>
          <p className="clickable">Clear All</p>
        </div>
        <div className="form-container">
          <label htmlFor="amount">Mortgage Amount</label>
          <div
            className={`input-box reverse ${errorStates.amount ? "error" : ""}`}
          >
            <input
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              type="number"
              name="amount"
            />
            <div className="input-guideline-box rounded-l-5px">£</div>
          </div>
          <label htmlFor="years">Mortgage Term</label>
          <div className={`input-box ${errorStates.years ? "error" : ""}`}>
            <input
              value={years}
              type="number"
              name="years"
              onChange={(e) => setYears(parseFloat(e.target.value))}
            />
            <div className="input-guideline-box rounded-r-5px">years</div>
          </div>
          <label htmlFor="rate">Interest Rate</label>
          <div className={`input-box ${errorStates.rate ? "error" : ""}`}>
            <input
              value={rate}
              type="number"
              name="rate"
              onChange={(e) => setRate(parseFloat(e.target.value))}
            />
            <div className="input-guideline-box rounded-r-5px">%</div>
          </div>
          <label htmlFor="type">Mortgage Type</label>
          <label className="radio-label">
            <div className="input-box radio-input-box clickable">
              <input
                type="radio"
                name="type"
                value="repayment"
                onChange={(e) => setType("repayment")}
              />
              Repayment
            </div>
          </label>
          <label className="radio-label">
            <div className="input-box radio-input-box clickable">
              <input
                type="radio"
                name="type"
                value="interest-only"
                onChange={(e) => setType("interest-only")}
              />
              Interest Only
            </div>
          </label>
        </div>
        <button onClick={() => handleClick()}>
          <img
            src="./assets/images/icon-calculator.svg"
            alt="Calculator vector."
          />
          Calculate Repayments
        </button>
      </section>
      <section id="result">
        {!result ? (
          <div className="results-container">
            <img
              src="./assets/images/illustration-empty.svg"
              alt="Abstract drawing of a calculation sheet with money, a pen and calculator floating around it."
            />
            <h2>Results shown here</h2>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repaiments would be.
            </p>
          </div>
        ) : (
          <div className="results-container success">
            <h2>Your results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayments" again.
            </p>
            <div className="result-card">
              <div className="card-lip"></div>
              <p>Your monthly repayments</p>
              <b className="repayment-amount">£{result}</b>
              <hr />
              <div>
                <p>Total you'll repay over the term</p>
                <b className="total-amount">£{total}</b>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
