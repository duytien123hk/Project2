import { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Login = ({ users, dispatch }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("sarahedo");
  const [pass, setPass] = useState("123");
  const [error, setError] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("redirect");

  const handleLogin = (e) => {
    e.preventDefault();
    const checkLogin = Object.keys(users).includes(name);
    if (checkLogin) {
      dispatch(setAuthedUser(name));
      setError(false);
      navigate(redirect ? redirect : "/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="container-login">
      <form className="login-box">
        <h3 className="login-header">Login</h3>
        {error && (
          <span data-testid="error" style={{ color: "red" }}>
            Please re-enter username
          </span>
        )}
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="username"
            data-testid="username"
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoComplete="current-password"
            data-testid="password"
          />
        </div>
        <button className="btn" data-testid="submit" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);
