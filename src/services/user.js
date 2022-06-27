import api from "./api";

export default class User {
  signUp(fetchData) {
    return api.post("/users/register", fetchData);
  }
  signIn(fetchData) {
    return api.post("/users/login", fetchData);
  }
}
