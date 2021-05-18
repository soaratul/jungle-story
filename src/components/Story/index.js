import { useState } from 'react';
import Sentence from '../Sentence';
import { getSentenceById, getSentenceByPosition } from '../../helpers/helpers';
import '../Sentence/style.css';

const Story = ({ mainStoryId }) => {
  const [storyid, setStoryid] = useState('');
  const [sentences, setSentences] = useState([]);
  if (!sentences.length) {
    setStoryid(mainStoryId);
    setSentences([
      ...sentences,
      {
        id: mainStoryId,
        sentence: 'Once upon a time, there was a big bad wolf.',
        position: null,
        parentId: null,
      },
    ]);
  }
  const onSentenceClick = (id) => {
    setStoryid(id);
  };

  const addSentence = (sentence) => {
    setSentences([...sentences, sentence]);
  };

  const story = getSentenceById(sentences, storyid);
  const topSentence = getSentenceByPosition(sentences, storyid, 'top');
  const rightSentence = getSentenceByPosition(sentences, storyid, 'right');
  const bottomSentence = getSentenceByPosition(sentences, storyid, 'bottom');
  const leftSentence = getSentenceByPosition(sentences, storyid, 'left');

  return (
    <table>
      <tbody>
        <tr>
          <td>
            {mainStoryId !== storyid && (
              <div
                className='sentence'
                onClick={() => onSentenceClick(mainStoryId)}
              >
                Back to main story.
              </div>
            )}
          </td>
          <td>
            <Sentence
              onSubmit={addSentence}
              sentence={topSentence}
              onSentenceClick={onSentenceClick}
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Sentence
              onSubmit={addSentence}
              sentence={rightSentence}
              onSentenceClick={onSentenceClick}
            />
          </td>
          <td>{story.sentence}</td>
          <td>
            <Sentence
              onSubmit={addSentence}
              sentence={bottomSentence}
              onSentenceClick={onSentenceClick}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Sentence
              onSubmit={addSentence}
              sentence={leftSentence}
              onSentenceClick={onSentenceClick}
            />
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Story;
