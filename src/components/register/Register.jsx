import "./Register.css";

const Register = () => {
  return (
    <>
    <h2>Register here</h2>
      <form className="register_user_main_div">
        <input
          className="input_box"
          type="text"
          placeholder="Enter first name"
        />
        <input
          className="input_box"
          type="text"
          placeholder="Enter last name"
        />

        <input className="input_box" type="text" placeholder="Enter email" />
        <input
          className="input_box"
          type="text"
          placeholder="Enter mobile number"
        />
        <input className="input_box" type="text" placeholder="Enter username" />
        <div className="select_tags_div">
          <select className="select_tag">
            <option value="">User type</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <select className="select_tag">
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <input className="input_box" type="text" placeholder="Enter password" />

        <button className="btn">Register</button>
      </form>
    </>
  );
};

export default Register;
