import type { PropsWithChildren } from 'react';
import { MDXPostProps } from 'lib/types';
import CopyButton from 'components/CopyButton';
import convertDateUs from 'lib/convertDateUs';
import styles from './MDXPost.module.scss';
import '@/styles/mdx-formatter.scss';
import Image from 'next/image';

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
              <Image
                src="/static/reading-time.svg"
                alt="reading time"
                width={16}
                height={16}
              />
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
