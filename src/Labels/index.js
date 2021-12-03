import React from "react";
import PropTypes, { any } from "prop-types";

const Labels = ({
  labelColor,
  secondaryLabelColor,
  labelBottom,
  labelFontSize,
  valueFontSize,
  appendToValue,
  prependToValue,
  verticalOffset,
  hideLabelValue,
  selected,
  labelTop,
}) => {
  const styles = {
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
      userSelect: "none",
      color: labelColor,
      zIndex: 1,
    },
    
    value: {
      fontSize: `${valueFontSize}`,
      position: "relative",
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

    secondaryText: {
      color: secondaryLabelColor,
      fontSize: labelFontSize
    },

    hide: {
      display: "none",
    },

    mainLabel: {
      fontFamily: "Telex",
    },
  };

  return (
    <div style={{ ...styles.labels, ...(hideLabelValue && styles.hide) }}>
      <div style={styles.secondaryText}>{labelTop}</div>
      <div style={{ ...styles.value, ...(!labelBottom && styles.bottomMargin) }}>
        <code>
          <span style={styles.prepended}>{prependToValue}</span>
          <span style={styles.mainLabel}>{selected?.value}</span>
          {selected?.value !== undefined && <span style={styles.appended}>{appendToValue}</span>}
        </code>
      </div>
      <div style={styles.secondaryText}>{labelBottom}</div>
    </div>
  );
};

Labels.propTypes = {
  label: any,
  labelColor: PropTypes.string,
  secondaryLabelColor: PropTypes.string,
  labelBottom: PropTypes.string,
  labelFontSize: PropTypes.string,
  valueFontSize: PropTypes.string,
  appendToValue: PropTypes.string,
  prependToValue: PropTypes.string,
  verticalOffset: PropTypes.string,
  hideLabelValue: PropTypes.bool,
};

export default Labels;
