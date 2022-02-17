import React from "react";
import CircularSlider from "./CircularSlider";

const generateRange = (min: number, max: number, step: number, labelStep: number) => {
  const data: object[] = [];
  for (let num = min; +num.toFixed(2) <= max; num += step) {
    const key = +num.toFixed(2);
    data.push({ key: key.toString(), value: key, showLabel: +(key * 100).toFixed(0) % +(labelStep * 100).toFixed(0) === 0 });
  }

  return data;
};

const data = [...generateRange(0.1, 1, 0.1, 0.1), ...generateRange(1.5, 10, 0.5, 2)];

const App = () => {
  return (
    <div>
      <CircularSlider
        labelTop="Spoons"
        labelBottom="TBSP"
        width={300}
        data={data}
        onChange={console.log}
      ></CircularSlider>
    </div>
  );
};

export default App;
