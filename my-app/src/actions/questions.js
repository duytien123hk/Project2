import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { saveAnswerUser, saveQuestionUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_ANSWER = "SAVE_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestion(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function saveAnswer(author, qid, answer) {
  return {
    type: SAVE_ANSWER,
    author,
    qid,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleSaveAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer(authedUser, qid, answer).then(() => {
      dispatch(saveAnswer(authedUser, qid, answer));
      dispatch(saveAnswerUser(authedUser, qid, answer));
    });
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion(optionOneText, optionTwoText, authedUser).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(saveQuestionUser(question.id, question.author));
      }
    );
  };
}
