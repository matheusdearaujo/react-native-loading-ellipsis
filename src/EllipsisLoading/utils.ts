import { Animated } from "react-native";
import type {
  InitializeDotsProps,
  AnimationStateProps,
  AnimateDotsProps,
  AnimateDotsParamType,
} from "./types";

export const initializeDots = (props: InitializeDotsProps) => {
  const opacities: Animated.Value[] = [];
  const { numberOfDots, minOpacity } = props;

  for (let i = 0; i < numberOfDots; i++) {
    const dot = new Animated.Value(minOpacity);
    opacities.push(dot);
  }

  return opacities;
};

export const animateDots = (
  whichDot: number,
  animateDotsParam: AnimateDotsParamType,
  animationState: AnimationStateProps,
  props: AnimateDotsProps,
) => {
  let whicDotTmp = whichDot;

  if (!animationState.shouldAnimate) {
    return;
  }

  const { minOpacity, animationDelay } = props;

  if (whicDotTmp >= animationState.dotOpacities.length) {
    whicDotTmp = 0;
    const min = minOpacity;
    animationState.targetOpacity =
      animationState.targetOpacity === min ? 1 : min;
  }

  const nextDot = whicDotTmp + 1;

  Animated.timing(animationState.dotOpacities[whicDotTmp], {
    toValue: animationState.targetOpacity,
    useNativeDriver: true,
    duration: animationDelay,
  }).start(() =>
    animateDotsParam(nextDot, animateDotsParam, animationState, props),
  );
};
