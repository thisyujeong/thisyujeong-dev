'use client';
import React from 'react';
import styles from './SeriesTab.module.scss';

type Props = {
  series: string[];
  selected: string;
  onClick?: (tab: string) => void;
};

const SeriesTab = ({ series, selected, onClick }: Props) => {
  return (
    <div className={styles.series_tab}>
      <div className={styles.series_label}>시리즈</div>
      <ul className={styles.series_list}>
        {series.map((item) => (
          <li
            key={item}
            onClick={() => onClick?.(item)}
            className={`${styles.series_item} ${
              selected === item ? styles.selected : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesTab;
