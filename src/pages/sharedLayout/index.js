import { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../context/user";
import useApi from "../../hooks/useApi";
import validateMethod from "../../router/validateMethod";

export default function SharedLayout() {
  const api = useApi();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { userData, setUserData } = useContext(UserContext);
  const parsedUserData = JSON.parse(userData);

  useEffect(() => {
    if (pathname === "/" && parsedUserData?.token) {
      return navigate("/schedule");
    }
    if (pathname === "/" || pathname === "/signup") return;
    validateMethod(navigate, parsedUserData, setUserData);
  }, [pathname, api]);

  return (
    <>
      <Outlet />
    </>
  );
}
