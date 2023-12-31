import { Dispatch, SetStateAction } from 'react';

const observerOption = {
  threshold: 1,
  rootMargin: '-120px 0px 0px 0px',
};

export const getIntersectionObserver = (setState: Dispatch<SetStateAction<string>>) => {
  let direction = 'down';
  let lastScrollY = 0;

  // scroll direction check
  const checkDirection = (prevY: number) => {
    const scrollY = window.scrollY;
    if (!(prevY && scrollY)) return;

    direction = scrollY > lastScrollY ? 'down' : 'up'; // 이전의 스크롤 위치와 비교하기
    lastScrollY = scrollY; // 현재의 스크롤 값을 저장
  };

  const observer = new IntersectionObserver((entries) => {
    checkDirection(lastScrollY);

    entries.forEach((entry) => {
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
