import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useExposure } from "../../../hooks/exposure";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import {
  setPlaceBetValues,
  setRunnerId,
} from "../../../redux/features/events/eventSlice";
import BetSlip from "./BetSlip";

const Fancy = ({ data }) => {
  const navigate = useNavigate();
  const fancyData = data?.filter(
    (fancy) =>
      fancy.btype === "FANCY" &&
      fancy.tabGroupName === "Normal" &&
      fancy?.visible == true
  );
  const [marketName, setMarketName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { runnerId } = useSelector((state) => state.event);
  const { data: exposure } = useExposure(eventId);
  const [getLadder] = useGetLadderMutation();

  const handleBetSlip = (betType, games, runner, price) => {
    if (token) {
      let selectionId;
      let runnerId;
      let eventTypeId;
      if (!price) {
        return;
      }

      let pnlBySelection;
      const updatedPnl = [];

      if (exposure?.pnlBySelection) {
        const obj = exposure?.pnlBySelection;
        pnlBySelection = Object?.values(obj);
      }

      if (games?.btype == "FANCY") {
        selectionId = games?.id;
        runnerId = games?.id;
        eventTypeId = games?.eventTypeId;
      } else if (games?.btype && games?.btype !== "FANCY") {
        selectionId = runner?.id;
        runnerId = games.runners.map((runner) => runner.id);
        eventTypeId = games?.eventTypeId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      } else {
        selectionId = runner?.selectionId;
        eventTypeId = games?.marketId;
        games?.runners?.forEach((runner) => {
          const pnl = pnlBySelection?.find(
            (p) => p?.RunnerId === runner?.selectionId
          );
          if (pnl) {
            updatedPnl.push(pnl?.pnl);
          }
        });
      }

      const betData = {
        price,
        side: betType === "back" ? 0 : 1,
        selectionId,
        btype: games?.btype,
        eventTypeId,
        betDelay: games?.betDelay,
        marketId: games?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: games.runners.map((runner) => runner.name),
        runnerId,
        isWeak: games?.isWeak,
        maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
        isBettable: games?.isBettable,
        maxLiabilityPerBet: games?.maxLiabilityPerBet,
        pnl: updatedPnl,
        marketName: games?.name,
        eventId: games?.eventId,
        totalSize: 0,
      };
      if (games?.btype == "FANCY") {
        dispatch(setRunnerId(games?.id));
      } else if (games?.btype && games?.btype !== "FANCY") {
        dispatch(setRunnerId(runner?.id));
      } else {
        dispatch(setRunnerId(runner?.selectionId));
      }

      dispatch(setPlaceBetValues(betData));
    } else {
      navigate("/login");
    }
  };

  let pnlBySelection;
  if (exposure?.pnlBySelection) {
    const obj = exposure?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  const handleGetLadder = async (pnl, marketName) => {
    if (!pnl?.MarketId) {
      return;
    }
    setMarketName(marketName);
    const res = await getLadder({ marketId: pnl?.MarketId }).unwrap();

    if (res.success) {
      setLadderData(res.result);
    }
  };

  return (
    <>
      {fancyData?.length > 0 && (
        <div id="fancyBetTable_34198163" style={{}} name="multiMarketItem">
          <div id="fancyBetHead" className="fancy_bet-head" style={{}}>
            <h4 className="in-play">
              <a id="multiMarketPin" className="pin-off" href="#">
                Pin to Muilti Markets
              </a>
              <span>
                <pre>in-play</pre>Fancy Bet
              </span>
              <a className="btn-head_rules">Rules</a>
            </h4>
          </div>
          <div
            id="fancyBetTabWrap"
            className="fancy_bet_tab-wrap ps ps--theme_default ps--active-x"
            style={{}}
            data-ps-id="1b4ccfd3-b33a-4c2b-33e3-3c5c39e54100"
          >
            <ul className="special_bets-tab">
              <li className="select">
                <a>All</a>
              </li>
              <li>
                <a>Fancy</a>
              </li>
              <li>
                <a>Ball by Ball</a>
              </li>
              <li>
                <a>Khadda</a>
              </li>
              <li>
                <a>Lottery</a>
              </li>
              <li>
                <a>Odd/Even</a>
              </li>
            </ul>
          </div>

          <div id="fancyBetField" className="bets-wrap fancy-bet" style={{}}>
            <dl className="bets-selections-head">
              <dt />
              <dd className="mode-land" />
              <dd className="mode-land" />
              <dd>No</dd>
              <dd>Yes</dd>
              <dd className="mode-land" />
              <dd className="mode-land" />
            </dl>
          </div>
          <div id="fancyBetTag">
            {fancyData?.map((game) => {
              const pnl =
                pnlBySelection?.find((pnl) => pnl?.MarketId === game?.id) || {};

              return (
                <>
                  <div
                    key={game?.id}
                    id="fancyBetMarket_2183646"
                    className="bets-wrap fancy-bet"
                    style={{}}
                  >
                    <h5>
                      <span id="marketName"> {game?.name}</span>
                      <a
                        href="#"
                        id="open-fancy_info"
                        className="btn-fancy_info"
                      >
                        fancybet info
                      </a>
                    </h5>
                    <dl className="bets-selections">
                      <dt className="line_market-selection">
                        <dl className="tips"></dl>
                      </dt>

                      <dd
                        onClick={() =>
                          handleBetSlip(
                            "lay",
                            game,
                            game?.runners?.[0],
                            game?.runners?.[0]?.lay?.[0]?.line
                          )
                        }
                        id="lay_1"
                      >
                        <a className="lay-1">
                          {game?.runners?.[0]?.lay?.[0]?.line}
                          <span>{game?.runners?.[0]?.lay?.[0]?.price}</span>
                        </a>
                      </dd>
                      <dd
                        onClick={() =>
                          handleBetSlip(
                            "back",
                            game,
                            game?.runners?.[0],
                            game?.runners?.[0]?.back?.[0]?.line
                          )
                        }
                        id="back_1"
                      >
                        <a className="back-1">
                          {game?.runners?.[0]?.back?.[0]?.line}
                          <span> {game?.runners?.[0]?.back?.[0]?.price}</span>
                        </a>
                      </dd>
                      <dd className="mode-land" />
                      <dd className="mode-land" />
                    </dl>
                  </div>
                  {runnerId === game?.id && <BetSlip />}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Fancy;
