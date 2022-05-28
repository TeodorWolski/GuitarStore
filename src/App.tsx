import Auth from "./views/Auth";
import "./styles/main.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <div>hello</div>}
    </>
  );
};

export default App;
