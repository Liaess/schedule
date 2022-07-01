import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user";
import { Button, Form, InputGroup, ModalStyle, TextField } from "./styles";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  InputInformation,
  MainPageLabel,
  ClockInformation,
} from "./data/labels";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";

export default function EditEventModal({
  editModalIsOpen,
  setEditModalIsOpen,
  selectedEvent,
}) {
  const { userData } = useContext(UserContext);
  const [disable, setDisable] = useState(false);
  const [initialState, setInitialState] = useState({
    title: selectedEvent.title,
    start: selectedEvent.start,
    end: selectedEvent.end,
  });
  const [fetchData, setFetchData] = useState({});
  const api = useApi();

  function submitHandler(event) {
    event.preventDefault();
    if (Object.keys(fetchData).length === 0) {
      return toast("Please edit something!");
    }
    if (initialState?.start >= initialState?.end) {
      return toast("Start date must be before end date");
    }
    setDisable(true);
    const parsedUserData = JSON.parse(userData);
    api.events
      .updateEvent(selectedEvent.id, fetchData, parsedUserData?.token)
      .then(() => {
        setDisable(false);
        toast("Event updated successfully!");
        setEditModalIsOpen(false);
        setFetchData({});
      })
      .catch((err) => {
        toast(err.response?.data?.error);
      });
  }

  useEffect(() => {
    for (const state in initialState) {
      if (
        selectedEvent[state] === fetchData[state] ||
        new Date(selectedEvent[state]).getTime() ===
          new Date(fetchData[state]).getTime()
      ) {
        delete fetchData[state];
        setFetchData(fetchData);
      }
    }
  }, [initialState]);

  return (
    <ModalStyle
      isOpen={editModalIsOpen}
      ariaHideApp={false}
      contentLabel="Edit Modal"
    >
      <h2>{MainPageLabel.title}</h2>
      <Form onSubmit={submitHandler}>
        {InputInformation.map((input) => (
          <InputGroup key={input.id}>
            <TextField
              id={input.id}
              type={input.type}
              label={input.label}
              required
              disable={disable}
              value={initialState[input.id]}
              disabled={disable}
              onChange={(e) => {
                setInitialState({
                  ...initialState,
                  [input.id]: e.target.value,
                });
                setFetchData({ ...fetchData, [input.id]: e.target.value });
              }}
            ></TextField>
          </InputGroup>
        ))}
        {ClockInformation.map((clockInfo) => (
          <LocalizationProvider
            key={clockInfo.id}
            adapterLocale={"en"}
            dateAdapter={AdapterMoment}
          >
            <DateTimePicker
              value={initialState[clockInfo.id]}
              disabled={disable}
              disablePast
              required
              label={clockInfo.label}
              onChange={(value) => {
                setInitialState({
                  ...initialState,
                  [clockInfo.id]: value._d,
                });
                setFetchData({
                  ...fetchData,
                  [clockInfo.id]: value._d,
                });
              }}
              renderInput={(props) => (
                <TextField type={"datetime-local"} required {...props} />
              )}
            />
          </LocalizationProvider>
        ))}
        <Button>{MainPageLabel.submitLabel}</Button>
      </Form>
      <Button onClick={() => setEditModalIsOpen(false)}>
        {MainPageLabel.abortLabel}
      </Button>
    </ModalStyle>
  );
}
