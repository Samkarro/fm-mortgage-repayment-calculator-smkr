"use client";
import { useState } from "react";
import "./calculator.css";
import "./result.css";

export default function Home() {
  const [result, setResult] = useState<number>(0);

  return (
    <main>
      <section id="calculator-form">
        <div className="title-and-clear-btn-container">
          <h1>Mortgage Calculator</h1>
          <p className="clickable">Clear All</p>
        </div>
        <div className="form-container">
          <label htmlFor="amount">Mortgage Amount</label>
          <div className="input-box reverse">
            <input type="number" name="amount" />
            <div className="input-guideline-box rounded-l-5px">£</div>
          </div>
          <label htmlFor="years">Mortgage Term</label>
          <div className="input-box">
            <input type="number" name="years" />
            <div className="input-guideline-box rounded-r-5px">years</div>
          </div>
          <label htmlFor="rate">Interest Rate</label>
          <div className="input-box">
            <input type="number" name="rate" />
            <div className="input-guideline-box rounded-r-5px">%</div>
          </div>
          <label htmlFor="type">Mortgage Type</label>
          <label className="radio-label">
            <div className="input-box radio-input-box clickable">
              <input type="radio" name="type" value="repayment" />
              Repayment
            </div>
          </label>
          <label className="radio-label">
            <div className="input-box radio-input-box clickable">
              <input type="radio" name="type" value="interest-only" />
              Interest Only
            </div>
          </label>
        </div>
        <button>
          <img
            src="./assets/images/icon-calculator.svg"
            alt="Calculator vector."
          />
          Calculate Repayments
        </button>
      </section>
      <section id="result">
        {result == 0 ? (
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
            <h2>Results shown here</h2>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repaiments would be.
            </p>
            <div className="result-card">
              <p>Your monthly repayments</p>
              <p className="repayment-amount">{result}</p>
              <hr />
              <p>Total you'll repay over the term</p>
              <p className="total-amount"></p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
