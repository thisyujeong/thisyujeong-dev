import facepaint from 'facepaint';

const deviceWidth = {
  mobile: 768,
};
const mq = (breakpoints = deviceWidth) => {
  const mediaQueries = Object.values(breakpoints).map(
    (bp) => `@media(min-width: ${bp}px)`
  );

  return facepaint(mediaQueries, { overlap: true });
};

export default mq;
