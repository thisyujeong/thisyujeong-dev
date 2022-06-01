import facepaint from 'facepaint';

const breakpoints = [1280, 768, 576];
const mq = facepaint(
  breakpoints.map((bp) => `@media (max-width: ${bp}px)`),
  { overlap: false }
);

export default mq;
