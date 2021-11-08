import React from "react";
import PropTypes from "prop-types";

function convertToFraction(value) {
  const valueStr = value.toString();
  if (valueStr === "0.25") return "¼";
  if (valueStr === "0.5") return "½";
  if (valueStr === "0.75") return "¾";
  if (valueStr.endsWith(".25")) return Math.floor(value) + "¼";
  if (valueStr.endsWith(".5")) return Math.floor(value) + "½";
  if (valueStr.endsWith(".75")) return Math.floor(value) + "¾";
  return valueStr;
}

const Svg = ({
  width,
  limit,
  label,
  labelColor,
  roundLabelColor,
  roundLabelFontSize,
  labelFontSize,
  labelOffset,
  activeLabelColor,
  direction,
  strokeDasharray,
  strokeDashoffset,
  progressColorFrom,
  progressColorTo,
  trackColor,
  doubleLineColor,
  doubleLineType,
  progressSize,
  trackSize,
  svgFullPath,
  radiansOffset,
  progressLineCap,
  offsetAngle,
  data,
  activedItem = 0,
  onLableClick,
}) => {
  const styles = {
    svg: {
      position: "relative",
      zIndex: 2,
    },
    path: {
      transform: `rotate(${radiansOffset}rad) ${direction === -1 ? "scale(-1, 1)" : "scale(1, 1)"}`,
      transformOrigin: "center center",
    },
    doubleLine: {
      transform: `rotate(${radiansOffset}rad) ${direction === -1 ? "scale(-0.9, 0.9)" : "scale(0.9, 0.9)"}`,
      transformOrigin: "center center",
    },
    label: {
      transform: "translateY(20px)",
    },
    text: {
      textAnchor: "middle",
      fontSize: roundLabelFontSize,
      fill: roundLabelColor,
      cursor: "pointer",
      userSelect: "none",
      fontFamily: "Telex",
      transform: "rotate(180deg)",
      transformOrigin: "center",
    },
    title: {
      opacity: 0.4,
      transition: "all 0.3s ease-out",
    },
    activedTitle: {
      fill: activeLabelColor,
      fontWeight: "bold",
      opacity: 1,
      fontSize: `calc(${roundLabelFontSize} + 0.2rem)`,
    },
  };

  const doubleTrackRef = React.useRef(null);
  const halfTrack = trackSize / 2;
  const doubleTrack = trackSize;
  const contentBorder = trackSize * 2.5;
  const maxValue = (strokeDasharray * (360 - limit)) / 360;
  const curveRadian = width / 2 + labelOffset;
  const angleUnit = data ? limit / data.length : 1;

  const getValue = (el, type) => {
    const totalValue = el.current?.getTotalLength() || 100;
    if (type === "track") {
      return (totalValue * (360 - limit)) / 360;
    } else if (type === "progress") {
      return (totalValue * strokeDashoffset) / strokeDasharray;
    }
    return totalValue;
  };

  const getDoubleLineColor = () => {
    if (doubleLineColor === "gradiant") {
      return "url(#doubleCircle)";
    } else if (doubleLineColor) {
      return doubleLineColor;
    }
  };

  return (
    <svg width={`${width}px`} height={`${width}px`} viewBox={`0 0 ${width} ${width}`} overflow="visible" style={styles.svg}>
      <defs>
        <linearGradient id={label} x1="100%" x2="0%">
          <stop offset="0%" stopColor={progressColorFrom} />
          <stop offset="100%" stopColor={progressColorTo} />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient id={"doubleCircle"} x1="100%" x2="0%">
          <stop offset="0%" stopColor={"rgba(67, 255, 131, 0.54)"} />
          <stop offset="25.88%" stopColor={"#43FF83"} />
          <stop offset="54.01%" stopColor={"#FFF854"} />
          <stop offset="79.01%" stopColor={"#FF7878"} />
          <stop offset="100%" stopColor={"#FF3737"} />
        </linearGradient>
      </defs>

      <path
        className="background-circle"
        style={styles.path}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={maxValue}
        strokeWidth={1}
        stroke={null}
        strokeLinecap={progressLineCap}
        fill="transparent"
        d={`
            M ${width / 2}, ${width / 2}
            m 0, -${width / 2 - contentBorder}
            a ${width / 2 - contentBorder},${width / 2 - contentBorder} 0 0,1 0,${width - contentBorder * 2}
            a -${width / 2 - contentBorder},-${width / 2 - contentBorder} 0 0,1 0,-${width - contentBorder * 2}
        `}
      />

      {doubleLineColor && (
        <path
          className="double-track"
          ref={doubleTrackRef}
          style={styles.path}
          strokeDasharray={getValue(doubleTrackRef)}
          strokeDashoffset={getValue(doubleTrackRef, doubleLineType)}
          strokeWidth={trackSize}
          stroke={getDoubleLineColor()}
          strokeLinecap={progressLineCap}
          fill="none"
          d={`
            M ${width / 2}, ${width / 2}
            m 0, -${width / 2 - doubleTrack}
            a ${width / 2 - doubleTrack},${width / 2 - doubleTrack} 0 0,1 0,${width - doubleTrack * 2}
            a -${width / 2 - doubleTrack},-${width / 2 - doubleTrack} 0 0,1 0,-${width - doubleTrack * 2}
        `}
        />
      )}

      <path
        className="track-line"
        style={styles.path}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={maxValue}
        strokeWidth={trackSize}
        stroke={trackColor}
        strokeLinecap={progressLineCap}
        fill="none"
        d={`
            M ${width / 2}, ${width / 2}
            m 0, -${width / 2 - halfTrack}
            a ${width / 2 - halfTrack},${width / 2 - halfTrack} 0 0,1 0,${width - halfTrack * 2}
            a -${width / 2 - halfTrack},-${width / 2 - halfTrack} 0 0,1 0,-${width - halfTrack * 2}
        `}
      />
      <path
        style={styles.path}
        ref={svgFullPath}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeWidth={progressSize}
        strokeLinecap={progressLineCap !== "round" ? "butt" : "round"}
        fill="none"
        stroke={`url(#${label})`}
        d={`
            M ${width / 2}, ${width / 2}
            m 0, -${width / 2 - halfTrack}
            a ${width / 2 - halfTrack},${width / 2 - halfTrack} 0 0,1 0,${width - halfTrack * 2}
            a -${width / 2 - halfTrack},-${width / 2 - halfTrack} 0 0,1 0,-${width - halfTrack * 2}
        `}
      />

      <path
        id="myTextPath"
        d={`
          M ${curveRadian},${curveRadian} m ${-curveRadian}, 0  
          A ${curveRadian},${curveRadian} 0 0 1 0,${curveRadian} 
          A ${curveRadian},${curveRadian} 0 0 1 -${curveRadian},0 
          A ${curveRadian},${curveRadian} 0 0 1 0,-${curveRadian} 
          A ${curveRadian},${curveRadian} 0 0 1 0,${curveRadian}
        `}
        transform={`translate(${width / 2},${width / 2})`}
        fill="none"
        stroke="none"
      />

      <text style={styles.text}>
        {data?.map((item, key) =>
          item.showLabel ? (
            <textPath xlinkHref="#myTextPath" startOffset={`${(angleUnit * key + angleUnit / 2 - offsetAngle) / 3.6}%`} key={item.key}>
              <tspan style={{ ...styles.title, ...(key === activedItem - 1 && styles.activedTitle) }} onClick={() => onLableClick(key + 1)}>
                {convertToFraction(item.value)}
              </tspan>
            </textPath>
          ) : null,
        )}
      </text>
    </svg>
  );
};

Svg.propTypes = {
  width: PropTypes.number,
  label: PropTypes.string,
  direction: PropTypes.number,
  svgFullPath: PropTypes.object,
  strokeDasharray: PropTypes.number,
  strokeDashoffset: PropTypes.number,
  progressColorFrom: PropTypes.string,
  progressColorTo: PropTypes.string,
  progressLineCap: PropTypes.string,
  progressSize: PropTypes.number,
  trackColor: PropTypes.string,
  trackSize: PropTypes.number,
  radiansOffset: PropTypes.number,
};

export default Svg;
