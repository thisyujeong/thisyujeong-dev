import { Dispatch, SetStateAction } from 'react';

const observerOption = {
  threshold: 0.4,
  rootMargin: '-120px 0px 0px 0px',
};

export const getIntersectionObserver = (setState: Dispatch<SetStateAction<string>>) => {
  let direction = 'down';
  let lastScrollY = 0;

  // scroll 방향 check function
  const checkScrollDirection = (prevY: number) => {
    const scrollY = window.scrollY;
    // 이전의 스크롤 위치와 비교하기
    direction = scrollY > lastScrollY ? 'down' : 'up';
    // 현재의 스크롤 값을 저장
    lastScrollY = scrollY;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(lastScrollY);

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
