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
          <div className="input-box">
            <div className="input-guideline-box rounded-l-5px">£</div>
            <input type="number" name="amount" />
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
          <label>
            <input type="radio" name="type" value="repayment" /> Repayment
          </label>
          <label>
            <input type="radio" name="type" value="interest-only" /> Interest
            Only
          </label>
        </div>
        <button>Calculate Repayments</button>
      </section>
      <section id="result"></section>
    </main>
  );
}
