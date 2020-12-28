import React, { useEffect, useReducer, useCallback, useRef } from "react";
import window from "global";
import PropTypes, { any } from "prop-types";
import reducer from "../redux/reducer";
import useIsServer from "../hooks/useIsServer";
import Knob from "../Knob";
import Labels from "../Labels";
import Svg from "../Svg";
import _ from "lodash";

const spreadDegrees = 360;
const knobOffset = {
  top: Math.PI / 2,
  right: 0,
  bottom: -Math.PI / 2,
  left: -Math.PI,
};

const timeout = (delay) => {
  return new Promise((res) => setTimeout(res, delay));
};
const getOffsetRideans = (knobPosition, offsetAngle) => {
  return knobOffset[knobPosition] + (offsetAngle / 180) * Math.PI;
};

const getSliderRotation = (number) => {
  if (number < 0) return -1;
  return 1;
};

const getRadians = (degrees) => {
  return (degrees * Math.PI) / 180;
};

const generateRange = (min, max) => {
  let rangeOfNumbers = [];
  for (let i = min; i <= max; i++) {
    rangeOfNumbers.push(i);
  }
  return rangeOfNumbers;
};

const CircularSlider = ({
  label = "SERVICES",
  width = 280,
  direction = 1,
  min = 0,
  max = 360,
  limit = 360,
  offsetAngle = -45,
  knobColor = "#4e63ea",
  knobSize = 36,
  knobPosition = "top",
  hideKnob = false,
  knobDraggable = true,
  knobEl = null,
  labelBottom = false,
  labelColor = "#272b77",
  labelFontSize = "1rem",
  labelOffset = 20,
  activedlabelColor = "#c54a1b",
  valueFontSize = "3rem",
  appendToValue = "",
  prependToValue = "",
  verticalOffset = "1.5rem",
  hideLabelValue = false,
  progressColorFrom = "#80C3F3",
  progressColorTo = "#4990E2",
  progressSize = 8,
  trackColor = "#DDDEFB",
  trackSize = 8,
  doubleLineColor = "#DDDEFB",
  data = [],
  dataIndex = 0,
  progressLineCap = "round",
  renderLabelValue = null,
  onChange = (value) => {},
}) => {
  const contentWidth = width - 2 * labelOffset;
  const initialState = {
    mounted: false,
    isDragging: false,
    contentWidth: contentWidth,
    radius: contentWidth / 2,
    knobPosition: knobPosition,
    label: 0,
    data: data,
    radians: 0,
    offset: 0,
    knob: {
      x: 0,
      y: 0,
    },
    dashFullArray: 0,
    dashFullOffset: 0,
  };

  const circularSlider = useRef(null);
  const knobRef = useRef(null);
  const svgFullPath = useRef(null);
  const lastAngle = useRef(0);
  const processFlag = useRef(false);
  const dragable = useRef(undefined);
  const isServer = useIsServer();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activedItem, setActived] = React.useState(null);
  const [updatedKey, updateState] = React.useState(null);

  // eslint-disable-next-line
  const microSlide = async ({ degrees, pointsInCircle, offset }) => {
    if (processFlag.current) return;
    processFlag.current = true;

    const step = 10;
    let startPoint = lastAngle.current - pointsInCircle / 2;
    const distance = Math.abs(degrees - startPoint);
    const stepDrection = degrees > startPoint ? 1 : -1;
    const stepCount = Math.round(distance / step);

    if (stepCount < 1) {
      processFlag.current = false;
      return;
    }

    for (let i = 1; i <= stepCount; i++) {
      startPoint += step * stepDrection;
      await timeout(100);

      if (Math.abs(startPoint - degrees) < step) {
        processFlag.current = false;
        startPoint = degrees;
      }

      const radians = getRadians(startPoint) - getOffsetRideans(state.knobPosition, offsetAngle);
      setKnobPosition(radians + offset * getSliderRotation(direction));
      if (!processFlag.current) {
        return;
      }
    }
  };

  const setKnobPosition = useCallback(
    (radians) => {
      const radius = state.radius - trackSize / 2;
      const offsetRadians = radians + getOffsetRideans(knobPosition, offsetAngle);
      let degrees = (offsetRadians > 0 ? offsetRadians : 2 * Math.PI + offsetRadians) * (spreadDegrees / (2 * Math.PI));

      if (!activedItem && degrees > limit) {
        degrees = 0;
        if (dragable.current === undefined) {
          dragable.current = false;
        } else {
          return;
        }
      } else if (knobPosition === "bottom" && degrees > limit) {
        degrees = limit;
        return;
      } else if (knobPosition === "top" && degrees < 360 - limit) {
        degrees = 360 - limit;
        return;
      }

      // change direction
      const dashOffset = (degrees / spreadDegrees) * state.dashFullArray;
      degrees = getSliderRotation(direction) === -1 ? spreadDegrees - degrees : degrees;
      lastAngle.current = degrees;
      knobRef.current.style = `transform: rotate(${degrees + offsetAngle}deg);`;
      const pointsInCircle = state.data.length / limit;
      const currentPosition = degrees * pointsInCircle;
      let currentPoint = currentPosition > 0.1 ? Math.ceil(currentPosition) : 0;

      setActived(currentPoint);

      if (!_.isEqual(state.data[currentPoint - 1], state.label)) {
        onChange(state.data[currentPoint - 1]);
      }

      dispatch({
        type: "setKnobPosition",
        payload: {
          dashFullOffset:
            getSliderRotation(direction) === -1
              ? dashOffset
              : (state.dashFullArray || svgFullPath.current.getTotalLength()) - dashOffset,
          label: state.data[currentPoint - 1],
          knob: {
            x: radius * Math.cos(radians) + radius,
            y: radius * Math.sin(radians) + radius,
          },
        },
      });
    },
    // eslint-disable-next-line
    [
      offsetAngle,
      limit,
      state.dashFullArray,
      state.radius,
      state.data,
      state.label,
      knobPosition,
      trackSize,
      direction,
      onChange,
    ]
  );

  const onMouseDown = () => {
    dragable.current = true;
    dispatch({
      type: "onMouseDown",
      payload: {
        isDragging: true,
      },
    });
  };

  const onMouseUp = () => {
    dragable.current = false;
    dispatch({
      type: "onMouseUp",
      payload: {
        isDragging: false,
      },
    });

    setTimeout(() => {
      updateState(Math.random());
    }, 200);
  };

  const onMouseMove = useCallback(
    (event, passive = false) => {
      if (!dragable.current) return;

      if (passive) event.preventDefault();

      let touch;
      if (event.type === "touchmove") {
        touch = event.changedTouches[0];
      }

      const offsetRelativeToDocument = (ref) => {
        const rect = ref.current.getBoundingClientRect();
        const scrollLeft = !isServer && ((window?.pageXOffset ?? 0) || (document?.documentElement?.scrollLeft ?? 0));
        const scrollTop = !isServer && ((window?.pageYOffset ?? 0) || (document?.documentElement?.scrollTop ?? 0));
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };

      const mouseXFromCenter =
        (event.type === "touchmove" ? touch.pageX : event.pageX) -
        (offsetRelativeToDocument(circularSlider).left + state.radius);
      const mouseYFromCenter =
        (event.type === "touchmove" ? touch.pageY : event.pageY) -
        (offsetRelativeToDocument(circularSlider).top + state.radius);

      const radians = Math.atan2(mouseYFromCenter, mouseXFromCenter);

      setKnobPosition(radians);
    },
    [state.radius, setKnobPosition, isServer]
  );

  // Get svg path length onmount
  useEffect(() => {
    circularSlider.current.addEventListener(
      "touchmove",
      function (e) {
        onMouseMove(e, true);
      },
      { passive: false }
    );

    dispatch({
      type: "init",
      payload: {
        mounted: true,
        data: state.data.length ? [...state.data] : [...generateRange(min, max)],
        dashFullArray: svgFullPath.current.getTotalLength ? svgFullPath.current.getTotalLength() : 0,
      },
    });

    // eslint-disable-next-line
  }, [max, min]);

  // Set knob position
  useEffect(() => {
    let updatedIndex = activedItem === null ? dataIndex : activedItem;
    const dataArrayLength = state.data.length;
    const knobPositionIndex = updatedIndex > dataArrayLength ? dataArrayLength : updatedIndex;

    if (!!dataArrayLength) {
      const pointsInCircle = limit / dataArrayLength;
      const offset = getRadians(pointsInCircle) / 2;

      dispatch({
        type: "setInitialKnobPosition",
        payload: {
          radians: Math.PI / 2 - getOffsetRideans(state.knobPosition, offsetAngle),
          offset,
        },
      });

      const degrees = getSliderRotation(direction) * knobPositionIndex * pointsInCircle;
      const radians = getRadians(degrees) - getOffsetRideans(state.knobPosition, offsetAngle);

      if (!knobPositionIndex) {
        return setKnobPosition(radians);
      }
      return setKnobPosition(radians - offset * getSliderRotation(direction));
    }

    // eslint-disable-next-line
  }, [state.dashFullArray, state.knobPosition, state.data.length, dataIndex, direction, updatedKey]);

  const sanitizedLabel = label.replace(/[\W_]/g, "_");

  const styles = {
    circularSlider: {
      position: "relative",
      display: "inline-block",
      opacity: 0,
      transition: "opacity 1s ease-in",
      margin: `${labelOffset + 25}px`,
      maxWidth: `${width}px`,
    },
    value: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    mounted: {
      opacity: 1,
    },
  };

  return (
    <div
      style={{ ...styles.circularSlider, ...(state.mounted && styles.mounted) }}
      ref={circularSlider}
      onMouseMove={(ev) => onMouseMove(ev)}
      onMouseUp={() => onMouseUp()}
      onMouseLeave={() => onMouseUp()}
      onTouchMove={onMouseMove}
    >
      <Svg
        width={contentWidth}
        limit={limit}
        max={max}
        label={sanitizedLabel}
        labelOffset={labelOffset}
        direction={direction}
        strokeDasharray={state.dashFullArray}
        strokeDashoffset={state.dashFullOffset || 100}
        svgFullPath={svgFullPath}
        progressSize={progressSize}
        progressColorFrom={progressColorFrom}
        progressColorTo={progressColorTo}
        progressLineCap={progressLineCap}
        doubleLineColor={doubleLineColor}
        trackColor={trackColor}
        trackSize={trackSize}
        radiansOffset={state.radians}
        offsetAngle={offsetAngle}
        labelColor={labelColor}
        labelFontSize={labelFontSize}
        activedlabelColor={activedlabelColor}
        data={data}
        activedItem={activedItem}
        onLableClick={(id) => {
          setActived(id);
          updateState(Math.random());
        }}
      />
      {knobDraggable && (
        <Knob
          knobRef={knobRef}
          isDragging={state.isDragging}
          knobPosition={{ x: state.knob.x, y: state.knob.y }}
          knobSize={knobSize > trackSize ? knobSize : trackSize}
          knobColor={knobColor}
          trackSize={trackSize}
          hideKnob={hideKnob}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        >
          {knobEl}
        </Knob>
      )}
      {renderLabelValue ? (
        <div style={styles.value}>{renderLabelValue}</div>
      ) : (
        <Labels
          label={label}
          labelColor={labelColor}
          labelBottom={labelBottom}
          labelFontSize={labelFontSize}
          verticalOffset={verticalOffset}
          valueFontSize={valueFontSize}
          appendToValue={appendToValue}
          prependToValue={prependToValue}
          hideLabelValue={hideLabelValue}
          value={state.label}
        />
      )}
    </div>
  );
};

CircularSlider.propTypes = {
  label: any,
  width: PropTypes.number,
  direction: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  knobColor: PropTypes.string,
  knobPosition: PropTypes.string,
  hideKnob: PropTypes.bool,
  knobDraggable: PropTypes.bool,
  knobEl: PropTypes.element,
  labelColor: PropTypes.string,
  labelBottom: PropTypes.bool,
  labelFontSize: PropTypes.string,
  valueFontSize: PropTypes.string,
  appendToValue: PropTypes.string,
  renderLabelValue: PropTypes.element,
  prependToValue: PropTypes.string,
  verticalOffset: PropTypes.string,
  hideLabelValue: PropTypes.bool,
  progressLineCap: PropTypes.string,
  progressColorFrom: PropTypes.string,
  progressColorTo: PropTypes.string,
  progressSize: PropTypes.number,
  trackColor: PropTypes.string,
  trackSize: PropTypes.number,
  data: PropTypes.array,
  dataIndex: PropTypes.number,
  onChange: PropTypes.func,
};

export default CircularSlider;
