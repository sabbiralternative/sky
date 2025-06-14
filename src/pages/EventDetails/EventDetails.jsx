import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetEventDetailsQuery } from "../../redux/features/events/events";
import { setPredictOdd } from "../../redux/features/events/eventSlice";
import Bookmaker from "../../components/modules/EventDetails/Bookmaker";
import Fancy from "../../components/modules/EventDetails/Fancy";
import MatchOdds from "../../components/modules/EventDetails/MatchOdds";
import { setIsVideoAvailable } from "../../redux/features/global/globalSlice";

import { Settings } from "../../api";
import { useAccessToken } from "../../hooks/accessToken";
import ScoreCard from "../../components/modules/EventDetails/ScoreCard";
import SportsBook from "./SportsBook/SportsBook";

const EventDetails = () => {
  const { eventTypeId, eventId } = useParams();
  const [profit, setProfit] = useState(0);
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);
  const { isVideoAvailable, isPlayVideo } = useSelector(
    (state) => state.global
  );

  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    {
      pollingInterval: 1000,
    }
  );
  const payload = {
    eventTypeId: eventTypeId,
    eventId: eventId,
    type: "video",
    casinoCurrency: Settings.casinoCurrency,
  };
  const { data: video } = useAccessToken(payload, data?.score?.hasVideo);
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

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    // value?.toFixed(2)
    return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
  };

  //   const match_odds = data?.result?.filter(
  //     (match_odd) =>
  //       match_odd.btype === "MATCH_ODDS" && match_odd?.visible == true
  //   );

  useEffect(() => {
    if (data?.score?.hasVideo) {
      dispatch(setIsVideoAvailable(true));
    } else {
      dispatch(setIsVideoAvailable(false));
    }
  }, [data, dispatch]);

  return (
    <div id="page" role="page">
      {isVideoAvailable && isPlayVideo && video?.url && (
        <div id="streamingBox" className="tv-fix">
          <div className="tv-box">
            <iframe
              src={video?.url}
              id="gliveStreamingIframe"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
        </div>
      )}

      <div id="mainWrap" className="mian-wrap">
        <div className="game-wrap">
          <h4 id="gameInfo" className="game-info">
            Cricket
          </h4>
        </div>
        {eventTypeId == 4 &&
          data?.result?.[0]?.score2?.length !== 0 &&
          !Array.isArray(data?.result?.[0]?.score2) && (
            <ScoreCard score2={data?.result?.[0]?.score2} />
          )}
        {data?.result?.length > 0 && <MatchOdds data={data?.result} />}
        {data?.result?.length > 0 && <Bookmaker data={data?.result} />}
        {data?.result?.length > 0 && <Fancy data={data?.result} />}
        {data && data?.sportsbook?.Result && (
          <SportsBook sportsBook={data?.sportsbook?.Result} />
        )}
      </div>
    </div>
  );
};

export default EventDetails;
