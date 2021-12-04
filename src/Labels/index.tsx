import React from "react";

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
}: Props) => {
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
      fontFamily: `"Segoe UI", "Roboto"`,
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
      fontSize: labelFontSize,
    },

    hide: {
      display: "none",
    },

    mainLabel: {
      fontFamily: "Telex",
    },
  };

  return (
    <div style={{ ...styles.labels, ...(hideLabelValue && styles.hide) } as any}>
      <div style={styles.secondaryText}>{labelTop}</div>
      <div style={{ ...styles.value, ...(!labelBottom && styles.bottomMargin) } as any}>
        <code>
          <span style={styles.prepended as any}>{prependToValue}</span>
          <span style={styles.mainLabel}>{selected?.value}</span>
          {selected?.value !== undefined && <span style={styles.appended as any}>{appendToValue}</span>}
        </code>
      </div>
      <div style={styles.secondaryText}>{labelBottom}</div>
    </div>
  );
};

interface Props {
  labelColor: string;
  secondaryLabelColor: string;
  labelBottom: string;
  labelFontSize: string;
  valueFontSize: string;
  appendToValue: string;
  prependToValue: string;
  verticalOffset: string;
  hideLabelValue: boolean;
  selected: any;
  labelTop: string;
}

export default Labels;