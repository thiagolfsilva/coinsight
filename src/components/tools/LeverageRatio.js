import React, { useState } from "react";
//import "./LeverageRatio.css";

function LeverageRatio() {
  const [LTV, setLTV] = useState(0);
  const [margin, setMargin] = useState(0);
  const [leverage, setLeverage] = useState(0);


  function handleLTVChange(e) {
    setLTV(e.target.value);
    setMargin((100 * (100 - e.target.value)) / e.target.value);
    setLeverage(e.target.value/(100-e.target.value));
  }

  function handleMarginChange(e) {
    setMargin(e.target.value);
    console.log(e.target.value);
    let leverage = 100/e.target.value;
    setLeverage(leverage);
    setLTV(100*leverage/(1+leverage))

  }
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", width: "100%" }}>
      <h1 style={{ textAlign: "center" }}>Leverage Ratio</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "100%", marginBottom: "10px" }}>
          <label style={{ display: "block" }}>LTV (%):</label>
          <input type="number" value={LTV} onChange={handleLTVChange} style={{ width: "100%" }} />
        </div>
        <div style={{ width: "100%", marginBottom: "10px" }}>
          <label style={{ display: "block" }}>Margin Ratio (%):</label>
          <input type="number" value={margin} onChange={handleMarginChange} style={{ width: "100%" }} />
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>For a leverage of {leverage}X</p>
        </div>
      </div>
    </div>
  );
  
}

export default LeverageRatio;