import api from "./api";

export default class User {
  signUp(fetchData) {
    return api.post("/users/sign-up", fetchData);
  }
  signIn(fetchData) {
    return api.post("/users/sign-in", fetchData);
  }
}
