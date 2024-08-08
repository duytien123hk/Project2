import Nav from "./Nav";
import Row from "./Row";
import { connect } from "react-redux";

const LeaderBoard = ({ users }) => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="l-content">
          <table>
            <thead>
              <tr>
                <th>Users</th>
                <th>Answerd</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <Row key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  ),
});

export default connect(mapStateToProps)(LeaderBoard);
