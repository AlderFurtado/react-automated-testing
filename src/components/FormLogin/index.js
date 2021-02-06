import React, { useState, useEffect } from "react";

// import { Container } from './styles';

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValidate, setIsFormValidate] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    if (password.trim().length < 6) return setIsFormValidate(false);
    if (email.trim().length === 0) return setIsFormValidate(false);
    setIsFormValidate(true);
  };

  return (
    <div>
      <form>
        <input
          data-testid="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          data-testid="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          data-testid="btnSubmit"
          disabled={!isFormValidate}
        >
          Log In
        </button>
      </form>
      {isLogged && <p>Login com sucesso</p>}
    </div>
  );
}

export default FormLogin;
