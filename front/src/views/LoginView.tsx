import { ILogin, ILoginErrors, validateLogin } from "@/helpers/validateForms";
import React, { useEffect, useState } from "react";

const LoginView = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [userData, setUserData] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ILoginErrors>({});

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    //const response = login(userData)
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (isSubmitted) {
      const errors = validateLogin(userData);
      setErrors(errors);
    }
  }, [userData]);

  return (
    <div>
        <h1>Welcome to LUXORA</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={userData.email}
            onChange={handleChange}
            placeholder="Example@mail.com"
            className=""
          />
          {errors.email && <span className="">{errors.email}</span>}
        </div>
        <div>
          <input
            type="text"
            value={userData.password}
            onChange={handleChange}
            placeholder="****"
            className=""
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button
          disabled={!!errors.email || !!errors.password}
          type="submit"
          className=""
        >
            Log in
        </button>
      </form>
    </div>
  );
};

export default LoginView;
