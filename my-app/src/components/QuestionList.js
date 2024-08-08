import Question from "./Question";

const QuestionList = ({ questions }) => {
  return (
    <div className="content">
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
