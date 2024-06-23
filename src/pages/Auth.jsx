import { useEffect, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "../slices/api";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [form, setForm] = useState(true);
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };
  const navigate = useNavigate();
  const submit = async () => {
    const authMethod = form ? login : register;

    try {
      await authMethod({ username, password, email, phone_number }).unwrap();
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };
  useEffect(() => {
    {
      form ? navigate("/login") : navigate("/register");
    }
  }, [form]);

  return (
    <>
      {window.sessionStorage.getItem("CREDENTIALS") && form ? (
        <>
          <h1>Successfully Logged In!</h1>
        </>
      ) : window.sessionStorage.getItem("CREDENTIALS") && !form ? (
        <h1>Successfully Registered!</h1>
      ) : (
        <div id="form" onKeyDown={handleKeyDown}>
          {!form ? <h1>Register:</h1> : <h1>Login:</h1>}
          <input
            type={"text"}
            placeholder={"Enter username..."}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
          {!form && (
            <input
              type={"email"}
              placeholder={"Enter email..."}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          )}
          <input
            type={"password"}
            placeholder={"Enter password..."}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          {!form && (
            <>
              <input
                type={"password"}
                placeholder={"confirm password..."}
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
                className="form-input"
              />
              <input
                type="tel"
                placeholder="Enter phone number..."
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
                className="form-input"
              />
            </>
          )}
          <button onClick={submit} className="form-button">
            Submit
          </button>
          <div>
            {!form ? (
              <p>Already have an account?</p>
            ) : (
              <p>
                <br />
                Don't have an account?
              </p>
            )}
            <button onClick={() => setForm(!form)} className="form-button">
              {form ? "Register Here!" : "Login Here!"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Auth;
