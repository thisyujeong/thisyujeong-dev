import { TreeNode } from 'lib/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  NoteAsideItemContainer,
  AsideItemTitle,
  AsideItemList,
  AsideItemAnchor,
  AsideToggleIcon,
} from './NoteAsideItem.style';

const NoteAsideItem = ({ item }: { item: TreeNode }) => {
  const router = useRouter();
  const [isItemsOpen, setIsItemsOpen] = useState(false);

  useEffect(() => {
    item.children.map((a) => router.asPath === a.urlPath && setIsItemsOpen(true));
  }, []);

  const onClickItem = () => {
    setIsItemsOpen(!isItemsOpen);
  };
  return (
    <NoteAsideItemContainer>
      <AsideItemTitle data-open={isItemsOpen} onClick={onClickItem}>
        {item.title}
        <AsideToggleIcon data-open={isItemsOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 494.148 494.148"
          >
            <g transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,494.148006439209,0.0000038146972372032906)">
              <g xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124 c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884 C432.632,229.572,422.964,213.288,405.284,201.188z"
                  fill="#000000"
                  data-original="#000000"
                  className=""
                ></path>
              </g>
            </g>
          </svg>
        </AsideToggleIcon>
      </AsideItemTitle>
      {isItemsOpen && (
        <AsideItemList>
          {item.children.map((a) => (
            <Link key={a.title} href={a.urlPath} passHref>
              <AsideItemAnchor data-selected={router.asPath === a.urlPath ? true : false}>
                {a.title}
              </AsideItemAnchor>
            </Link>
          ))}
        </AsideItemList>
      )}
    </NoteAsideItemContainer>
  );
};

export default NoteAsideItem;
