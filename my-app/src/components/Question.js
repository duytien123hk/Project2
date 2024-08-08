import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const Question = ({ question }) => {
  const navigate = useNavigate();

  const showDetail = (id) => {
    navigate(`/questions/${id}`);
  };

  return (
    <div className="wrap">
      <div className="card">
        <div className="card-title">
          <div className="card-font">{question.author}</div>
          <span>{formatDate(question.timestamp)}</span>
        </div>
        <div className="card-bottom">
          <button
            type="button"
            className="card-btn"
            onClick={() => showDetail(question.id)}
          >
            Show
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
