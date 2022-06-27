import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useContext, useState } from "react";
import UserContext from "../../context/user";
import CreateEventModal from "../../components/createEventModal";
import { Main, Header, CalendarStyle } from "./styles";

export default function Schedule() {
  const localizer = momentLocalizer(moment);
  const { userData } = useContext(UserContext);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

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
      {!createModalIsOpen && (
        <CalendarStyle
          localizer={localizer}
          // events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={(event) => alert(event)}
        />
      )}
    </Main>
  );
}
