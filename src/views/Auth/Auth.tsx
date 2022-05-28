import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login());
  };
  return (
    <form
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        type="text"
        id="outlined-basic"
        label="Login"
        variant="outlined"
      />
      <TextField
        style={{ marginTop: "1rem" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button type="submit" style={{ marginTop: "1rem" }} variant="contained">
        Login
      </Button>
    </form>
  );
};

export default Auth;
