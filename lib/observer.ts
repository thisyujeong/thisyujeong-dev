const observerOption = {
  threshold: 0.4,
  rootMargin: '-60px 0px 0px 0px',
};

export const getIntersectionObserver = (setState) => {
  let direction = '';
  let prevY = 0;

  const chechDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY) return;
    else if (window.scrollY > prevY) direction = 'down';
    else direction = 'up';

    prevY = window.scrollY;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      chechDirection(prevY);
      if (
        (direction === 'down' && !entry.isIntersecting) ||
        (direction === 'up' && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
};
