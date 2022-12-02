import React, { useState, useEffect } from "react";
import { Animated, View } from "react-native";
import { DEFAULT_PROPS } from "./constants";
import { initializeDots, animateDots } from "./utils";
import type { EllipsisLoadingProps, AnimationStateProps } from "./types";
import { styles } from "./styles";

const EllipsisLoading = (props: EllipsisLoadingProps) => {
  const [animationState, setAnimationState] = useState<AnimationStateProps>({
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
      setAnimationState({ ...animationState, shouldAnimate: false });
    };
  });

  const { style, styleDot } = DEFAULT_PROPS;
  const { styleDot: viewStyles, dotSize } = props;

  if (dotSize) {
    styleDot.width = dotSize;
    styleDot.height = dotSize;
    styleDot.borderRadius = dotSize / 2;
  }

  const s = { ...styles.dotDefault, ...styleDot, viewStyles };

  const dots = animationState.dotOpacities.map((o, i) => (
    <Animated.View key={`${i}-dot`} style={[{ opacity: o }, s]} />
  ));

  return <View style={[style, styles.container]}>{dots}</View>;
};

export default EllipsisLoading;
