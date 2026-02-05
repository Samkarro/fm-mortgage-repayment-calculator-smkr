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
          <input type="number" name="amount" />
          <label htmlFor="years">Mortgage Term</label>
          <input type="number" name="years" />
          <label htmlFor="rate">Interest Rate</label>
          <input type="number" name="rate" />
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
