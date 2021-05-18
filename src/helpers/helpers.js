import { nanoid } from 'nanoid';

export const getSentenceByPosition = (sentences, id, position) => {
  const sentence = sentences.filter(
    (sentence) => sentence.parentId === id && sentence.position === position
  );
  return sentence.length
    ? sentence.pop()
    : {
        id: nanoid(),
        sentence: '',
        position,
        parentId: id,
      };
};
export const getSentenceById = (sentences, id) => {
  const sentence = sentences.filter((sentence) => sentence.id === id);
  return sentence.length ? sentence.pop() : false;
};
