import { Routes as Switch, Route } from "react-router-dom";
import Login from "./login";
import SharedLayout from "./sharedLayout";
import Register from "./signup";

export default function Pages() {
  return (
    <Switch>
      <Route path={"/"} element={<SharedLayout />}>
        <Route index element={<Login />}></Route>
        <Route path={"/signup"} element={<Register />}></Route>
      </Route>
    </Switch>
  );
}
