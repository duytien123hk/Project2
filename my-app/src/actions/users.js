export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_ANSWER_USER = "SAVE_ANSWER_USER";
export const SAVE_QUESTION_USER = "SAVE_QUESTION_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveAnswerUser(author, qid, answer) {
  return {
    type: SAVE_ANSWER_USER,
    author,
    qid,
    answer,
  };
}

export function saveQuestionUser(qid, author) {
  return {
    type: SAVE_QUESTION_USER,
    qid,
    author,
  };
}
