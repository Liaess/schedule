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

  useEffect(() => {
    if (pathname === "/") return;
    validateMethod(navigate, userData, setUserData);
  }, [pathname, api]);
  
  return (
    <>
      <Outlet />
    </>
  );
}
