import facepaint from 'facepaint';

const deviceWidth = {
  large: 1280,
  medium: 768,
};
const mq = (breakpoints = deviceWidth) => {
  const mediaQueries = Object.values(breakpoints).map(
    (bp) => `@media(min-width: ${bp}px)`
  );

  return facepaint(mediaQueries, { overlap: true });
};

export default mq;
