const Row = ({ user }) => {
  return (
    <tr>
      <td>
        <div className="l-user">
          <img src={user.avatarURL} alt="" className="l-img" />
          <div className="l-name">
            <span style={{ fontWeight: "bold" }}>{user.name}</span>
            <span>{user.id}</span>
          </div>
        </div>
      </td>
      <td>{Object.keys(user.answers).length}</td>
      <td>{user.questions.length}</td>
    </tr>
  );
};

export default Row;
