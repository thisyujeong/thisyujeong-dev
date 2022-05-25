import { TreeNode } from 'lib/types';
import { NoteAsideContainer, NoteAsideInnerContainer } from './NoteAside.style';
import NoteAsideItem from './NoteAsideItem';

const NoteAside = ({ tree }: { tree: TreeNode[] }) => {
  return (
    <>
      <NoteAsideContainer>
        <NoteAsideInnerContainer>
          {tree.map((t) => (
            <NoteAsideItem key={t.title} item={t} />
          ))}
        </NoteAsideInnerContainer>
      </NoteAsideContainer>
    </>
  );
};

export default NoteAside;
