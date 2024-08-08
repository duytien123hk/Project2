import { useRef } from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import { handleSaveQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";

const CreatePoll = ({ dispatch }) => {
  const navigate = useNavigate();
  const oneRef = useRef();
  const twoRef = useRef();
  const addPoll = () => {
    if (oneRef.current.value.trim() !== "" && twoRef.current.value.trim()) {
      dispatch(handleSaveQuestion(oneRef.current.value, twoRef.current.value));
      navigate("/");
    }
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="create">
          <div className="create-font">Would You Rather</div>
          <span>Create Your Own Poll</span>
          <form className="create-form">
            <input
              ref={oneRef}
              type="text"
              placeholder="Option One"
              className="create-input"
            />
            <input
              ref={twoRef}
              type="text"
              placeholder="Option Two"
              className="create-input"
            />
            <button type="button" className="create-btn" onClick={addPoll}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(CreatePoll);
