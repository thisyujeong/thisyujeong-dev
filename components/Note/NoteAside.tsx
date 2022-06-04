import { TreeNode } from 'lib/types';
import { useState } from 'react';
import {
  NoteAsideContainer,
  NoteAsideInnerContainer,
  NoteAsideAccordion,
} from './NoteAside.style';
import NoteAsideItem from './NoteAsideItem';

const NoteAside = ({ tree }: { tree: TreeNode[] }) => {
  const [isOpenAside, setIsOpenAside] = useState<boolean>(false);

  return (
    <>
      <NoteAsideContainer visible={isOpenAside}>
        <NoteAsideInnerContainer>
          {tree.map((t) => (
            <NoteAsideItem key={t.title} item={t} />
          ))}
        </NoteAsideInnerContainer>
      </NoteAsideContainer>
      <NoteAsideAccordion
        onClick={() => setIsOpenAside(!isOpenAside)}
        className={isOpenAside ? 'open' : 'close'}
      >
        <span>목록 {isOpenAside ? '닫기' : '열기'}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="m116 68h-104c-2.209 0-4-1.789-4-4s1.791-4 4-4h104c2.209 0 4 1.789 4 4s-1.791 4-4 4zm4 28c0-2.211-1.791-4-4-4h-104c-2.209 0-4 1.789-4 4s1.791 4 4 4h104c2.209 0 4-1.789 4-4zm0-64c0-2.211-1.791-4-4-4h-104c-2.209 0-4 1.789-4 4s1.791 4 4 4h104c2.209 0 4-1.789 4-4z"
          ></path>
        </svg>
      </NoteAsideAccordion>
    </>
  );
};

export default NoteAside;
