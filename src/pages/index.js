import { Routes as Switch, Route } from "react-router-dom";
import ErrorMessage from "./errorMessage";
import Login from "./login";
import Schedule from "./schedule";
import SharedLayout from "./sharedLayout";
import Register from "./signup";

export default function Pages() {
  return (
    <Switch>
      <Route path={"/"} element={<SharedLayout />}>
        <Route index element={<Login />}></Route>
        <Route path={"/signup"} element={<Register />}></Route>
        <Route path={"/schedule"} element={<Schedule />}></Route>
        <Route path={"/*"} element={<ErrorMessage />}></Route>
      </Route>
    </Switch>
  );
}
