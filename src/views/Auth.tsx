import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Auth = () => {
  return (
    <div className="container">
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
      <Button style={{ marginTop: "1rem" }} variant="contained">
        Login
      </Button>
    </div>
  );
};

export default Auth;
