import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
  console.log(questions);
  return (
    <section className="container">
      {questions.map((question) => {
        return (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        );
      })}
    </section>
  );
};
export default Questions;
