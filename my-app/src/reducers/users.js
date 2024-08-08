import {
  RECEIVE_USERS,
  SAVE_ANSWER_USER,
  SAVE_QUESTION_USER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_ANSWER_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          answer: {
            ...state[action.author].answer,
            [action.qid]: action.answer,
          },
        },
      };
    case SAVE_QUESTION_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat(action.qid),
        },
      };
    default:
      return state;
  }
}
