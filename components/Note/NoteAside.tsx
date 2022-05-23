import { TreeNode } from 'lib/types';
import { NoteAsideContainer } from './NoteAside.style';
import NoteAsideItem from './NoteAsideItem';

const NoteAside = ({ tree }: { tree: TreeNode[] }) => {
  return (
    <>
      <NoteAsideContainer>
        {tree.map((t) => (
          <NoteAsideItem key={t.title} item={t} />
        ))}
      </NoteAsideContainer>
    </>
  );
};

export default NoteAside;
