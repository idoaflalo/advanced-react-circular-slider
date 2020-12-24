import React from "react";
import PropTypes, { any } from "prop-types";

const LabelTitle = ({
  labelColor,
  labelBottom,
  labelFontSize,
  valueFontSize,
  appendToValue,
  prependToValue,
  verticalOffset,
  hideLabelValue,
  label
}) => {
  const styles = {
    title: {
      left: "inherit !important",
      zIndex: 100,
      textAlign: "center",
      overflow: "hidden",
      position: "absolute",
      right: 0,
      top: 0,
      width: "50%",
      height: "50%",
      transformOrigin: "0% 100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    labels: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: `${labelColor}`,
      userSelect: "none",
      zIndex: 1,
    },

    value: {
      transform: "rotate(44.5deg) translateY(-66px)",
    },

    bottomMargin: {
      marginBottom: `calc(${verticalOffset})`,
    },

    appended: {
      position: "absolute",
      right: "0",
      top: "0",
      transform: "translate(100%, 0)",
    },

    prepended: {
      position: "absolute",
      left: "0",
      top: "0",
      transform: "translate(-100%, 0)",
    },

    hide: {
      display: "none",
    },
  };

  return (
    <div style={styles.title}>
      <h2 style={styles.value} id="myElement">
        {label.split("").map((char, key) => (
          <span key={key}>{char}</span>
        ))}
      </h2>
    </div>
  );
};

LabelTitle.propTypes = {
  label: any,
  labelColor: PropTypes.string,
  labelBottom: PropTypes.bool,
  labelFontSize: PropTypes.string,
  valueFontSize: PropTypes.string,
  appendToValue: PropTypes.string,
  prependToValue: PropTypes.string,
  verticalOffset: PropTypes.string,
  hideLabelValue: PropTypes.bool,
};

export default LabelTitle;
