import api from "./api";

export default class Events {
  createEvent(fetchData, token) {
    const body = {
      title: fetchData.title,
      description: fetchData.description,
      startDate: fetchData.startDate?._d,
      endDate: fetchData.endDate?._d,
    };
    return api.post("/events/register", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
