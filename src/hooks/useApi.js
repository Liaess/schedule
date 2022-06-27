import User from "../services/user";
import Event from "../services/event";

export default function useApi() {
  return {
    user: new User(),
    events: new Event(),
  };
}
