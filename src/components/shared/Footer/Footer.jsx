import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  return (
    <nav>
      <ul className="mini-lobby">
        <li id="mini" className="main-nav">
          <Link to="/" className="ui-link">
            <img
              className="icon-promote"
              src="/src/assets/img/minigame-promo/promot.svg"
              alt="mini"
            />
          </Link>
        </li>
        <li
          className={`${location.pathname === "/sports" ? "select" : ""}`}
          id="sports"
        >
          <Link to="/sports" className="ui-link">
            <img
              className="icon-sports"
              src="/src/assets/img/transparent.gif"
            />
            Sports
          </Link>
        </li>
        <li
          className={`${location.pathname === "/in-play" ? "select" : ""}`}
          id="inPlay"
        >
          <Link to="/in-play" className="ui-link">
            <img
              className="icon-inplay"
              src="/src/assets/img/transparent.gif"
            />
            In-Play
          </Link>
        </li>
        <li
          id="home"
          className={`${location.pathname === "/" ? "select" : ""}`}
        >
          <Link to="/" className="ui-link">
            <img className="icon-home" src="/src/assets/img/transparent.gif" />
            Home
          </Link>
        </li>
        <li
          className={`${location.pathname === "/multi-market" ? "select" : ""}`}
          id="multiMarket"
        >
          <Link to="/multi-market" className="ui-link">
            <img className="icon-pin" src="/src/assets/img/transparent.gif" />
            Multi Markets
          </Link>
        </li>
        <li
          className={`${location.pathname === "/account" ? "select" : ""}`}
          id="account"
        >
          <Link to={token ? "/account" : "/login"} className="ui-link">
            <img
              className="icon-account"
              src="/src/assets/img/transparent.gif"
            />
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
