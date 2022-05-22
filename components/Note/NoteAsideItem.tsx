import { TreeNode } from 'lib/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  NoteAsideItemContainer,
  AsideItemTitle,
  AsideItemList,
  AsideItemAnchor,
} from './NoteAsideItem.style';

const NoteAsideItem = ({ item }: { item: TreeNode }) => {
  const router = useRouter();
  const [isItemsOpen, setIsItemsOpen] = useState(false);

  const onClickItem = () => {
    setIsItemsOpen(!isItemsOpen);
  };
  return (
    <NoteAsideItemContainer>
      <AsideItemTitle data-open={isItemsOpen} onClick={onClickItem}>
        {item.title}
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
