import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/user";

function App() {
  return (
    <>
      <UserProvider>
        <ToastContainer />
        <GlobalStyles />
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
