import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "../store";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyles";

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        {children}
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
