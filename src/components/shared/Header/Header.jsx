import { Link } from "react-router-dom";
import { Settings } from "../../../api";

const Header = () => {
  return (
    <header>
      <h1 className="top-logo" />
      <div className="btn-wrap">
        {Settings.registration && (
          <Link to="/register" className="btn-signup ui-link">
            Register
          </Link>
        )}

        <Link className="login-index ui-link" to="/login">
          Login
        </Link>
      </div>
      <div
        id="msgBox"
        className="message-wrap success to-open_bets"
        style={{ display: "none" }}
      >
        <div className="message">
          <h4 id="header">Bet Matched</h4>
          <p id="info">
            <span id="sideType" className="back">
              Back
            </span>
            <strong id="selectionName">England</strong>
            <strong id="stake">$1,000</strong> at odds
            <strong id="odds">1.29</strong>
          </p>
        </div>
        <a id="close" className="close ui-link" href="#">
          Close
        </a>
      </div>
      <div id="multiWalletDiv" className="overlay" style={{ display: "none" }}>
        <div className="wallet-detail">
          <div className="wallet-detail-group">
            <dl className="wallet-detail-content">
              <dt>Main Balance</dt>
              <dd className="wallet-balance-num">
                <span className="badge-currency" id="currency">
                  USD
                </span>
                <span id="mainBalance">$ 0.00</span>
              </dd>
              <dd className="wallet-exposure">
                Exposure <span id="mainExposure">$ 0.00</span>
              </dd>
            </dl>
          </div>
          <div id="walletContent" className="wallet-detail-group" />
          <div
            id="walletTemp"
            className="wallet-detail-group"
            style={{ display: "none" }}
          >
            <dl id="tempDl" className="wallet-detail-content">
              <dt id="vendorTitle">Housie Balance</dt>
              <dd className="wallet-balance-num">
                <span className="badge-currency" id="vendorCurrency">
                  USD
                </span>
                <span id="vendorBalance">$ 0.00</span>
              </dd>
              <dd className="wallet-recall">
                <button
                  className="btn-recall ui-btn ui-shadow ui-corner-all"
                  id="recall"
                >
                  Recall
                </button>
              </dd>
            </dl>
            <dl id="recallAllDl" className="wallet-detail-content">
              <dd className="align-R">
                <button
                  className="btn-recall ui-btn ui-shadow ui-corner-all"
                  id="recallAll"
                >
                  Recall All
                </button>
              </dd>
            </dl>
          </div>
          <div className="btn-box">
            <button
              className="btn ui-btn ui-shadow ui-corner-all"
              id="balanceClose"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
