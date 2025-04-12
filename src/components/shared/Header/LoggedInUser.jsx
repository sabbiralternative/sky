import { Link } from "react-router-dom";
import images from "../../../assets/images";
import useBalance from "../../../hooks/balance";
import Notification from "./Notification";

const LoggedInUser = () => {
  const { data } = useBalance();

  return (
    <>
      <header>
        <ul>
          <li className="li-tv_bet" style={{ height: "100%" }}>
            <a
              style={{ height: "100%" }}
              id="openBetsBtn"
              className="a-open_bets ui-link"
            >
              <img src={images.transparent} />
              Bets
            </a>
          </li>
          <li style={{ height: "100%" }} className="main-wallet">
            <a id="multiWallet" className="a-wallet ui-link">
              <ul id="accountCredit" style={{ display: "flex" }}>
                <li>
                  <span>Main</span>
                  <span id="betCredit"> {data?.availBalance}</span>
                </li>
                <li>
                  <span>Exposure</span>
                  <span id="totalExposure"> {data?.deductedExposure}</span>
                </li>
              </ul>
            </a>
            <a
              style={{ height: "100%" }}
              className="a-refresh ui-link"
              id="menuRefresh"
              title="Refresh Main Wallet"
            >
              <img src={images.transparent} />
            </a>
          </li>
          <li style={{ height: "100%" }}>
            <Link
              to="/edit-stake"
              style={{ height: "100%" }}
              className="a-setting ui-link"
              title="Setting"
            >
              <img src={images.transparent} />
            </Link>
          </li>
        </ul>
      </header>
      <Notification />
    </>
  );
};

export default LoggedInUser;
