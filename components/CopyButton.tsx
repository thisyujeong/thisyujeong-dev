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
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.3,13.35a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41l2.12-2.12a2,2,0,0,0,0-2.83L17.3,5.28a2.06,2.06,0,0,0-2.83,0L12.35,7.4A1,1,0,0,1,10.94,6l2.12-2.12a4.1,4.1,0,0,1,5.66,0l1.41,1.41a4,4,0,0,1,0,5.66L18,13.06A1,1,0,0,1,17.3,13.35Z" />
              <path d="M8.11,21.3a4,4,0,0,1-2.83-1.17L3.87,18.72a4,4,0,0,1,0-5.66L6,10.94A1,1,0,0,1,7.4,12.35L5.28,14.47a2,2,0,0,0,0,2.83L6.7,18.72a2.06,2.06,0,0,0,2.83,0l2.12-2.12A1,1,0,1,1,13.06,18l-2.12,2.12A4,4,0,0,1,8.11,21.3Z" />
              <path d="M8.82,16.18a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l6.37-6.36a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L9.52,15.89A1,1,0,0,1,8.82,16.18Z" />
            </svg>
          </div>
          <div className={styles.copy_text}>Copy link</div>
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
