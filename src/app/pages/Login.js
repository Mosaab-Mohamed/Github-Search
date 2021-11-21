import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login-page">
      <div className="login-page__content">
        <h1 className="login-page__header">WELCOME TO GITHUB SEARCH APP</h1>
        <button
          className="login-page__button"
          type="button"
          onClick={() => loginWithRedirect()}
        >
          LOG IN / SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Login;
