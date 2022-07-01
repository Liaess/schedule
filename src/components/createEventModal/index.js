import { useContext, useState } from "react";
import {
  InputInformation,
  MainPageLabel,
  ClockInformation,
} from "./data/labels";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import UserContext from "../../context/user";
import { Button, Form, InputGroup, ModalStyle, TextField } from "./styles";

export default function CreateEventModal({
  setCreateModalIsOpen,
  createModalIsOpen,
}) {
  const { userData } = useContext(UserContext);
  const [disable, setDisable] = useState(false);
  const [fetchData, setFetchData] = useState({
    title: "",
    start: null,
    end: null,
  });
  const api = useApi();

  function submitHandler(event) {
    event.preventDefault();
    if (fetchData.start >= fetchData.end) {
      return toast("Start date must be before end date!");
    }
    setDisable(true);
    const parsedUserData = JSON.parse(userData);
    api.events
      .createEvent(fetchData, parsedUserData.token)
      .then((_res) => {
        setDisable(false);
        setCreateModalIsOpen(false);
        toast("Event created successfully!");
      })
      .catch((err) => {
        setDisable(false);
        toast(err.response?.data?.error);
        setFetchData({
          title: "",
          start: null,
          end: null,
        });
      });
  }

  return (
    <ModalStyle
      isOpen={createModalIsOpen}
      ariaHideApp={false}
      contentLabel="Create Modal"
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
              value={fetchData[input.id]}
              disabled={disable}
              onChange={(e) =>
                setFetchData({ ...fetchData, [input.id]: e.target.value })
              }
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
              value={fetchData[clockInfo.id]}
              disabled={disable}
              disablePast
              required
              label={clockInfo.label}
              onChange={(value) =>
                setFetchData({ ...fetchData, [clockInfo.id]: value._d })
              }
              renderInput={(props) => (
                <TextField type={"datetime-local"} required {...props} />
              )}
            />
          </LocalizationProvider>
        ))}
        <Button>{MainPageLabel.submitLabel}</Button>
      </Form>
      <Button onClick={() => setCreateModalIsOpen(false)}>
        {MainPageLabel.abortLabel}
      </Button>
    </ModalStyle>
  );
}
