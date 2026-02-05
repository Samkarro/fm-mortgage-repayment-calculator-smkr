import "./calculator.css";

export default function Home() {
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
      <section id="result"></section>
    </main>
  );
}
