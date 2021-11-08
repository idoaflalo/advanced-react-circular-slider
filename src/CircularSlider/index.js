import window from "global";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useReducer, useRef } from "react";
import "../fonts";
import useIsServer from "../hooks/useIsServer";
import Knob from "../Knob";
import Labels from "../Labels";
import reducer from "../redux/reducer";
import Svg from "../Svg";

const spreadDegrees = 360;
const knobOffset = {
  top: Math.PI / 2,
  right: 0,
  bottom: -Math.PI / 2,
  left: -Math.PI,
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

const generateRange = (min, max, step, labelStep) => {
  const data = [];
  for (let num = min; +num.toFixed(2) <= max; num += step) {
    const key = +num.toFixed(2);
    data.push({ key, value: key.toString(), showLabel: key % labelStep === 0 });
  }

  return data;
};

const CircularSlider = ({
  width = 280,
  direction = 1,
  min = 0,
  max = 360,
  step = 0.1,
  labelStep = 1,
  limit = 360,
  offsetAngle = 0,
  knobColor = "#0076BA",
  knobSize = 60,
  knobPosition = "top",
  hideKnob = false,
  knobDraggable = true,
  knobEl = null,
  labelTop = "Demo",
  labelBottom = "",
  labelColor = "#2597D7",
  secondaryLabelColor = "#c0c0c0",
  roundLabelFontSize = "1.2rem",
  roundLabelColor = "#272b77",
  labelFontSize = "1.5rem",
  labelOffset = 20,
  activeLabelColor = "#0076ba",
  valueFontSize = "3rem",
  appendToValue = "",
  prependToValue = "",
  verticalOffset = "1.5rem",
  hideLabelValue = false,
  progressColorFrom = "#54BFFD",
  progressColorTo = "#0378BC",
  progressSize = 16,
  trackColor = "#CFE0F4",
  trackSize = 20,
  doubleLineColor = null,
  doubleLineType = "progress",
  data = [],
  dataIndex = 1,
  magentTolerance = 10,
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
  const dragable = useRef(undefined);
  const isServer = useIsServer();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activedItem, setActived] = React.useState(null);
  const [updatedKey, updateState] = React.useState(null);

  const setKnobPosition = useCallback(
    (radians) => {
      if (!state.dashFullArray) {
        updateState(Math.random());
        return;
      }
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

      let newDegree = degrees + limit - offsetAngle;
      newDegree = newDegree > 360 ? newDegree - 360 : newDegree;
      let pt = svgFullPath.current.getPointAtLength((newDegree * state.dashFullArray) / 360);
      pt.x = Math.round(pt.x);
      pt.y = Math.round(pt.y);

      // change direction
      let dashOffset = (degrees / spreadDegrees) * state.dashFullArray;
      degrees = getSliderRotation(direction) === -1 ? spreadDegrees - degrees : degrees;
      lastAngle.current = degrees;
      const pointsInCircle = state.data.length / limit;
      const currentPosition = degrees * pointsInCircle;
      let currentPoint = Math.ceil(currentPosition);

      const closestPointDegrees = Math.max(currentPoint / pointsInCircle - 1 / pointsInCircle / 2, 0);
      if (Math.abs(closestPointDegrees - degrees) <= magentTolerance && state.data[currentPoint - 1]?.showLabel) {
        newDegree = closestPointDegrees + limit - offsetAngle;
        newDegree = newDegree > 360 ? newDegree - 360 : newDegree;
        pt = svgFullPath.current.getPointAtLength((newDegree * state.dashFullArray) / 360);
        pt.x = Math.round(pt.x);
        pt.y = Math.round(pt.y);
        dashOffset = (closestPointDegrees / spreadDegrees) * state.dashFullArray;
        degrees = getSliderRotation(direction) === -1 ? spreadDegrees - closestPointDegrees : closestPointDegrees;
        setActived(currentPoint);
      } else {
        setActived(0);
      }
      knobRef.current.style = `transform: rotate(${degrees + offsetAngle}deg);`;

      if (state.data[currentPoint - 1]?.key !== state.label?.key) {
        onChange(state.data[currentPoint - 1]);
      }

      dispatch({
        type: "setKnobPosition",
        payload: {
          dashFullOffset:
            getSliderRotation(direction) === -1 ? dashOffset : (state.dashFullArray || svgFullPath.current.getTotalLength()) - dashOffset,
          label: state.data[currentPoint - 1],
          knob: {
            x: pt.x,
            y: pt.y,
          },
        },
      });
    },
    // eslint-disable-next-line
    [offsetAngle, limit, state.dashFullArray, state.radius, state.data, state.label, knobPosition, trackSize, direction, onChange],
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

  const onMouseUp = (event) => {
    dragable.current && onMouseMove(event);
    dragable.current = false;
    dispatch({
      type: "onMouseUp",
      payload: {
        isDragging: false,
      },
    });
  };

  const onMouseMove = useCallback(
    (event, passive = false) => {
      if (!dragable.current) return;

      if (passive) event.preventDefault();

      const touch = event.changedTouches?.[0];

      const offsetRelativeToDocument = (ref) => {
        const rect = ref.current.getBoundingClientRect();
        const scrollLeft = !isServer && ((window?.pageXOffset ?? 0) || (document?.documentElement?.scrollLeft ?? 0));
        const scrollTop = !isServer && ((window?.pageYOffset ?? 0) || (document?.documentElement?.scrollTop ?? 0));
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };

      const mouseXFromCenter = (touch ? touch.pageX : event.pageX) - (offsetRelativeToDocument(circularSlider).left + state.radius);
      const mouseYFromCenter = (touch ? touch.pageY : event.pageY) - (offsetRelativeToDocument(circularSlider).top + state.radius);

      const radians = Math.atan2(mouseYFromCenter, mouseXFromCenter);

      setKnobPosition(radians);
    },
    [state.radius, setKnobPosition, isServer],
  );

  // Get svg path length onmount
  useEffect(() => {
    const data = state.data.length ? [...state.data] : [...generateRange(min, max, step, labelStep)];
    const [firstItem] = data;
    dispatch({
      type: "init",
      payload: {
        mounted: true,
        data: data,
        label: firstItem,
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

  const sanitizedLabel = labelTop.replace(/[\W_]/g, "_");

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
      zIndex: 3,
    },
    mounted: {
      opacity: 1,
      touchAction: "none",
    },
  };

  return (
    <div
      style={{ ...styles.circularSlider, ...(state.mounted && styles.mounted) }}
      ref={circularSlider}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseUp}
      onTouchMove={onMouseMove}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
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
        doubleLineType={doubleLineType}
        trackColor={trackColor}
        trackSize={trackSize}
        radiansOffset={state.radians}
        offsetAngle={offsetAngle}
        labelColor={labelColor}
        secondaryLabelColor={secondaryLabelColor}
        roundLabelColor={roundLabelColor}
        roundLabelFontSize={roundLabelFontSize}
        labelFontSize={labelFontSize}
        activeLabelColor={activeLabelColor}
        data={state.data}
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
          labelTop={labelTop}
          labelColor={labelColor}
          secondaryLabelColor={secondaryLabelColor}
          labelBottom={labelBottom}
          labelFontSize={labelFontSize}
          verticalOffset={verticalOffset}
          valueFontSize={valueFontSize}
          appendToValue={appendToValue}
          prependToValue={prependToValue}
          hideLabelValue={hideLabelValue}
          selected={state.label}
        />
      )}
    </div>
  );
};

CircularSlider.propTypes = {
  label: PropTypes.string,
  width: PropTypes.number,
  direction: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  labelStep: PropTypes.number,
  doubleLineColor: PropTypes.string,
  doubleLineType: PropTypes.string,
  knobColor: PropTypes.string,
  knobPosition: PropTypes.string,
  hideKnob: PropTypes.bool,
  knobDraggable: PropTypes.bool,
  knobEl: PropTypes.element,
  labelColor: PropTypes.string,
  secondaryLabelColor: PropTypes.string,
  roundLabelColor: PropTypes.string,
  labelBottom: PropTypes.string,
  labelFontSize: PropTypes.string,
  roundLabelFontSize: PropTypes.string,
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
  magentTolerance: PropTypes.number,
  onChange: PropTypes.func,
};

export default CircularSlider;
