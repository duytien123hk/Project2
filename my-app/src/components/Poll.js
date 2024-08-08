import { connect } from "react-redux";
import { handleSaveAnswer } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import clsx from "clsx";

const Poll = ({
  hasVote,
  question,
  answer,
  text,
  authedUser,
  numerVotes,
  dispatch,
}) => {
  const navigate = useNavigate();

  const optionVote = question[answer].votes.includes(authedUser);

  const number = question[answer].votes.length;

  const percentage = (number / numerVotes) * 100;

  const addPolled = () => {
    dispatch(handleSaveAnswer(question.id, answer));
    navigate("/");
  };

  return (
    <div className="poll-wrap">
      <div className="poll-card">
        <div className={clsx("poll-title")}>
          <div className="poll-text">
            {optionVote && (
              <AiOutlineCheck style={{ color: "green", paddingRight: "5px" }} />
            )}
            <span style={{ color: optionVote ? "green" : "" }}>{text}</span>
          </div>
          {hasVote && (
            <span
              style={{ color: optionVote ? "green" : "" }}
            >{`Voted: ${number} (${percentage}%)`}</span>
          )}
        </div>
        {!hasVote && (
          <button className="poll-btn" onClick={addPolled}>
            Click
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  numerVotes: Object.keys(users).length,
});

export default connect(mapStateToProps)(Poll);
