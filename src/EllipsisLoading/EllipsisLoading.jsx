import React, { useState, useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";
import { DOT_SIZE, SELECTION_COLOR, DEFAULT_PROPS } from "./constants";

const initializeDots = props => {
  const opacities = [];
  const { numberOfDots, minOpacity } = props;

  for (let i = 0; i < numberOfDots; i++) {
    const dot = new Animated.Value(minOpacity);
    opacities.push(dot);
  }

  return opacities;
};

const animateDots = (whichDot, animateDotsParam, animationState, props) => {
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

const EllipsisLoading = props => {
  const [animationState, setAnimationState] = useState({
    dotOpacities: initializeDots({ ...DEFAULT_PROPS, ...props }),
    targetOpacity: 1,
    shouldAnimate: true,
  });

  useEffect(() => {
    animateDots(0, animateDots, animationState, {
      ...DEFAULT_PROPS,
      ...props,
    });

    return function cleanup() {
      setAnimationState({ shouldAnimate: false });
    };
  });

  const { style, styleDot } = DEFAULT_PROPS;
  const { styleDot: sDot, dotSize } = props;

  styleDot.width = dotSize || DOT_SIZE;
  styleDot.height = dotSize || DOT_SIZE;
  styleDot.borderRadius = (dotSize || DOT_SIZE) / 2;

  const s = { ...styles.dotDefault, ...styleDot, ...sDot };

  const dots = animationState.dotOpacities.map((o, i) => (
    <Animated.View key={`${i}-dot`} style={[{ opacity: o }, s]} />
  ));

  return <View style={[style, styles.container]}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flexDirection: "row",
    height: 21,
    justifyContent: "center",
    width: "auto",
  },
  dotDefault: {
    backgroundColor: SELECTION_COLOR,
    marginRight: 5,
  },
});

export default EllipsisLoading;
