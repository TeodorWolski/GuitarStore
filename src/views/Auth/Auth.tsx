import { AuthCard } from "./Auth.styles";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login());
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AuthCard onSubmit={handleSubmit}>
        <h1>Guitar</h1>
        <input type="text" placeholder="Login" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </AuthCard>
    </div>
  );
};

export default Auth;
