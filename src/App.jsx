import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <Questions questions={questions}></Questions>
    </main>
  );
};
export default App;
