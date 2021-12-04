import React from "react";
import CircularSlider from "./CircularSlider";

const App = () => {
  const styles = {
    slider: {
      padding: "2rem",
    },
  };

  return (
    <div style={styles.slider}>
      <CircularSlider
        labelTop="Spoons"
        labelBottom="TBSP"
        width={300}
        min={0}
        max={4}
        step={0.1}
        labelStep={0.5}
        onChange={console.log}
      ></CircularSlider>
    </div>
  );
};

export default App;