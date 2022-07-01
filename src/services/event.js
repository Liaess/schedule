import api from "./api";

export default class Events {
  createEvent(fetchData, token) {
    return api.post("/events/register", fetchData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getEvents(token) {
    return api.get("/events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteEvent(id, token) {
    return api.delete(`/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateEvent(id, fetchData, token) {
    return api.put(`/events/${id}`, fetchData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
