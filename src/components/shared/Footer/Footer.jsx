import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
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
          to="/"
          id="home"
          className={`${location.pathname === "/" ? "select" : ""}`}
        >
          <Link className="ui-link">
            <img className="icon-home" src="/src/assets/img/transparent.gif" />
            Home
          </Link>
        </li>
        <li
          className={`${location.pathname === "/multi-market" ? "select" : ""}`}
          to="/multi-market"
          id="multiMarket"
        >
          <Link className="ui-link">
            <img className="icon-pin" src="/src/assets/img/transparent.gif" />
            Multi Markets
          </Link>
        </li>
        <li
          className={`${location.pathname === "/account" ? "select" : ""}`}
          to="/account"
          id="account"
        >
          <Link className="ui-link">
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
