import { Note, allNotes } from 'contentlayer/generated';
import { PathSegment, TreeNode } from 'lib/types';

export async function getAllNotes(): Promise<Note[]> {
  return allNotes;
}

export async function getNotesTree(
  slug: string[]
): Promise<{ note: Note; tree: TreeNode[] }> {
  const pagePath = slug.join('/');
  const note = allNotes.find(
    (_) => _.pathSegments.map((_: PathSegment) => _.pathName).join('/') === pagePath
  )!;
  const tree = docTree(allNotes);
  return { note, tree };
}

const docTree = (notes: Note[], parentPathNames: string[] = []): TreeNode[] => {
  const level = parentPathNames.length;
  return notes
    .filter(
      (_) =>
        _.pathSegments.length === level + 1 &&
        _.pathSegments
          .map((_: PathSegment) => _.pathName)
          .join('/')
          .startsWith(parentPathNames.join('/'))
    )
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map<TreeNode>((doc) => ({
      title: doc.title,
      date: doc.date,
      urlPath: '/note/' + doc.pathSegments.map((_: PathSegment) => _.pathName).join('/'),
      children: docTree(
        notes,
        doc.pathSegments.map((_: PathSegment) => _.pathName)
      ),
    }));
};
