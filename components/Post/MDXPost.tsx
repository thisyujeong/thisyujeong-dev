import type { PropsWithChildren } from 'react';
import { MDXPostProps } from 'lib/types';
import CopyButton from 'components/CopyButton';
import GiscusArea from 'components/GiscusArea';
import convertDateUs from 'lib/convertDateUs';
import styles from './MDXPost.module.scss';
import '@/styles/mdx-formatter.scss';

const MDXPost = ({ title, date, children, path }: PropsWithChildren<MDXPostProps>) => {
  return (
    <div className={styles.mdx_container}>
      <div className={styles.mdx_heading}>
        <div className={styles.mdx_title}>{title}</div>
        {date && <div className={styles.mdx_date}>{convertDateUs(date)}</div>}
        {path && (
          <div className={styles.mdx_copy}>
            <CopyButton path={path} />
          </div>
        )}
      </div>
      <section className="mdx-formatter">{children}</section>
    </div>
  );
};

export default MDXPost;
