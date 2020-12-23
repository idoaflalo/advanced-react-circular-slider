import React from "react";
import PropTypes from "prop-types";

const Svg = ({
  width,
  limit,
  max,
  label,
  direction,
  strokeDasharray,
  strokeDashoffset,
  progressColorFrom,
  progressColorTo,
  trackColor,
  doubleLineColor,
  progressSize,
  trackSize,
  svgFullPath,
  radiansOffset,
  progressLineCap,
  offsetAngle,
  data,
  activedItem,
}) => {
  const styles = {
    svg: {
      position: "relative",
      zIndex: 2,
    },

    path: {
      transform: `rotate(${radiansOffset}rad) ${
        direction === -1 ? "scale(-1, 1)" : "scale(1, 1)"
      }`,
      transformOrigin: "center center",
    },
    label: {
      transform: "translateY(40px)",
    },
    text: {
      textAnchor: "middle",
      fontSize: "22.5",
      fill: "blue",
    },
  };

  const halfTrack = trackSize / 2;
  const maxValue = (strokeDasharray * (360 - limit)) / 360;
  const curveRadian = width / 2 + 30;
  const angleUnit = data ? limit / (data.length) : 1;
  console.log(angleUnit, offsetAngle)
  offsetAngle = 0;
  return (
    <svg
      width={`${width}px`}
      height={`${width}px`}
      viewBox={`0 0 ${width} ${width}`}
      overflow="visible"
      style={styles.svg}
    >
      <defs>
        <linearGradient id={label} x1="100%" x2="0%">
          <stop offset="0%" stopColor={progressColorFrom} />
          <stop offset="100%" stopColor={progressColorTo} />
        </linearGradient>
      </defs>
      <path
        className="progress-line"
        style={styles.path}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={maxValue}
        strokeWidth={trackSize}
        stroke={trackColor}
        strokeLinecap={"round"}
        fill="none"
        d={`
            M ${width / 2}, ${width / 2}
            m 0, -${width / 2 - halfTrack}
            a ${width / 2 - halfTrack},${width / 2 - halfTrack} 0 0,1 0,${
          width - halfTrack * 2
        }
            a -${width / 2 - halfTrack},-${width / 2 - halfTrack} 0 0,1 0,-${
          width - halfTrack * 2
        }
        `}
      />
      <path
        style={styles.path}
        strokeDasharray={strokeDasharray * 0.9}
        strokeDashoffset={strokeDashoffset * 0.9}
        strokeWidth={progressSize}
        strokeLinecap={"flat"}
        fill="none"
        stroke={doubleLineColor}
        d={`
            M ${width / 2}, ${width / 2}
            m 0, -${width / 2 - progressSize}
            a ${width / 2 - progressSize},${width / 2 - progressSize} 0 0,1 0,${
          width - progressSize * 2
        }
            a -${width / 2 - progressSize},-${
          width / 2 - progressSize
        } 0 0,1 0,-${width - progressSize * 2}
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
            a ${width / 2 - halfTrack},${width / 2 - halfTrack} 0 0,1 0,${
          width - halfTrack * 2
        }
            a -${width / 2 - halfTrack},-${width / 2 - halfTrack} 0 0,1 0,-${
          width - halfTrack * 2
        }
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
        {/* <tspan dy="5"> */}
        {/* </tspan> */}
        {data?.map((item, key) => (
          <textPath
            xlinkHref="#myTextPath"
            dy="5"
            startOffset={`${(angleUnit * (key) - offsetAngle)/3.6}%`}
            key={key}
          >
            {item.value}
          </textPath>
        ))}
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
