import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { getInitialData } from "../utils/api";
import { receiveQuestion } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setAuthedUser(null));
      dispatch(receiveUsers(users));
      dispatch(receiveQuestion(questions));
    });
  };
}
