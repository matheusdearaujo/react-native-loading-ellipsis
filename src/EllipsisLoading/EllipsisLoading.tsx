import React, { useState, useEffect } from "react";
import type {
  EllipsisLoadingComponent,
  EllipsisLoadingProps,
  AnimationStateProps,
} from "./types";
import { Animated, View } from "react-native";
import { DEFAULT_PROPS } from "./constants";
import { useEllipsisLoading } from "./utils";
import { styles } from "./styles";

const EllipsisLoading: EllipsisLoadingComponent = (
  props: EllipsisLoadingProps,
) => {
  const { initializeDots, animateDots } = useEllipsisLoading();

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

    return () => {
      setAnimationState(prev => ({
        ...prev,
        shouldAnimate: false,
      }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { style, styleDot } = DEFAULT_PROPS;
  const { styleDot: viewStyles, dotSize } = props;

  if (dotSize) {
    styleDot.width = dotSize;
    styleDot.height = dotSize;
    styleDot.borderRadius = dotSize / 2;
  }

  const animatedViewStyle = { ...styleDot, ...(viewStyles as object) };

  const dots = animationState.dotOpacities.map((o, i) => (
    <Animated.View
      key={`${i}-dot`}
      style={[{ opacity: o }, animatedViewStyle]}
    />
  ));

  return <View style={[style, styles.container]}>{dots}</View>;
};

export default EllipsisLoading;
