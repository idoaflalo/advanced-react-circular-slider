import React, { FC } from "react";
import "./index.css";

const Knob: FC<Props> = ({ knobRef, isDragging, knobPosition, knobColor, knobSize, hideKnob, onMouseDown, onMouseUp, children }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    knob: {
      position: "absolute",
      left: `-${knobSize / 2}px`,
      top: `-${knobSize / 2}px`,
      cursor: "grab",
      zIndex: 20,
    },

    dragging: {
      cursor: "grabbing",
    },

    pause: {
      animationPlayState: "paused",
    },

    animation: {
      transformOrigin: "50% 50%",
      animationTimingFunction: "ease-out",
      animationDuration: "1500ms",
      animationIterationCount: "infinite",
      animationName: "pulse",
    },

    hide: {
      opacity: 0,
    },
  };

  const defaultKnobIcon = () => {
    return (
      <svg width={`${knobSize}px`} height={`${knobSize}px`} viewBox={`0 0 36 36`}>
        <rect fill="#FFFFFF" x="14" y="14" width="8" height="1" />
        <rect fill="#FFFFFF" x="14" y="17" width="8" height="1" />
        <rect fill="#FFFFFF" x="14" y="20" width="8" height="1" />
      </svg>
    );
  };

  return (
    <div
      style={{
        transform: `translate(${knobPosition.x}px, ${knobPosition.y}px)`,
        ...styles.knob,
        ...(isDragging && styles.dragging),
        ...(hideKnob && styles.hide),
      }}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
    >
      <svg ref={knobRef} width={`${knobSize}px`} height={`${knobSize}px`} viewBox={`0 0 ${knobSize} ${knobSize}`}>
        <circle
          style={{ ...styles.animation, ...(isDragging && styles.pause) }}
          fill={knobColor}
          fillOpacity="0.2"
          stroke="none"
          cx={knobSize / 2}
          cy={knobSize / 2}
          r={knobSize / 2}
        />
        <circle fill={knobColor} stroke="none" cx={knobSize / 2} cy={knobSize / 2} r={(knobSize * 2) / 3 / 2} />
        {children ? children : defaultKnobIcon()}
      </svg>
    </div>
  );
};

interface Props {
  knobRef: any;
  isDragging: boolean;
  hideKnob: boolean;
  knobPosition: any;
  knobColor: string;
  knobSize: number;
  trackSize: number;
  children: any;
  onMouseDown: any;
  onMouseUp: any;
}

export default Knob;
