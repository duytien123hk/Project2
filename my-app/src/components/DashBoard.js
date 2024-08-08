import { useState } from "react";
import Nav from "./Nav";
import Question from "./QuestionList";
import { connect } from "react-redux";
import clsx from "clsx";

const DashBoard = ({ authedUser, questions }) => {
  const [isToggle, setIsToggle] = useState(true);

  const toggleChange = () => {
    setIsToggle(!isToggle);
  };

  const unanswered = questions.filter(
    (question) =>
      !question.optionOne.votes.includes(authedUser) &&
      !question.optionTwo.votes.includes(authedUser)
  );

  const answered = questions.filter(
    (question) =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );
  return (
    <>
      <Nav />
      <div className="container">
        <div className="layout">
          <div className="tab">
            <div className="tab-l">
              <button
                className={clsx(
                  "tab-btn",
                  isToggle ? "active-btn" : "unactive-btn"
                )}
                disabled={isToggle}
                onClick={toggleChange}
              >
                Unanswered
              </button>
            </div>
            <div className="tab-l">
              <button
                className={clsx(
                  "tab-btn",
                  !isToggle ? "active-btn" : "unactive-btn"
                )}
                disabled={!isToggle}
                onClick={toggleChange}
              >
                Answered
              </button>
            </div>
          </div>
          <Question questions={isToggle ? unanswered : answered} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
});

export default connect(mapStateToProps)(DashBoard);
