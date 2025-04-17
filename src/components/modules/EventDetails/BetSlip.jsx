import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useBalance from "../../../hooks/balance";
import { useCurrentBets } from "../../../hooks/currentBets";
import { useExposure } from "../../../hooks/exposure";
import { useOrderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setPredictOdd,
  setPrice,
  setRunnerId,
  setStake,
} from "../../../redux/features/events/eventSlice";
import { Settings } from "../../../api";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import {
  handleDecreasePrice,
  handleIncreasePrice,
} from "../../../utils/editBetSlipPrice";

const BetSlip = () => {
  const [profit, setProfit] = useState(0);
  const { eventTypeId } = useParams();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { price, stake, placeBetValues } = useSelector((state) => state.event);
  const { eventId } = useParams();
  const { refetch: refetchBalance } = useBalance();
  const { refetch: refetchCurrentBets } = useCurrentBets(eventId);
  const { refetch: refetchExposure } = useExposure(eventId);
  const [betDelay, setBetDelay] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  useEffect(() => {
    if (betDelay <= 0) {
      setBetDelay(null);
    }

    dispatch(setPrice(placeBetValues?.price));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize.toFixed(2)
          : null
      )
    );
  }, [placeBetValues, betDelay, dispatch]);

  useEffect(() => {
    dispatch(setPredictOdd([]));
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
        cashout: placeBetValues?.cashout || false,
        b2c: Settings.b2c,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const payloadData = [
      {
        ...payload,
        site: Settings.siteUrl,
        nounce: uuidv4(),
        isbetDelay: Settings.betDelay,
      },
    ];
    setLoading(true);
    let delay = 0;
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 3 &&
      placeBetValues?.name?.length === 2
    ) {
      delay = 9000;
    }
    if (
      (eventTypeId == 4 || eventTypeId == 2) &&
      placeBetValues?.btype === "MATCH_ODDS" &&
      price > 7 &&
      placeBetValues?.name?.length === 3
    ) {
      delay = 9000;
    } else {
      setBetDelay(placeBetValues?.betDelay);
      delay = Settings.betDelay ? placeBetValues?.betDelay * 1000 : 0;
    }

    setTimeout(async () => {
      const res = await createOrder(payloadData).unwrap();

      if (res?.success) {
        setLoading(false);
        refetchExposure();
        refetchBalance();
        refetchCurrentBets();
        setBetDelay("");
        toast.success(res?.result?.result?.placed?.[0]?.message);
        dispatch(setPlaceBetValues(null));
        dispatch(setRunnerId(null));
      } else {
        setLoading(false);
        toast.error(
          res?.error?.status?.[0]?.description || res?.error?.errorMessage
        );
        setBetDelay(null);
      }
    }, delay);
  };

  useEffect(() => {
    if (
      price &&
      stake &&
      placeBetValues?.back &&
      placeBetValues?.btype === "MATCH_ODDS"
    ) {
      const multiply = price * stake;
      setProfit(formatNumber(multiply - stake));
    } else if (
      price &&
      stake &&
      placeBetValues?.back &&
      (placeBetValues?.btype === "BOOKMAKER" ||
        placeBetValues?.btype === "BOOKMAKER2")
    ) {
      setProfit(formatNumber(1 + price / stake));
    }
  }, [price, stake, profit, placeBetValues, setProfit]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  const handleDeleteStake = () => {
    if (stake) {
      const convertToString = stake.toString();
      const removeLastElement = convertToString.substring(
        0,
        convertToString.length - 1
      );
      dispatch(setStake(Number(removeLastElement)));
    }
  };

  const addStakeByKeyPad = (character) => {
    const isStakeAvailable = stake ? stake?.toString() : "";
    const converTToString =
      typeof character === "number" ? character.toString() : character;
    const concatStake = isStakeAvailable + converTToString;
    dispatch(setStake(concatStake));
  };

  return (
    <div
      id="betBoard_34198163_264782_780210_1"
      className="bet_slip-wrap back"
      style={{ display: "block" }}
    >
      <ul className="btn-list">
        <li>
          <p className="dynamic-min-bet">&nbsp;</p>
          <div id="inputOdds" className="input-num disable">
            {!placeBetValues?.isWeak && (
              <a
                onClick={() =>
                  handleDecreasePrice(price, placeBetValues, dispatch, setPrice)
                }
                id="oddsDown"
                className="icon-minus"
              />
            )}

            <span id="odds" className="typed">
              <input
                onChange={(e) => dispatch(setPrice(e.target.value))}
                style={{ width: "100%", border: "none", paddingLeft: "3px" }}
                className="typed"
                type="text"
                placeholder="Price"
                value={price}
              />
            </span>
            {!placeBetValues?.isWeak && (
              <a
                onClick={() =>
                  handleIncreasePrice(price, placeBetValues, dispatch, setPrice)
                }
                id="oddsUp"
                className="icon-plus"
              />
            )}
          </div>
        </li>
        <li>
          <p className="dynamic-min-bet">
            Min Bet: 100
            <strong id="dynamicMinBet" />
          </p>
          <div id="inputStake" className="input-num input-stake">
            <span id="stake" className="typed">
              <input
                onChange={(e) => dispatch(setStake(e.target.value))}
                style={{ width: "100%", border: "none", paddingLeft: "3px" }}
                className="typed"
                type="text"
                placeholder={`Max Bet: ${placeBetValues?.maxLiabilityPerBet}`}
                value={stake !== null ? stake : null}
              />
            </span>
          </div>
        </li>
      </ul>
      <ul id="stakePopupList" className="coin-list">
        {parseButtonValues?.slice?.(0, 6)?.map((button, i) => (
          <li key={i} onClick={() => dispatch(setStake(button?.value))}>
            <a id="selectStake_1">{button?.value}</a>
          </li>
        ))}
      </ul>
      <div id="keyboard" className="keyboard-wrap">
        <ul id="numPad" className="btn-tel">
          <li onClick={() => addStakeByKeyPad(1)}>
            <a>1</a>
          </li>
          <li onClick={() => addStakeByKeyPad(2)}>
            <a>2</a>
          </li>
          <li onClick={() => addStakeByKeyPad(3)}>
            <a>3</a>
          </li>
          <li onClick={() => addStakeByKeyPad(4)}>
            <a>4</a>
          </li>
          <li onClick={() => addStakeByKeyPad(5)}>
            <a>5</a>
          </li>
          <li onClick={() => addStakeByKeyPad(6)}>
            <a>6</a>
          </li>
          <li onClick={() => addStakeByKeyPad(7)}>
            <a>7</a>
          </li>
          <li onClick={() => addStakeByKeyPad(1)}>
            <a>8</a>
          </li>
          <li onClick={() => addStakeByKeyPad(9)}>
            <a>9</a>
          </li>
          <li onClick={() => addStakeByKeyPad(0)}>
            <a>0</a>
          </li>
          <li onClick={() => addStakeByKeyPad("00")}>
            <a>00</a>
          </li>
          <li>
            {" "}
            <a onClick={() => addStakeByKeyPad(".")}>.</a>
          </li>
        </ul>
        <a onClick={handleDeleteStake} id="delete" className="btn-delete" />
      </div>
      <ul className="btn-list">
        <li>
          <a
            onClick={() => {
              dispatch(setPlaceBetValues(null));
              dispatch(setRunnerId(null));
            }}
            id="cancel"
            className="btn"
          >
            Cancel
          </a>
        </li>
        <li>
          <button
            disabled={!stake}
            style={{ width: "100%" }}
            id="placeBet"
            onClick={handleOrderBets}
            className={`btn-send ${!stake ? "disable" : ""}`}
          >
            Place Bet
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BetSlip;
