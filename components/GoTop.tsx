import React, { useEffect, useState } from 'react';
import { GoTopContainer } from './GoTop.style';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <GoTopContainer visible={isVisible} onClick={() => window.scrollTo(0, 0)}>
      <span>Top</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m16.71 10.79a1 1 0 0 0 -1.42 0l-5 5a1 1 0 0 0 1.42 1.42l3.29-3.3v12.09a1 1 0 0 0 2 0v-12.09l3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
        ></path>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m26 5h-20a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2z"
        ></path>
      </svg>
    </GoTopContainer>
  );
};

export default GoTop;
