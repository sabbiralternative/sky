import { useSelector } from "react-redux";
import LoggedInUser from "./LoggedInUser";
import UnauthorizedUser from "./UnauthorizedUser";

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  return token ? <LoggedInUser /> : <UnauthorizedUser />;
};

export default Header;
