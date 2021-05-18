import Story from './Story';
import { nanoid } from 'nanoid';

function App() {
  const storyid = nanoid();
  return (
    <div className='App'>
      <Story mainStoryId={storyid} />
    </div>
  );
}

export default App;
