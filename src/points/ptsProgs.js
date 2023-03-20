import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

const DynamicProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const handlePercentageChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setPercentage("");
    } else {
      setPercentage(Math.min(Math.max(value, 0), maxValue));
    }
  };

  const handleMaxValueChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setMaxValue("");
    } else {
      setMaxValue(Math.max(value, percentage));
    }
  };

  const percentageValue = ((percentage / maxValue) * 100).toFixed(2);

  const gradientBackground = {
    backgroundImage: `linear-gradient(to right, #FF0000 0%, #FFFF00 50%, #00FF00 100%)`,
  };

  return (
    <div>
      <h2>Speed Progress Bar</h2>
      <div>
        <label htmlFor="percentageInput">Percentage:</label>
        <input
          type="text"
          id="percentageInput"
          value={percentage}
          onChange={handlePercentageChange}
        />
      </div>
      <div>
        <label htmlFor="maxValueInput">Max value:</label>
        <input
          type="text"
          id="maxValueInput"
          value={maxValue}
          onChange={handleMaxValueChange}
        />
      </div>
      <div style={gradientBackground}>
        <ProgressBar now={percentageValue} label={`${percentageValue}`} />
      </div>
    </div>
  );
};
const DynamicProgressBar2 = () => {
  const [percentage, setPercentage] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const handlePercentageChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setPercentage("");
    } else {
      setPercentage(Math.min(Math.max(value, 0), maxValue));
    }
  };

  const handleMaxValueChange = (e) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setMaxValue("");
    } else {
      setMaxValue(Math.max(value, percentage));
    }
  };

  const percentageValue = ((percentage / maxValue) * 100).toFixed(2);

  const gradientBackground = {
    backgroundImage: `linear-gradient(to right, #FF0000 0%, #FFFF00 50%, #00FF00 100%)`,
  };

  return (
    <div>
      <h2>Accuracy Progress Bar</h2>
      <div>
        <label htmlFor="percentageInput">Percentage:</label>
        <input
          type="text"
          id="percentageInput"
          value={percentage}
          onChange={handlePercentageChange}
        />
      </div>
      <div>
        <label htmlFor="maxValueInput">Max value:</label>
        <input
          type="text"
          id="maxValueInput"
          value={maxValue}
          onChange={handleMaxValueChange}
        />
      </div>
      <div style={gradientBackground}>
        <ProgressBar now={percentageValue} label={`${percentageValue}`} />
      </div>
    </div>
  );
};

export { DynamicProgressBar, DynamicProgressBar2 };
