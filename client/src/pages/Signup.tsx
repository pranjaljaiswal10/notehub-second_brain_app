import { api } from "@/utils/apiclient";
import { useState } from "react";

const Signup = () => {
  const [authData, setAuthData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await api.post(
        isSignInForm ? `/users/login` : `/users/register`,
        authData,
        {
          withCredentials: true,
        }
      );
      const data = response.data;
      console.log(data);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }
  const tabSwitch = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsSignInForm(e.currentTarget.value === "SignIn");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <p>Sign in </p>
      <div>
        <button onClick={(e) => tabSwitch(e)}>SignIn</button>
        <button onClick={(e) => tabSwitch(e)}>SignUp</button>
        <form onSubmit={(e) => handleSubmit(e)}>
          {isSignInForm && (
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={authData.username}
                onChange={(e) =>
                  setAuthData({ ...authData, [e.target.id]: e.target.value })
                }
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={authData.email}
              onChange={(e) =>
                setAuthData({ ...authData, [e.target.id]: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={authData.password}
              onChange={(e) =>
                setAuthData({ ...authData, [e.target.id]: e.target.value })
              }
            />
          </div>
          <button type="submit">
            {isSignInForm ? "SignIn" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
