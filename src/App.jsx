import { Route, Routes } from "react-router-dom";
import { useLogoutMutation } from "./slices/api";
import Auth from "./pages/Auth";

function App() {
  const [logout] = useLogoutMutation();
  return (
    <>
      <button onClick={logout}>LOGOUT</button>
      <Routes>
        <Route path={"/register"} element={<Auth />} />
        <Route path={"/login"} element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
