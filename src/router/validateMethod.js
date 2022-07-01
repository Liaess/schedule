import { toast } from "react-toastify";

export default function validateMethod(navigate, parsedUserData, setUserData) {
  const validations = allValidations(parsedUserData);

  window.onstorage = (event) => {
    if (event.key === "userData") {
      setUserData(event.newValue);
    }
  };

  for (const condition of validations) {
    if (!condition.check) {
      if (condition.message) {
        toast(condition.message);
      }
      navigate(`${condition.to}`);
    }
  }
}

function allValidations(parsedUserData) {
  return [
    {
      to: "/",
      check: parsedUserData?.token,
      message: "Please login to continue!",
    },
  ];
}
