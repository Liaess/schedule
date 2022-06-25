import User from "../services/user";

export default function useApi() {
  return {
    user: new User(),
  };
}
