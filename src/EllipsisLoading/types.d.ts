import type { ViewStyle, StyleProp } from "react-native";
import { Animated } from "react-native";

export interface EllipsisLoadingProps {
  /**
   * Style for dots in ellipsis loading.
   * @type ViewStyle
   * @default undefined
   */
  styleDot?: StyleProp<
    Pick<
      ViewStyle,
      | "backgroundColor"
      | "marginRight"
      | "marginLeft"
      | "marginTop"
      | "marginBottom"
      | "marginVertical"
      | "marginHorizontal"
    >
  >;

  /**
   * Delay for animation in milliseconds.
   * @type number
   * @default 150
   */
  animationDelay?: number;

  /**
   * Number of dot to display.
   * @type number;
   * @default 3
   */
  numberOfDots?: number;

  /**
   * Opacity of dot animation. Value between 0 and 1.
   * @type number
   * @default 0.2
   */
  minOpacity?: number;

  /**
   * Size of the dots.
   * @type number
   * @default 12
   */
  dotSize?: number;
}

export interface InitializeDotsProps {
  /**
   * Number of dot to display.
   * @type number
   */
  numberOfDots: number;

  /**
   * Opacity of dot animation.
   * @type number
   */
  minOpacity: number;
}

export interface AnimationStateProps {
  /**
   * @type Animated.Value[]
   */
  dotOpacities: Animated.Value[];

  /**
   * @type number
   */
  targetOpacity: number;

  /**
   * @type boolean
   */
  shouldAnimate: boolean;
}

export interface AnimateDotsProps {
  /**
   * Opacity of dot animation.
   * @type number
   */
  minOpacity: number;

  /**
   * Delay for animation in milliseconds.
   * @type number
   */
  animationDelay: number;
}

type AnimateDotsParamType = (
  /**
   * @type number
   */
  whichDot: number,

  /**
   * @type AnimateDotsParamType
   */
  animateDotsParam: AnimateDotsParamType,

  /**
   * @type AnimationStateProps
   */
  animationState: AnimationStateProps,

  /**
   * @type AnimateDotsProps
   */
  props: AnimateDotsProps,
) => void;
