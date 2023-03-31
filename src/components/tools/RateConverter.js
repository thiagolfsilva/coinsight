import React, { useState } from "react";

function RateConverter() {
    const [rate, setRate] = useState(0);
    const [interval, setInterval] = useState("hourly");
  
    const intervals = {
      hourly: { label: "Hourly", hours: 1 },
      every8hours: { label: "Every 8 hours", hours: 8 },
      daily: { label: "Daily", hours: 24 },
      weekly: { label: "Weekly", hours: 24 * 7 },
      monthly: { label: "Monthly", hours: 24 * 30 },
      yearly: { label: "Yearly", hours: 24 * 365 }
    };
  
    function handleRateChange(e) {
      setRate(parseFloat(e.target.value));
    }
  
    function handleIntervalChange(e) {
      setInterval(e.target.value);
    }
  
    function calculateRate(newInterval, precision) {
      const hourlyRate = rate / 100 / intervals[interval].hours;
      const newHourlyRate = hourlyRate * intervals[newInterval].hours;
      const newRate = newHourlyRate * 100;
      return newRate.toFixed(precision);
    }
  
    return (
        <div style={{ maxWidth: "540px", margin: "0 auto", width: "100%" }}>
          <h1 style={{ textAlign: "center" }}>Rate Converter</h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", marginBottom: "10px" }}>
              <label style={{ display: "block" }}>Rate (%):</label>
              <input
                type="number"
                step="0.01"
                value={rate}
                onChange={handleRateChange}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "100%", marginBottom: "10px" }}>
              <label style={{ display: "block" }}>Interval:</label>
              <select value={interval} onChange={handleIntervalChange} style={{ width: "100%" }}>
                {Object.keys(intervals).map((key) => (
                  <option key={key} value={key}>
                    {intervals[key].label}
                  </option>
                ))}
              </select>
            </div>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>Interval</th>
                  <th>Rate (Simple)</th>
                </tr>
                <tr>
                  <td>Hourly</td>
                  <td>{calculateRate("hourly", 5)}%</td>
                </tr>
                <tr>
                  <td>Every 8 hours</td>
                  <td>{calculateRate("every8hours", 4)}%</td>
                </tr>
                <tr>
                  <td>Daily</td>
                  <td>{calculateRate("daily", 3)}%</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>{calculateRate("weekly", 2)}%</td>
                </tr>
                <tr>
                  <td>Monthly</td>
                  <td>{calculateRate("monthly", 2)}%</td>
                </tr>
                <tr>
                  <td>Yearly</td>
                  <td>{calculateRate("yearly", 2)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
  }

  export default RateConverter;
