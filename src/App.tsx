import Auth from "./views/Auth/Auth";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import ItemPage from "./views/ItemPage/ItemPage";

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <>
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <ItemPage />}
    </>
  );
};

export default App;
