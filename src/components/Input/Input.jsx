import { useState } from "react";
import "./Input.scss";

const Input = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setError(emailValidation(email));
  };

  const emailValidation = (email) => {
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return "Please provide a valid email";
    }
    return;
  };

  return (
    <>
      <form className="input-wrapper" onSubmit={submit}>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && (
          <img
            className="error-icon"
            src="./images/icon-error.svg"
            alt="error-icon"
          />
        )}
        <button type="submit">
          <img src="./images/icon-arrow.svg" alt="arrow-icon" />
        </button>
      </form>
      <p className="error">{error}</p>
    </>
  );
};

export default Input;
