import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logoutAction, setAuthedUser } from "../actions/authedUser";
import { useRef } from "react";

const Nav = ({ authedUser, users, dispatch }) => {
  const navigate = useNavigate();
  const selectRef = useRef();

  const logout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  const switchUser = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectRef.current.value));
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">New</Link>
        </li>
      </ul>
      <ul>
        <li
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={users[authedUser].avatarURL}
            alt="Avatar"
            className="nav-avatar"
          ></img>
          <select
            className="input-field"
            style={{ marginLeft: "5px" }}
            ref={selectRef}
            onChange={switchUser}
            value={authedUser}
          >
            {Object.keys(users).map((key) => (
              <option key={key} value={key}>
                {users[key].name}
              </option>
            ))}
          </select>
        </li>
        <li
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="logout" onClick={logout}>
            Logout
          </span>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users: users,
});

export default connect(mapStateToProps)(Nav);
