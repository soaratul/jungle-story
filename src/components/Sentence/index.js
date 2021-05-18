import { useState } from 'react';
import './style.css';

const Sentence = ({ sentence, onSubmit, onSentenceClick }) => {
  const [sentenceValue, setSentenceValue] = useState('');
  const [hello, setHello] = useState('');

  const changeHandler = (e) => {
    const value = e.target.value;
    setSentenceValue(value);
    setHello(value);
  };

  const handleSubmit = () => {
    if (!sentenceValue) {
      alert('Please enter sentence.');
      return false;
    }
    onSubmit({ ...sentence, sentence: sentenceValue });
    setHello('');
  };

  if (sentence.sentence !== '')
    return (
      <div onClick={() => onSentenceClick(sentence.id)} className='sentence'>
        {sentenceValue}
      </div>
    );
  return (
    <>
      <div className='edit-sentence'>
        <input type='text' value={hello} onChange={(e) => changeHandler(e)} />
      </div>
      <div className='submit-sentence'>
        <button type='button' onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Sentence;
