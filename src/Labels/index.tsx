import { getFraction, getInteger } from "./../mapping/fractions";
import React, { FC } from "react";

const Labels: FC<Props> = ({
  labelColor,
  secondaryLabelColor,
  labelBottom,
  labelFontFamily,
  labelFontSize,
  valueFontSize,
  appendToValue,
  prependToValue,
  verticalOffset,
  hideLabelValue,
  selected,
  labelTop,
}) => {
  const styles: { [key: string]: React.CSSProperties } = {
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
      fontFamily: labelFontFamily,
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
      fontFamily: "Fraction",
      display: "flex",
      alignItems: "center",
    },

    fraction: {
      fontSize: `calc(${valueFontSize} + 2rem)`,
      padding: "0 2px",
    }
  };

  const integer: number = getInteger(selected?.value);
  const fraction: string | null = getFraction(selected?.value);

  return (
    <div style={{ ...styles.labels, ...(hideLabelValue && styles.hide) }}>
      <div style={styles.secondaryText}>{labelTop}</div>
      <div style={{ ...styles.value, ...(!labelBottom && styles.bottomMargin) }}>
        <code>
          <span style={styles.prepended}>{prependToValue}</span>
          {fraction ? (
            <span style={styles.mainLabel}>
              {integer === 0 && fraction ? "" : integer}
              <span style={styles.fraction}>{fraction}</span>
            </span>
          ) : (
            <span style={styles.mainLabel}>
              <span style={styles.fraction}>{"‎"}</span>
              {selected?.value}
              <span style={styles.fraction}>{"‎"}</span>
            </span>
          )}

          {selected?.value !== undefined && <span style={styles.appended}>{appendToValue}</span>}
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
  labelFontFamily: string;
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
