'use client';
import { useEffect, useState } from 'react';
import styles from './CopyButton.module.scss';

const CopyButton = ({ path }: { path: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const onClick = () => {
    navigator.clipboard.writeText(path);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      let timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    path && (
      <div className={`${styles.copy} ${copied ? styles.copied : ''}`} onClick={onClick}>
        <button className={styles.copy_button}>
          <div className={styles.copy_icon}>
            <svg width="32" height="32" viewBox="0 0 682.66669 682.66669">
              <path
                d="m565 640h-340c-41.359375 0-75-33.640625-75-75v-340c0-41.359375 33.640625-75 75-75h340c41.359375 0 75 33.640625 75 75v340c0 41.359375-33.640625 75-75 75zm-340-440c-13.785156 0-25 11.214844-25 25v340c0 13.785156 11.214844 25 25 25h340c13.785156 0 25-11.214844 25-25v-340c0-13.785156-11.214844-25-25-25zm-125 240h-25c-13.785156 0-25-11.214844-25-25v-340c0-13.785156 11.214844-25 25-25h340c13.785156 0 25 11.214844 25 25v23.75h50v-23.75c0-41.359375-33.640625-75-75-75h-340c-41.359375 0-75 33.640625-75 75v340c0 41.359375 33.640625 75 75 75h25zm0 0"
                fill="#000000"
              />
            </svg>
          </div>
          <div className={styles.copy_text}>URL 복사</div>
        </button>
        {copied && (
          <div className={styles.copied_icon}>
            <svg width="18px" height="15px" version="1.1" viewBox="0 0 18 15">
              <g fill="#000000" id="Core" transform="translate(-423.000000, -47.000000)">
                <g id="check" transform="translate(423.000000, 47.500000)">
                  <path
                    d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>
    )
  );
};

export default CopyButton;
