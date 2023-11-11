'use client';
import { useEffect, useState } from 'react';
import { TreeNode } from 'lib/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './NoteSidebarItem.module.scss';

const NoteSidebarItem = ({ item }: { item: TreeNode }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCurrent, setIsCurrent] = useState<boolean>(pathname.includes(item.urlPath));

  useEffect(() => {
    setIsCurrent(pathname.includes(item.urlPath));
  }, [item.urlPath, pathname]);

  return (
    <div
      className={`
        ${styles.sidebar_item} 
        ${isOpen ? styles.open : ''} 
        ${isCurrent ? styles.current : ''}
      `}
    >
      <div className={styles.sidebar_root} onClick={() => setIsOpen(!isOpen)}>
        {item.title}
      </div>
      <div className={styles.sidebar_child}>
        <ul className={styles.child_list}>
          {item.children.map((a) => (
            <div
              key={a.title}
              className={`
                ${styles.child_item} 
                ${pathname === a.urlPath ? styles.current : ''}
              `}
            >
              <Link href={a.urlPath} passHref>
                {a.title}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteSidebarItem;
