import React from "react";
import { ReactElement } from "react";

declare module "advanced-react-circular-slider" {
  export class CircularSlider extends React.Component<CircularSliderProps & any, any> {}

  interface CircularSliderProps {
    label?: string;
    width?: number;
    direction?: number;
    min?: number;
    max?: number;
    step?: number;
    limit?: number;
    labelTop?: string;
    labelStep?: number;
    offsetAngle?: number;
    knobSize?: number;
    doubleLineColor?: string | null;
    doubleLineType?: string;
    knobColor?: string;
    knobPosition?: string;
    hideKnob?: boolean;
    knobDraggable?: boolean;
    knobEl?: ReactElement | null;
    labelColor?: string;
    labelOffset?: number;
    secondaryLabelColor?: string;
    roundLabelColor?: string;
    labelBottom?: string;
    labelFontSize?: string;
    roundLabelFontSize?: string;
    valueFontSize?: string;
    appendToValue?: string;
    renderLabelValue?: ReactElement | null;
    prependToValue?: string;
    verticalOffset?: string;
    hideLabelValue?: boolean;
    progressLineCap?: "butt" | "round" | "square" | "inherit" | undefined;
    progressColorFrom?: string;
    progressColorTo?: string;
    progressSize?: number;
    trackColor?: string;
    trackSize?: number;
    data?: any[];
    dataIndex?: number;
    activeLabelColor?: string;
    magentTolerance?: number;
    onChange?: Function;
  }
}