'use client';
import { useEffect, useState } from 'react';
import styles from './CopyButton.module.scss';
import Image from 'next/image';

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
            <Image src="/static/link.svg" alt="reading time" width={16} height={16} />
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
