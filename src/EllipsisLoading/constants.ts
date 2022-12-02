const DOT_SIZE = 12;
const SELECTION_COLOR = "#f8fafc";
const DEFAULT_PROPS = {
  dotSize: DOT_SIZE,
  numberOfDots: 3,
  animationDelay: 150,
  minOpacity: 0.2,
  style: {},
  styleDot: {
    backgroundColor: SELECTION_COLOR,
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
  },
};

export { DOT_SIZE, SELECTION_COLOR, DEFAULT_PROPS };
