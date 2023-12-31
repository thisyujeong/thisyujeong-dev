import type { PropsWithChildren } from 'react';
import { MDXPostProps } from 'lib/types';
import CopyButton from 'components/CopyButton';
import convertDateUs from 'lib/convertDateUs';
import styles from './MDXPost.module.scss';
import '@/styles/mdx-formatter.scss';

const MDXPost = ({
  title,
  date,
  children,
  path,
  readingTime,
}: PropsWithChildren<MDXPostProps>) => {
  return (
    <div className={styles.mdx_container}>
      <div className={styles.mdx_heading}>
        <div className={styles.mdx_title}>{title}</div>
        {date && <div className={styles.mdx_date}>{convertDateUs(date)}</div>}
        <div className={styles.mdx_additional}>
          {readingTime && (
            <div className={styles.mdx_reading_time}>
              <svg version="1.1" viewBox="0 0 24 24">
                <g id="g1307" transform="translate(0,-290.65039)">
                  <path
                    d="m 12,292.65039 c -5.511,0 -10,4.489 -10,10 0,5.511 4.489,10 10,10 5.511,0 10,-4.489 10,-10 0,-5.511 -4.489,-10 -10,-10 z m 0,2 c 4.43012,0 8,3.56988 8,8 0,4.43012 -3.56988,8 -8,8 -4.43012,0 -8,-3.56988 -8,-8 0,-4.43012 3.56988,-8 8,-8 z"
                    id="path1301"
                  />
                  <path
                    d="m 12,296.65039 a 1,1 0 0 0 -1,1 v 4.96875 a 1.0001,1.0001 0 0 0 0.29492,0.70898 l 3,2.98047 a 1,1 0 0 0 1.41406,-0.004 1,1 0 0 0 -0.004,-1.41407 L 13,302.20312 v -4.55273 a 1,1 0 0 0 -1,-1 z"
                    id="path1303"
                  />
                </g>
              </svg>
              <span>{readingTime}</span>
            </div>
          )}
          {path && <CopyButton path={path} />}
        </div>
      </div>
      <section className="mdx-formatter">{children}</section>
    </div>
  );
};

export default MDXPost;
