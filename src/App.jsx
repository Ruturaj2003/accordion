import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId((currentId) => {
      if (id === currentId) {
        return null;
      } else {
        return id;
      }
    });
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      ></Questions>
    </main>
  );
};
export default App;
