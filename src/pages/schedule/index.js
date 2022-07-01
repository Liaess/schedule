import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user";
import CreateEventModal from "../../components/createEventModal";
import { Main, Header, CalendarStyle } from "./styles";
import useApi from "../../hooks/useApi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import EditEventModal from "../../components/editEventModal";

export default function Schedule() {
  const localizer = momentLocalizer(moment);
  const { userData } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const api = useApi();

  function getEvents() {
    setLoading(false);
    api.events
      .getEvents(userData.token)
      .then(({ data }) => {
        const convertedDates = data.map((each) => {
          return {
            ...each,
            start: new Date(each.start),
            end: new Date(each.end),
          };
        });
        setEvents(convertedDates);
        setLoading(false);
      })
      .catch((_err) => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getEvents();
  }, [createModalIsOpen, editModalIsOpen]);

  function waitUserDecision(data) {
    setSelectedEvent(data);
    Swal.fire({
      title: "What do you want to do?",
      icon: "warning",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: "var(--confirmButtonColor)",
      confirmButtonText: "Delete it!",
      denyButtonColor: "var(--denyButtonColor)",
      denyButtonText: "Edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        api.events
          .deleteEvent(data.id, userData.token)
          .then(() => {
            Swal.fire("Deleted!", "Your event has been deleted.", "success");
            getEvents();
          })
          .catch((err) => {
            toast(err.response?.data?.error);
          });
      }
      if (result.isDenied) {
        setEditModalIsOpen(!editModalIsOpen);
      }
    });
  }

  return (
    <Main>
      <Header>
        <p>{userData?.name}&rsquo;s Schedule</p>
        <button onClick={() => setCreateModalIsOpen(true)}>Create</button>
        <button>Logout</button>
      </Header>
      {createModalIsOpen && (
        <CreateEventModal
          createModalIsOpen={createModalIsOpen}
          setCreateModalIsOpen={setCreateModalIsOpen}
        />
      )}
      {editModalIsOpen && (
        <EditEventModal
          editModalIsOpen={editModalIsOpen}
          setEditModalIsOpen={setEditModalIsOpen}
          selectedEvent={selectedEvent}
        />
      )}
      {!createModalIsOpen && !loading && !editModalIsOpen && (
        <CalendarStyle
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={(data) => {
            waitUserDecision(data);
          }}
        />
      )}
    </Main>
  );
}
