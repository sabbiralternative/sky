const EventDetails = () => {
  return (
    <div id="page" role="page">
      <div id="mainWrap" className="mian-wrap">
        <div className="game-wrap">
          <h4 id="gameInfo" className="game-info">
            Cricket
            <ul id="infoIcon" className="info-icon">
              <li id="inPlayIcon" style={{ display: "none" }}>
                <img
                  className="info-inplay"
                  src="https://statics3.skyexchange.xyz/images/mobile/transparent.gif"
                />
                In-Play
              </li>
              <li style={{ display: "none" }}>
                <img
                  className="info-cashout"
                  src="https://statics3.skyexchange.xyz/images/mobile/transparent.gif"
                />
                Cash Out
              </li>
              <li id="fancyBetIcon" style={{ display: "none" }}>
                <span className="game-fancy">Fancy</span>
              </li>
              <li id="bookMakerIcon" style={{ display: "none" }}>
                <span className="game-bookmaker">BookMaker</span>
              </li>
              <li id="feedingSiteIcon" style={{ display: "none" }}>
                <span className="game-sportsbook">Sportsbook</span>
              </li>
              <li>
                <span
                  id="lowLiquidityTag"
                  className="game-low_liq"
                  style={{ display: "none" }}
                >
                  Low
                </span>
              </li>
            </ul>
          </h4>
          <table
            id="gameTeam"
            className="game-team "
            style={{ display: "none" }}
          >
            <tbody>
              <tr>
                <th>
                  <a id="multiMarketPin" className="pin-off" href="#" />
                  <h4 id="teamHome" />
                  <h4 id="teamAway" />
                  <ul id="time" className="scores-time">
                    <li>10 Apr, 19:30</li>
                  </ul>
                </th>
                <td className="team-refresh">
                  <a id="refresh" className="refresh" href="#" />
                </td>
              </tr>
            </tbody>
          </table>
          <table
            id="cricketScoreBoard"
            className="game-team"
            name="scoreBoard"
            style={{ display: "none" }}
          >
            <tbody>
              <tr>
                <th>
                  <a id="multiMarketPin" className="pin-off" href="#" />
                  <h4 id="teamHome">HOME</h4>
                  <h4 id="teamAway">AWAY</h4>
                  <ul id="time" className="scores-time">
                    <li id="description" />
                    <li id="currentDay" />
                  </ul>
                </th>
                <td
                  id="inningsBox1"
                  className="team-scores"
                  style={{ display: "none" }}
                >
                  <h4 id="runsHome" />
                  <h4 id="runsAway" />
                  <span id="inningsIndex">Innings 1</span>
                </td>
                <td
                  id="inningsBoxTemplate"
                  className="team-scores"
                  style={{ display: "none" }}
                >
                  <h4 id="runsHome" />
                  <h4 id="runsAway" />
                  <span id="inningsIndex" />
                </td>
                <td className="team-refresh">
                  <a id="refresh" className="refresh" href="#" />
                </td>
              </tr>
            </tbody>
          </table>
          <table
            id="tennisScoreBoard"
            className="game-team tennis"
            name="scoreBoard"
            style={{ display: "none" }}
          >
            <tbody>
              <tr>
                <th>
                  <a id="multiMarketPin" className="pin-off" href="#" />
                  <h4 id="teamHome" />
                  <h4 id="teamAway" />
                  <ul id="time" className="scores-time in-play">
                    <li id="currentSet" />
                    <li id="fullTimeElapsed" />
                    <li id="court" />
                  </ul>
                </th>
                <td id="setBox1" className="team-scores">
                  <h4 id="setHome">-</h4>
                  <h4 id="setAway">-</h4>
                  <span>1</span>
                </td>
                <td id="setBox2" className="team-scores">
                  <h4 id="setHome">-</h4>
                  <h4 id="setAway">-</h4>
                  <span>2</span>
                </td>
                <td id="setBox3" className="team-scores team-last_box">
                  <h4 id="setHome">-</h4>
                  <h4 id="setAway">-</h4>
                  <span>3</span>
                </td>
                <td id="points" className="team-scores team-last_box">
                  <h4 id="pointsHome" className="in-play">
                    0
                  </h4>
                  <h4 id="pointsAway" className="in-play">
                    0
                  </h4>
                  <span>Points</span>
                </td>
                <td id="aces" className="team-scores team-other">
                  <h4 id="acesHome">0</h4>
                  <h4 id="acesAway">0</h4>
                  <span>Aces</span>
                </td>
                <td id="faults" className="team-scores team-other">
                  <h4 id="faultsHome">0</h4>
                  <h4 id="faultsAway">0</h4>
                  <span>Faults</span>
                </td>
                <td
                  id="breaks"
                  className="team-scores team-other team-last_box"
                >
                  <h4 id="breaksHome">0</h4>
                  <h4 id="breaksAway">0</h4>
                  <span>Breaks</span>
                </td>
                <td className="team-refresh">
                  <a id="refresh" className="refresh" href="#" />
                </td>
                <td
                  id="setBoxTemplate"
                  className="team-scores"
                  style={{ display: "none" }}
                >
                  <h4 id="setHome">-</h4>
                  <h4 id="setAway">-</h4>
                  <span id="setIndex" />
                </td>
              </tr>
            </tbody>
          </table>
          <table
            id="soccerScoreBoard"
            className="game-team soccer"
            name="scoreBoard"
            style={{ display: "none" }}
          >
            <tbody>
              <tr>
                <th>
                  <a id="multiMarketPin" className="pin-off" href="#" />
                </th>
                <td className="team-scores team-last_box">
                  <h4 id="scoresHome" className="in-play" />
                  <h4 id="scoresAway" className="in-play" />
                  <span id="timeElapsed" />
                </td>
                <td>
                  <h4 id="teamHome" />
                  <h4 id="teamAway" />
                </td>
                <td className="team-refresh">
                  <a id="refresh" className="refresh" href="#" />
                </td>
              </tr>
              <tr>
                <td className="soccer-map" colSpan={4}>
                  <div className="bg-progress_bar">
                    <div
                      id="progressPercent"
                      className="progress_bar"
                      style={{ width: "0%" }}
                    />
                    <img
                      id="soccerEventTemplate"
                      className
                      style={{ left: "0%", display: "none" }}
                      src="https://statics3.skyexchange.xyz/images/mobile/transparent.gif"
                    />
                    <span
                      id="sumTemplate"
                      className="sum-status"
                      style={{ left: "0%", display: "none" }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            id="basketballScoreBoard"
            className="game-team tennis"
            name="scoreBoard"
            style={{ display: "none" }}
          >
            <tbody>
              <tr>
                <th>
                  <a id="multiMarketPin" className="pin-off" href="#" />
                  <h4 id="teamHome">HOME</h4>
                  <h4 id="teamAway">AWAY</h4>
                  <ul className="scores-time in-play">
                    <li id="matchStatus" />
                    <li id="timeElapsed" />
                  </ul>
                </th>
                <td id="period1" className="team-scores">
                  <h4 id="homeScore">-</h4>
                  <h4 id="awayScore">-</h4>
                  <span>1</span>
                </td>
                <td id="period2" className="team-scores">
                  <h4 id="homeScore">-</h4>
                  <h4 id="awayScore">-</h4>
                  <span>2</span>
                </td>
                <td id="period3" className="team-scores">
                  <h4 id="homeScore">-</h4>
                  <h4 id="awayScore">-</h4>
                  <span>3</span>
                </td>
                <td id="period4" className="team-scores team-last_box">
                  <h4 id="homeScore">-</h4>
                  <h4 id="awayScore">-</h4>
                  <span>4</span>
                </td>
                <td id="totalScore" className="team-scores team-last_box">
                  <h4 id="homeScore" className="in-play">
                    -
                  </h4>
                  <h4 id="awayScore" className="in-play">
                    -
                  </h4>
                  <span>Points</span>
                </td>
                <td className="team-refresh">
                  <a className="refresh" href="#">
                    Refresh
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="naviMarket"
          className="market-type ps ps--theme_default"
          data-ps-id="7e4d3a7b-ec36-ea2a-5465-dbbabbfac4c2"
        >
          <ul id="naviMarketList">
            <li id="naviMarketTemaplate" style={{ display: "none" }}>
              <a href="#" />
            </li>
            <li id="naviAllMarketTemaplate" style={{ display: "none" }}>
              <a href="#">
                All
                <span className="icon-arrow_down" />
              </a>
            </li>
            <li
              id="naviMarket_1_242027981"
              style={{ display: "list-item" }}
              className="select"
            >
              <a href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&eventId=34198163&marketId=1.242027981",true)'>
                Match Odds
              </a>
            </li>
          </ul>
          <div
            className="ps__scrollbar-x-rail"
            style={{ left: "0px", bottom: "0px" }}
          >
            <div
              className="ps__scrollbar-x"
              tabIndex={0}
              style={{ left: "0px", width: "0px" }}
            />
          </div>
          <div
            className="ps__scrollbar-y-rail"
            style={{ top: "0px", right: "0px" }}
          >
            <div
              className="ps__scrollbar-y"
              tabIndex={0}
              style={{ top: "0px", height: "0px" }}
            />
          </div>
        </div>
        <div
          id="plTableButton"
          className="pnl-wrap"
          style={{ display: "none" }}
        >
          <a id="openPlTable" className="btn-pnl-table" href="#">
            <img src="https://statics3.skyexchange.xyz/images/mobile/transparent.gif" />
            P&amp;L Table
          </a>
        </div>
        <div id="marketBetsWrap" className="bets-wrap asiahadicap disabled">
          <div
            id="minMaxBox"
            className="limit_info-popup"
            style={{ display: "none" }}
          >
            <a className="close">Close</a>
            <dl>
              <dt id="minMaxDt" style={{ display: "none" }}>
                Min / Max
              </dt>
              <dt id="maxDt" style={{}}>
                Max
              </dt>
              <dd id="minMaxInfo">4000</dd>
            </dl>
          </div>
          <a id="minMaxButton" style={{}} className="bet-limit" />
          <dl id="betsHead" className="bets-selections-head">
            <dt>
              <a className="a-depth" href="#" id="marketDepthBtn">
                Markets Depth
              </a>
              <p>
                <span>Matched</span>
                <strong id="totalMatched">PTE 1,008,115</strong>
              </p>
            </dt>
            <dd className="mode-land" />
            <dd className="mode-land" />
            <dd>Back</dd>
            <dd>Lay</dd>
            <dd className="mode-land" />
            <dd className="mode-land" />
          </dl>
          <dl
            id="selection_67868736_0_00"
            className="bets-selections"
            style={{ display: "flex" }}
          >
            <dt>
              <div
                id="horseInfo"
                className="horse-info"
                style={{ display: "none" }}
              >
                <ul id="horseBox" className="horse-box">
                  <li id="clothNumberAlpha" />
                  <li id="stallDraw" />
                </ul>
                <div id="uniform" className="uniform">
                  <img src />
                </div>
                <ul id="horseName" className="horse-name">
                  <li id="runnerName">Royal Challengers Bengaluru</li>
                  <li id="jockyName" />
                </ul>
              </div>
              <h4 id="runnerName">Royal Challengers Bengaluru</h4>
              <ul id="winLoss">
                <li
                  id="withoutBet"
                  className="lose"
                  style={{ display: "none" }}
                >
                  {" "}
                  0.00
                </li>
                <li
                  id="lossWithoutBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="withBet"
                  className="to-lose"
                  style={{ display: "none" }}
                >
                  {" "}
                  0.00
                </li>
                <li
                  id="lossWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroProfit"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroLiability"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroProfitWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroLiabilityWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
              </ul>
            </dt>
            <dd id="suspend" className="suspend" style={{ display: "none" }}>
              <p>Suspend</p>
            </dd>
            <dd id="closed" className="suspend" style={{ display: "none" }}>
              <p>Closed</p>
            </dd>
            <dd id="nonRunner" className="suspend" style={{ display: "none" }}>
              <p>Non Runner</p>
            </dd>
            <dd id="back_3" className="mode-land">
              <a className="back-3" href="#">
                1.81<span> 4,114</span>
              </a>
            </dd>
            <dd id="back_2" className="mode-land">
              <a className="back-2" href="#">
                1.82<span> 2,943</span>
              </a>
            </dd>
            <dd id="back_1">
              <a className="back-1" href="#">
                1.83<span> 2,852</span>
              </a>
            </dd>
            <dd id="lay_1">
              <a className="lay-1" href="#">
                1.84<span> 8,842</span>
              </a>
            </dd>
            <dd id="lay_2" className="mode-land">
              <a className="lay-2" href="#">
                1.85<span> 17,011</span>
              </a>
            </dd>
            <dd id="lay_3" className="mode-land">
              <a className="lay-3" href="#">
                1.86<span> 12,366</span>
              </a>
            </dd>
          </dl>
          <dl
            id="selection_22121561_0_00"
            className="bets-selections"
            style={{ display: "flex" }}
          >
            <dt>
              <div
                id="horseInfo"
                className="horse-info"
                style={{ display: "none" }}
              >
                <ul id="horseBox" className="horse-box">
                  <li id="clothNumberAlpha" />
                  <li id="stallDraw" />
                </ul>
                <div id="uniform" className="uniform">
                  <img src />
                </div>
                <ul id="horseName" className="horse-name">
                  <li id="runnerName">Delhi Capitals</li>
                  <li id="jockyName" />
                </ul>
              </div>
              <h4 id="runnerName">Delhi Capitals</h4>
              <ul id="winLoss">
                <li
                  id="withoutBet"
                  className="lose"
                  style={{ display: "none" }}
                >
                  {" "}
                  0.00
                </li>
                <li
                  id="lossWithoutBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="withBet"
                  className="to-lose"
                  style={{ display: "none" }}
                >
                  {" "}
                  0.00
                </li>
                <li
                  id="lossWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroProfit"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroLiability"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroProfitWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroLiabilityWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
              </ul>
            </dt>
            <dd id="suspend" className="suspend" style={{ display: "none" }}>
              <p>Suspend</p>
            </dd>
            <dd id="closed" className="suspend" style={{ display: "none" }}>
              <p>Closed</p>
            </dd>
            <dd id="nonRunner" className="suspend" style={{ display: "none" }}>
              <p>Non Runner</p>
            </dd>
            <dd id="back_3" className="mode-land">
              <a className="back-3" href="#">
                2.16<span> 25,062</span>
              </a>
            </dd>
            <dd id="back_2" className="mode-land">
              <a className="back-2" href="#">
                2.18<span> 8,948</span>
              </a>
            </dd>
            <dd id="back_1">
              <a className="back-1" href="#">
                2.2<span> 107</span>
              </a>
            </dd>
            <dd id="lay_1">
              <a className="lay-1" href="#">
                2.22<span> 5,189</span>
              </a>
            </dd>
            <dd id="lay_2" className="mode-land">
              <a className="lay-2" href="#">
                2.24<span> 3,466</span>
              </a>
            </dd>
            <dd id="lay_3" className="mode-land">
              <a className="lay-3 spark" href="#">
                2.26<span> 3,096</span>
              </a>
            </dd>
          </dl>
          <div id="noRace" className="no-data" style={{ display: "none" }}>
            <h3>This race has ended</h3>
            <p />
          </div>
          <dl
            id="selectionTemplate"
            className="bets-selections"
            style={{ display: "none" }}
          >
            <dt>
              <div
                id="horseInfo"
                className="horse-info"
                style={{ display: "none" }}
              >
                <ul id="horseBox" className="horse-box">
                  <li id="clothNumberAlpha" />
                  <li id="stallDraw" />
                </ul>
                <div id="uniform" className="uniform">
                  <img src />
                </div>
                <ul id="horseName" className="horse-name">
                  <li id="runnerName" />
                  <li id="jockyName" />
                </ul>
              </div>
              <h4 id="runnerName" />
              <ul id="winLoss">
                <li
                  id="withoutBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="lossWithoutBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li id="withBet" className="win" style={{ display: "none" }} />
                <li
                  id="lossWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroProfit"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroLiability"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroProfitWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="zeroLiabilityWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
              </ul>
            </dt>
            <dd id="suspend" className="suspend">
              <p>Suspend</p>
            </dd>
            <dd id="closed" className="suspend">
              <p>Closed</p>
            </dd>
            <dd id="nonRunner" className="suspend">
              <p>Non Runner</p>
            </dd>
            <dd id="back_3" className="mode-land">
              <a className="back-3" href="#">
                <span />
              </a>
            </dd>
            <dd id="back_2" className="mode-land">
              <a className="back-2" href="#">
                <span />
              </a>
            </dd>
            <dd id="back_1">
              <a className="back-1" href="#">
                <span />
              </a>
            </dd>
            <dd id="lay_1">
              <a className="lay-1" href="#">
                <span />
              </a>
            </dd>
            <dd id="lay_2" className="mode-land">
              <a className="lay-2" href="#">
                <span />
              </a>
            </dd>
            <dd id="lay_3" className="mode-land">
              <a className="lay-3" href="#">
                <span />
              </a>
            </dd>
          </dl>
          <div
            id="betBoardTemplate"
            className="bet_slip-wrap back"
            style={{ display: "none" }}
          >
            <div
              id="messageWrap"
              className="message-wrap"
              style={{ display: "none" }}
            >
              <div className="message">
                <h4 id="header">The Minimun stake is $25.00</h4>
                <p id="info">Your stake has been updated accordingly.</p>
              </div>
              <a id="close" className="close" href="#">
                Close
              </a>
            </div>
            <ul className="btn-list">
              <li>
                <p className="dynamic-min-bet">&nbsp;</p>
                <div id="inputOdds" className="input-num">
                  <a id="oddsDown" className="icon-minus" href="#" />
                  <span id="odds" className="typed" />
                  <a id="oddsUp" className="icon-plus" href="#" />
                </div>
              </li>
              <li>
                <p className="dynamic-min-bet">
                  Min Bet: <strong id="dynamicMinBet" />
                </p>
                <div id="inputStake" className="input-num">
                  <a id="stakeDown" className="icon-minus" href="#" />
                  <span id="stake" className="typed" />
                  <a id="stakeUp" className="icon-plus" href="#" />
                </div>
              </li>
            </ul>
            <ul id="stakePopupList" className="coin-list">
              <li>
                <a id="selectStake_1" href="#">
                  {" "}
                  4
                </a>
              </li>
              <li>
                <a id="selectStake_2" href="#">
                  {" "}
                  30
                </a>
              </li>
              <li>
                <a id="selectStake_3" href="#">
                  {" "}
                  50
                </a>
              </li>
              <li>
                <a id="selectStake_4" href="#">
                  {" "}
                  200
                </a>
              </li>
              <li>
                <a id="selectStake_5" href="#">
                  {" "}
                  500
                </a>
              </li>
              <li>
                <a id="selectStake_6" href="#">
                  {" "}
                  1000
                </a>
              </li>
            </ul>
            <div id="keyboard" className="keyboard-wrap">
              <ul id="numPad" className="btn-tel">
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">6</a>
                </li>
                <li>
                  <a href="#">7</a>
                </li>
                <li>
                  <a href="#">8</a>
                </li>
                <li>
                  <a href="#">9</a>
                </li>
                <li>
                  <a href="#">0</a>
                </li>
                <li>
                  <a href="#">00</a>
                </li>
                <li>
                  <a href="#">.</a>
                </li>
              </ul>
              <a id="delete" className="btn-delete" href="#" />
            </div>
            <ul className="btn-list">
              <li>
                <a id="cancel" href="#" className="btn">
                  Cancel
                </a>
              </li>
              <li>
                <a id="placeBet" href="#" className="btn-send disable">
                  Place Bet
                </a>
              </li>
            </ul>
            <div
              id="acceptAnyOddsBox"
              className="bet-setting"
              style={{ display: "none" }}
            >
              <a id="acceptAnyOdds" href="#" className="bet-check">
                Accept Any Odds
              </a>
              <span id="sportsBookMaxStake" style={{ display: "none" }}>
                <a id="getSportsBookMaxStakeBtn" className="max-bet" href="#">
                  Max
                </a>
              </span>
            </div>
          </div>
          {/* open bet_slip-wrap */}
          <div
            id="singleBetBoardTemplate"
            className="bet_slip-wrap back"
            style={{ display: "none" }}
          >
            <div
              id="messageWrap"
              className="message-wrap"
              style={{ display: "none" }}
            >
              <div className="message">
                <h4 id="header">The Minimun stake is $25.00</h4>
                <p id="info">Your stake has been updated accordingly.</p>
              </div>
              <a id="close" className="close" href="#">
                Close
              </a>
            </div>
            <ul className="btn-list btn-list-single">
              <li>
                <div className="input-num input-odds disable">
                  <span className="max-type" id="odds" />
                </div>
              </li>
              <li>
                <div id="inputStake" className="input-num">
                  <a id="stakeDown" className="icon-minus" href="#" />
                  <span id="stake" className="typed" />
                  <a id="stakeUp" className="icon-plus" href="#" />
                </div>
              </li>
            </ul>
            <ul id="stakePopupList" className="coin-list">
              <li>
                <a id="selectStake_1" href="#">
                  {" "}
                  4
                </a>
              </li>
              <li>
                <a id="selectStake_2" href="#">
                  {" "}
                  30
                </a>
              </li>
              <li>
                <a id="selectStake_3" href="#">
                  {" "}
                  50
                </a>
              </li>
              <li>
                <a id="selectStake_4" href="#">
                  {" "}
                  200
                </a>
              </li>
              <li>
                <a id="selectStake_5" href="#">
                  {" "}
                  500
                </a>
              </li>
              <li>
                <a id="selectStake_6" href="#">
                  {" "}
                  1000
                </a>
              </li>
            </ul>
            <div id="keyboard" className="keyboard-wrap">
              <ul id="numPad" className="btn-tel">
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">6</a>
                </li>
                <li>
                  <a href="#">7</a>
                </li>
                <li>
                  <a href="#">8</a>
                </li>
                <li>
                  <a href="#">9</a>
                </li>
                <li>
                  <a href="#">0</a>
                </li>
                <li>
                  <a href="#">00</a>
                </li>
                <li>
                  <a href="#">.</a>
                </li>
              </ul>
              <a id="delete" className="btn-delete" href="#" />
            </div>
            <ul className="btn-list">
              <li>
                <a id="cancel" href="#" className="btn">
                  Cancel
                </a>
              </li>
              <li>
                <a id="placeBet" href="#" className="btn-send disable">
                  Place Bet
                </a>
                <p id="totalStakeP" style={{ display: "none" }}>
                  Total Stake: <strong id="totalStake" />
                </p>
              </li>
            </ul>
          </div>
          {/* open bet_slip-wrap end */}
          {/* khadda */}
          <div
            id="khaddaBetBoardTemplate"
            className="bets-wrap fancy-bet khadda-bet"
            style={{ display: "none" }}
          >
            <div
              id="messageWrap"
              className="message-wrap"
              style={{ display: "none" }}
            >
              <div className="message">
                <h4 id="header">The Minimun stake is $25.00</h4>
                <p id="info">Your stake has been updated accordingly.</p>
              </div>
              <a id="close" className="close" href="#">
                Close
              </a>
            </div>
            {/* open bet_slip-wrap */}
            <div className="bet_slip-wrap back">
              <ul className="btn-list">
                <li className="runs-wrap">
                  <strong>Runs</strong>
                  <div id="inputRuns" className="input-num input-runs">
                    <span id="runs" className="typed" />
                    {/* typeing typed */}
                    <span id="extendedRuns" className="max-type" />
                  </div>
                </li>
                <li>
                  <div id="inputStake" className="input-num">
                    <a id="stakeDown" className="icon-minus" href="#" />
                    <span id="stake" className="typed" />
                    <a id="stakeUp" className="icon-plus" href="#" />
                  </div>
                </li>
              </ul>
              <ul id="stakePopupList" className="coin-list">
                <li>
                  <a id="selectStake_1" href="#">
                    {" "}
                    4
                  </a>
                </li>
                <li>
                  <a id="selectStake_2" href="#">
                    {" "}
                    30
                  </a>
                </li>
                <li>
                  <a id="selectStake_3" href="#">
                    {" "}
                    50
                  </a>
                </li>
                <li>
                  <a id="selectStake_4" href="#">
                    {" "}
                    200
                  </a>
                </li>
                <li>
                  <a id="selectStake_5" href="#">
                    {" "}
                    500
                  </a>
                </li>
                <li>
                  <a id="selectStake_6" href="#">
                    {" "}
                    1000
                  </a>
                </li>
              </ul>
              <div id="keyboard" className="keyboard-wrap">
                <ul id="numPad" className="btn-tel">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">8</a>
                  </li>
                  <li>
                    <a href="#">9</a>
                  </li>
                  <li>
                    <a href="#">0</a>
                  </li>
                  <li>
                    <a href="#">00</a>
                  </li>
                  <li>
                    <a href="#">.</a>
                  </li>
                </ul>
                <a id="delete" className="btn-delete" href="#" />
              </div>
              <ul className="btn-list">
                <li>
                  <a id="cancel" href="#" className="btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a id="placeBet" href="#" className="btn-send disable">
                    Place Bet
                  </a>
                </li>
              </ul>
            </div>
            {/* open bet_slip-wrap end */}
          </div>
          {/* khadda end */}
        </div>
        <div id="bookMakerWrap" style={{}}>
          <div id="bookMakerSpecialBet" className="bets-bookmaker">
            <h4>
              <a id="multiMarketPin" className="pin-off" href="#">
                Pin to Muilti Markets
              </a>
              <span>Bookmaker Market</span>
              <p>| Zero Commission</p>
            </h4>
          </div>
          <div id="bookMakerTempTable" style={{ display: "none" }}>
            <div
              id="bookMakerMarketTemplate"
              className="bets-wrap bets-bookmaker"
            >
              <h5>
                <span id="market-name" />
                <a href="#" id="openBookMakerInfo" className="btn-fancy_info" />
                <div id="bookMakerMinMax" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax" />
                  </dl>
                  <dl>
                    <dt id="rebateName">Rebate</dt>
                    <dd id="rebate" />
                  </dl>
                  <a
                    href="javascript:void();"
                    id="closeBookMakerInfo"
                    className="close"
                  >
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections-head">
                <dt />
                <dd className="mode-land" />
                <dd className="mode-land" />
                <dd>Back</dd>
                <dd>Lay</dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <dl id="bookMakerSelectionTemplate" className="bets-selections">
              <dt>
                <h4 id="runnerName" />
                <ul>
                  <li
                    id="before"
                    className="to-win"
                    style={{ display: "none" }}
                  />
                  <li
                    id="after"
                    className="to-lose"
                    style={{ display: "none" }}
                  />
                </ul>
              </dt>
              <dd id="suspend" className="suspend" style={{ display: "none" }}>
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd className="backlay_box">
                <dl className="back-gradient">
                  <dd id="back_3" className="mode-land">
                    <p />
                  </dd>
                  <dd id="back_2" className="mode-land">
                    <p />
                  </dd>
                  <dd id="back_1" className="spark">
                    <a href />
                  </dd>
                </dl>
                <dl className="lay-gradient">
                  <dd id="lay_1" className="spark">
                    <a href />
                  </dd>
                  <dd id="lay_2" className="mode-land">
                    <p />
                  </dd>
                  <dd id="lay_3" className="mode-land">
                    <p />
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
          <div
            id="bookMakerMarket_34198163_264782"
            className="bets-wrap bets-bookmaker"
            style={{ display: "block" }}
          >
            <h5>
              <span id="market-name">Bookmaker</span>
              <a href="#" id="openBookMakerInfo" className="btn-fancy_info" />
              <div id="bookMakerMinMax" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax"> 1.00 / 800.00</dd>
                </dl>
                <dl>
                  <dt id="rebateName" style={{ display: "none" }}>
                    Rebate
                  </dt>
                  <dd id="rebate" style={{ display: "none" }} />
                </dl>
                <a
                  href="javascript:void();"
                  id="closeBookMakerInfo"
                  className="close"
                >
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections-head">
              <dt />
              <dd className="mode-land" />
              <dd className="mode-land" />
              <dd>Back</dd>
              <dd>Lay</dd>
              <dd className="mode-land" />
              <dd className="mode-land" />
            </dl>
            <dl
              id="bookMakerSelection_34198163_264782_780210"
              className="bets-selections"
              style={{ display: "flex" }}
            >
              <dt>
                <h4 id="runnerName">Royal Challengers Bengaluru</h4>
                <ul>
                  <li
                    id="before"
                    className="to-win"
                    style={{ display: "none" }}
                  />
                  <li
                    id="after"
                    className="to-lose"
                    style={{ display: "list-item" }}
                  />
                </ul>
              </dt>
              <dd id="suspend" className style={{ display: "none" }}>
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd className="backlay_box">
                <dl className="back-gradient">
                  <dd id="back_3" className="mode-land select">
                    <p>80</p>
                  </dd>
                  <dd id="back_2" className="mode-land select">
                    <p>81</p>
                  </dd>
                  <dd id="back_1" className="select">
                    <a href>82</a>
                  </dd>
                </dl>
                <dl className="lay-gradient">
                  <dd id="lay_1" className>
                    <a href>86</a>
                  </dd>
                  <dd id="lay_2" className="mode-land">
                    <p>87</p>
                  </dd>
                  <dd id="lay_3" className="mode-land">
                    <p>88</p>
                  </dd>
                </dl>
              </dd>
            </dl>
            <div
              id="betBoard_34198163_264782_780210_1"
              className="bet_slip-wrap back"
              style={{ display: "block" }}
            >
              <div
                id="messageWrap"
                className="message-wrap"
                style={{ display: "none" }}
              >
                <div className="message">
                  <h4 id="header">The Minimun stake is $25.00</h4>
                  <p id="info">Your stake has been updated accordingly.</p>
                </div>
                <a id="close" className="close" href="#">
                  Close
                </a>
              </div>
              <ul className="btn-list">
                <li>
                  <p className="dynamic-min-bet">&nbsp;</p>
                  <div id="inputOdds" className="input-num disable">
                    <a
                      id="oddsDown"
                      className="icon-minus"
                      href="#"
                      style={{ display: "none" }}
                    />
                    <span id="odds" className="typed">
                      82
                    </span>
                    <a
                      id="oddsUp"
                      className="icon-plus"
                      href="#"
                      style={{ display: "none" }}
                    />
                  </div>
                </li>
                <li>
                  <p className="dynamic-min-bet">
                    Min Bet: <strong id="dynamicMinBet" />
                  </p>
                  <div id="inputStake" className="input-num input-stake">
                    <a id="stakeDown" className="icon-minus" href="#" />
                    <span id="stake" className="typed typeing" />
                    <a id="stakeUp" className="icon-plus" href="#" />
                  </div>
                </li>
              </ul>
              <ul id="stakePopupList" className="coin-list">
                <li>
                  <a id="selectStake_1" href="#">
                    {" "}
                    4
                  </a>
                </li>
                <li>
                  <a id="selectStake_2" href="#">
                    {" "}
                    30
                  </a>
                </li>
                <li>
                  <a id="selectStake_3" href="#">
                    {" "}
                    50
                  </a>
                </li>
                <li>
                  <a id="selectStake_4" href="#">
                    {" "}
                    200
                  </a>
                </li>
                <li>
                  <a id="selectStake_5" href="#">
                    {" "}
                    500
                  </a>
                </li>
                <li>
                  <a id="selectStake_6" href="#">
                    {" "}
                    1000
                  </a>
                </li>
              </ul>
              <div id="keyboard" className="keyboard-wrap">
                <ul id="numPad" className="btn-tel">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">8</a>
                  </li>
                  <li>
                    <a href="#">9</a>
                  </li>
                  <li>
                    <a href="#">0</a>
                  </li>
                  <li>
                    <a href="#">00</a>
                  </li>
                  <li>
                    <a href="#">.</a>
                  </li>
                </ul>
                <a id="delete" className="btn-delete" href="#" />
              </div>
              <ul className="btn-list">
                <li>
                  <a id="cancel" href="#" className="btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a id="placeBet" href="#" className="btn-send disable">
                    Place Bet
                  </a>
                </li>
              </ul>
              <div
                id="acceptAnyOddsBox"
                className="bet-setting"
                style={{ display: "flex" }}
              >
                <a id="acceptAnyOdds" href="#" className="bet-check checked">
                  Accept Any Odds
                </a>
                <span id="sportsBookMaxStake" style={{ display: "none" }}>
                  <a id="getSportsBookMaxStakeBtn" className="max-bet" href="#">
                    Max
                  </a>
                </span>
              </div>
            </div>
            <div
              id="betBoard_34198163_264782_780210_2"
              className="bet_slip-wrap lay"
              style={{ display: "none" }}
            >
              <div
                id="messageWrap"
                className="message-wrap"
                style={{ display: "none" }}
              >
                <div className="message">
                  <h4 id="header">The Minimun stake is $25.00</h4>
                  <p id="info">Your stake has been updated accordingly.</p>
                </div>
                <a id="close" className="close" href="#">
                  Close
                </a>
              </div>
              <ul className="btn-list">
                <li>
                  <p className="dynamic-min-bet">&nbsp;</p>
                  <div id="inputOdds" className="input-num disable">
                    <a
                      id="oddsDown"
                      className="icon-minus"
                      href="#"
                      style={{ display: "none" }}
                    />
                    <span id="odds" className="typed">
                      86
                    </span>
                    <a
                      id="oddsUp"
                      className="icon-plus"
                      href="#"
                      style={{ display: "none" }}
                    />
                  </div>
                </li>
                <li>
                  <p className="dynamic-min-bet">
                    Min Bet: <strong id="dynamicMinBet" />
                  </p>
                  <div id="inputStake" className="input-num input-stake">
                    <a id="stakeDown" className="icon-minus" href="#" />
                    <span id="stake" className="typed typeing" />
                    <a id="stakeUp" className="icon-plus" href="#" />
                  </div>
                </li>
              </ul>
              <ul id="stakePopupList" className="coin-list">
                <li>
                  <a id="selectStake_1" href="#">
                    {" "}
                    4
                  </a>
                </li>
                <li>
                  <a id="selectStake_2" href="#">
                    {" "}
                    30
                  </a>
                </li>
                <li>
                  <a id="selectStake_3" href="#">
                    {" "}
                    50
                  </a>
                </li>
                <li>
                  <a id="selectStake_4" href="#">
                    {" "}
                    200
                  </a>
                </li>
                <li>
                  <a id="selectStake_5" href="#">
                    {" "}
                    500
                  </a>
                </li>
                <li>
                  <a id="selectStake_6" href="#">
                    {" "}
                    1000
                  </a>
                </li>
              </ul>
              <div id="keyboard" className="keyboard-wrap">
                <ul id="numPad" className="btn-tel">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">8</a>
                  </li>
                  <li>
                    <a href="#">9</a>
                  </li>
                  <li>
                    <a href="#">0</a>
                  </li>
                  <li>
                    <a href="#">00</a>
                  </li>
                  <li>
                    <a href="#">.</a>
                  </li>
                </ul>
                <a id="delete" className="btn-delete" href="#" />
              </div>
              <ul className="btn-list">
                <li>
                  <a id="cancel" href="#" className="btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a id="placeBet" href="#" className="btn-send disable">
                    Place Bet
                  </a>
                </li>
              </ul>
              <div
                id="acceptAnyOddsBox"
                className="bet-setting"
                style={{ display: "flex" }}
              >
                <a id="acceptAnyOdds" href="#" className="bet-check checked">
                  Accept Any Odds
                </a>
                <span id="sportsBookMaxStake" style={{ display: "none" }}>
                  <a id="getSportsBookMaxStakeBtn" className="max-bet" href="#">
                    Max
                  </a>
                </span>
              </div>
            </div>
            <dl
              id="bookMakerSelection_34198163_264782_780211"
              className="bets-selections"
              style={{ display: "flex" }}
            >
              <dt>
                <h4 id="runnerName">Delhi Capitals</h4>
                <ul>
                  <li
                    id="before"
                    className="to-win"
                    style={{ display: "none" }}
                  />
                  <li
                    id="after"
                    className="to-lose"
                    style={{ display: "list-item" }}
                  />
                </ul>
              </dt>
              <dd id="suspend" className="suspend-fancy" style={{}}>
                <p id="info">Suspend</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd className="backlay_box">
                <dl className="back-gradient">
                  <dd id="back_3" className="mode-land">
                    <p />
                  </dd>
                  <dd id="back_2" className="mode-land">
                    <p />
                  </dd>
                  <dd id="back_1" className>
                    <a href />
                  </dd>
                </dl>
                <dl className="lay-gradient">
                  <dd id="lay_1" className>
                    <a href />
                  </dd>
                  <dd id="lay_2" className="mode-land">
                    <p />
                  </dd>
                  <dd id="lay_3" className="mode-land">
                    <p />
                  </dd>
                </dl>
              </dd>
            </dl>
          </div>
        </div>
        <div id="fancyBetTag" style={{ display: "none" }} />
        <div id="fancyBetTable_34198163" style={{}} name="multiMarketItem">
          <div id="fancyBetHead" className="fancy_bet-head" style={{}}>
            {/*a id="multiMarketPin" class="pin-off" href="#">Pin to Muilti Markets</a*/}
            <h4 className="in-play">
              <a id="multiMarketPin" className="pin-off" href="#">
                Pin to Muilti Markets
              </a>
              <span>
                <pre>in-play</pre>Fancy Bet
              </span>
              <a className="btn-head_rules">Rules</a>
            </h4>
            <a
              id="showSportsBookBtn"
              className="other-tab"
              style={{ display: "none" }}
            >
              <span className="tag-new">New</span>
              Premium Cricket
            </a>
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
            <div
              className="ps__scrollbar-x-rail"
              style={{ width: "360px", left: "0px", bottom: "0px" }}
            >
              <div
                className="ps__scrollbar-x"
                tabIndex={0}
                style={{ left: "0px", width: "353px" }}
              />
            </div>
            <div
              className="ps__scrollbar-y-rail"
              style={{ top: "0px", right: "0px" }}
            >
              <div
                className="ps__scrollbar-y"
                tabIndex={0}
                style={{ top: "0px", height: "0px" }}
              />
            </div>
          </div>
          <div
            id="noGameWrap"
            className="bets-wrap"
            style={{ display: "none" }}
          >
            <p className="no-game">
              Fancybet market will be available after Event at In-Play
            </p>
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
            <div
              id="fancyBetMarket_2183646"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">RCB Will Win The Toss Bhav</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183648"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Match 1st Over Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    7<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    8<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183651"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Match Only 2nd Over Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    9<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183654"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total 1st Over Run in Match Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    13<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    15<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183658"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">6 Over RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    55<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    57<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183660"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">10 Over RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    91<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    93<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183662"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">15 Over RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    137<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    139<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183664"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">20 Over RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    194<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    197<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183667"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">6 Over DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    54<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    56<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183670"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">10 Over DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    87<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    89<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183671"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">15 Over DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    132<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    134<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183672"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">20 Over DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    189<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    192<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183681"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Wkt RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    29<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    29<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183682"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Wkt DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    25<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    25<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183683"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st 2 Wkt RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    62<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    62<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183684"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st 2 Wkt DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    57<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    57<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183685"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st 3 Wkt RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    97<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    97<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183686"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st 3 Wkt DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    92<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    92<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183687"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st 4 Wkt RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    132<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    132<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183688"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st 4 Wkt DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    127<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    127<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183689"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Wkt RCB Run Bhav Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 391.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>7</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>4</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183690"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Wkt DC Run Bhav Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 391.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>7</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>4</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183691"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Wkt Pship Boundaries RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    5<span>115</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    5<span>85</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183692"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Wkt Pship Boundaries DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    4<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    5<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183693"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st WKT Lost To RCB Balls Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    19<span>115</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    19<span>95</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183694"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st WKT Lost To DC Balls Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    17<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    17<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183695"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Kohli Runs Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    34<span>105</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    34<span>85</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183696"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">P Salt Runs Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    22<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    22<span>105</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183697"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">KL Rahul Runs Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    32<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    32<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183698"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">McGurk Runs Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    17<span>115</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    17<span>95</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183699"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Kohli Run Bhav Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 391.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>6</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>3</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183700"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">P Salt Run Bhav Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 391.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>8</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>5</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183701"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">KL Rahul Run Bhav Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 391.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>6</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>3</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183702"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">McGurk Run Bhav Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 391.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>9</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>6</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183703"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Kohli Boundaries Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    5<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    6<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183704"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">P Salt Boundaries Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    4<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    5<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183706"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">KL Rahul Boundaries Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    4<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    5<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183709"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">McGurk Boundaries Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    3<span>115</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    3<span>85</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183711"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">H.M.B Face By Kohli Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    22<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    22<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183714"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">H.M.B Face By P Salt Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    13<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    13<span>105</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183717"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">H.M.B Face By KL Rahul Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    22<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    22<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183720"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">H.M.B Face By McGurk Open Valid</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    11<span>110</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    11<span>90</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183731"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Four Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    30<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    32<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183732"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Six Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    18<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    20<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183733"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Boundaries Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    49<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    51<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183734"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Wkt Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    13<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    14<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183736"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  3 WKT OR MORE BY BOWLER IN MATCH ADV
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    3<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    4<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183738"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Caught Out Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    9<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183740"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match LBW Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183742"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Bowled Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    3<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183744"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Run Out Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183746"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Wide Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    12<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183747"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Extra Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    17<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    19<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183748"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Highest Run In Over Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    21<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    22<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183750"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Top Scoring Batsman Runs Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    73<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    75<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183752"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Playing Over Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    39<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    40<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183754"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Fifty Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    3<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183755"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match 30s Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    3<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    4<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183757"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Duckouts Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183759"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Highest Pship Runs Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    78<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    83<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183761"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Highest Pship Balls in Match Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    46<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    48<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183762"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Highest Pship Boundaries Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    12<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183763"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  Total Players Facing 25 Plus Balls Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    3<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    4<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183765"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Most Balls Faced By a Batsman Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    42<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    44<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183767"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Most Runs Given by a Bowler Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    48<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    51<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183769"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  Total Bowlers Giving 30 Plus Runs Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    6<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    7<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183771"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Wicket Takers adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    8<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    8<span>75</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183773"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  Most 4s By One Batter in a Match Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    8<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    8<span>75</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183774"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  Most 6s By One Batter in a Match Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    5<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    5<span>75</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183776"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total No Boundaries Overs Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    12<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    14<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183778"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Four Hitters Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    12<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183779"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Total Match Six Hitters Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    8<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    9<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183800"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Wkts RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    7<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    7<span>75</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183802"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Extras RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    8<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183803"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Dot Balls RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    34<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    36<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183805"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Fours RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    15<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    17<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183806"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Sixes RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    11<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    11<span>75</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183808"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Caught Outs RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    5<span>125</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    5<span>75</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183810"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Bowled RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183812"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total 30s RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183813"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Fifty RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183817"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  1st Inn Total Double Digit Score RCB Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    5<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    6<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183818"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  1st Inn Highest Score In Over RCB Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    21<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    22<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183819"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Highest Pship Runs RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    72<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    77<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183821"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Highest Pship Balls RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    43<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    45<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183822"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Top Scoring Batsman RCB Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    67<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    69<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183785"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Wkts DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    7<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    8<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183788"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Extras DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    8<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183789"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Dot Balls DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    33<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    35<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183790"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Fours DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    15<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    17<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183791"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Sixes DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    9<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    10<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183792"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Caught Outs DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    5<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    6<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183793"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Bowled DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183794"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total 30s DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183795"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Total Fifty DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    2<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183823"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  1st Inn Total Double Digit Score DC Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-win"
                        style={{ display: "none" }}
                      >
                        {" "}
                        0.00
                      </span>
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    5<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    6<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="betBoard_34198163_2183823_1"
              className="bet_slip-wrap back"
              style={{ display: "none" }}
            >
              <div
                id="messageWrap"
                className="message-wrap"
                style={{ display: "none" }}
              >
                <div className="message">
                  <h4 id="header">The Minimun stake is $25.00</h4>
                  <p id="info">Your stake has been updated accordingly.</p>
                </div>
                <a id="close" className="close" href="#">
                  Close
                </a>
              </div>
              <ul className="btn-list">
                <li>
                  <p className="dynamic-min-bet">&nbsp;</p>
                  <div id="inputOdds" className="input-num disable">
                    <a
                      id="oddsDown"
                      className="icon-minus"
                      href="#"
                      style={{ display: "none" }}
                    />
                    <span id="odds" className="typed">
                      6 / 100
                    </span>
                    <a
                      id="oddsUp"
                      className="icon-plus"
                      href="#"
                      style={{ display: "none" }}
                    />
                  </div>
                </li>
                <li>
                  <p className="dynamic-min-bet">
                    Min Bet: <strong id="dynamicMinBet" />
                  </p>
                  <div id="inputStake" className="input-num input-stake">
                    <a id="stakeDown" className="icon-minus" href="#" />
                    <span id="stake" className="typed typeing" />
                    <a id="stakeUp" className="icon-plus" href="#" />
                  </div>
                </li>
              </ul>
              <ul id="stakePopupList" className="coin-list">
                <li>
                  <a id="selectStake_1" href="#">
                    {" "}
                    4
                  </a>
                </li>
                <li>
                  <a id="selectStake_2" href="#">
                    {" "}
                    30
                  </a>
                </li>
                <li>
                  <a id="selectStake_3" href="#">
                    {" "}
                    50
                  </a>
                </li>
                <li>
                  <a id="selectStake_4" href="#">
                    {" "}
                    200
                  </a>
                </li>
                <li>
                  <a id="selectStake_5" href="#">
                    {" "}
                    500
                  </a>
                </li>
                <li>
                  <a id="selectStake_6" href="#">
                    {" "}
                    1000
                  </a>
                </li>
              </ul>
              <div id="keyboard" className="keyboard-wrap">
                <ul id="numPad" className="btn-tel">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">8</a>
                  </li>
                  <li>
                    <a href="#">9</a>
                  </li>
                  <li>
                    <a href="#">0</a>
                  </li>
                  <li>
                    <a href="#">00</a>
                  </li>
                  <li>
                    <a href="#">.</a>
                  </li>
                </ul>
                <a id="delete" className="btn-delete" href="#" />
              </div>
              <ul className="btn-list">
                <li>
                  <a id="cancel" href="#" className="btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a id="placeBet" href="#" className="btn-send disable">
                    Place Bet
                  </a>
                </li>
              </ul>
              <div
                id="acceptAnyOddsBox"
                className="bet-setting"
                style={{ display: "flex" }}
              >
                <a id="acceptAnyOdds" href="#" className="bet-check checked">
                  Accept Any Odds
                </a>
                <span id="sportsBookMaxStake" style={{ display: "none" }}>
                  <a id="getSportsBookMaxStakeBtn" className="max-bet" href="#">
                    Max
                  </a>
                </span>
              </div>
            </div>
            <div
              id="betBoard_34198163_2183823_2"
              className="bet_slip-wrap lay"
              style={{ display: "none" }}
            >
              <div
                id="messageWrap"
                className="message-wrap"
                style={{ display: "none" }}
              >
                <div className="message">
                  <h4 id="header">The Minimun stake is $25.00</h4>
                  <p id="info">Your stake has been updated accordingly.</p>
                </div>
                <a id="close" className="close" href="#">
                  Close
                </a>
              </div>
              <ul className="btn-list">
                <li>
                  <p className="dynamic-min-bet">&nbsp;</p>
                  <div id="inputOdds" className="input-num disable">
                    <a
                      id="oddsDown"
                      className="icon-minus"
                      href="#"
                      style={{ display: "none" }}
                    />
                    <span id="odds" className="typed">
                      5 / 100
                    </span>
                    <a
                      id="oddsUp"
                      className="icon-plus"
                      href="#"
                      style={{ display: "none" }}
                    />
                  </div>
                </li>
                <li>
                  <p className="dynamic-min-bet">
                    Min Bet: <strong id="dynamicMinBet" />
                  </p>
                  <div id="inputStake" className="input-num input-stake">
                    <a id="stakeDown" className="icon-minus" href="#" />
                    <span id="stake" className="typed typeing" />
                    <a id="stakeUp" className="icon-plus" href="#" />
                  </div>
                </li>
              </ul>
              <ul id="stakePopupList" className="coin-list">
                <li>
                  <a id="selectStake_1" href="#">
                    {" "}
                    4
                  </a>
                </li>
                <li>
                  <a id="selectStake_2" href="#">
                    {" "}
                    30
                  </a>
                </li>
                <li>
                  <a id="selectStake_3" href="#">
                    {" "}
                    50
                  </a>
                </li>
                <li>
                  <a id="selectStake_4" href="#">
                    {" "}
                    200
                  </a>
                </li>
                <li>
                  <a id="selectStake_5" href="#">
                    {" "}
                    500
                  </a>
                </li>
                <li>
                  <a id="selectStake_6" href="#">
                    {" "}
                    1000
                  </a>
                </li>
              </ul>
              <div id="keyboard" className="keyboard-wrap">
                <ul id="numPad" className="btn-tel">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li>
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">8</a>
                  </li>
                  <li>
                    <a href="#">9</a>
                  </li>
                  <li>
                    <a href="#">0</a>
                  </li>
                  <li>
                    <a href="#">00</a>
                  </li>
                  <li>
                    <a href="#">.</a>
                  </li>
                </ul>
                <a id="delete" className="btn-delete" href="#" />
              </div>
              <ul className="btn-list">
                <li>
                  <a id="cancel" href="#" className="btn">
                    Cancel
                  </a>
                </li>
                <li>
                  <a id="placeBet" href="#" className="btn-send disable">
                    Place Bet
                  </a>
                </li>
              </ul>
              <div
                id="acceptAnyOddsBox"
                className="bet-setting"
                style={{ display: "flex" }}
              >
                <a id="acceptAnyOdds" href="#" className="bet-check checked">
                  Accept Any Odds
                </a>
                <span id="sportsBookMaxStake" style={{ display: "none" }}>
                  <a id="getSportsBookMaxStakeBtn" className="max-bet" href="#">
                    Max
                  </a>
                </span>
              </div>
            </div>
            <div
              id="fancyBetMarket_2183824"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  1st Inn Highest Score In Over DC Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    21<span>115</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    21<span>85</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183825"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Highest Pship Runs DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    68<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    73<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183826"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Highest Pship Balls DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    41<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    43<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183827"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st Inn Top Scoring Batsman DC Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    64<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    66<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183829"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  2 Over Runs Session Hazlewood (RCB) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    15<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    17<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183830"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  4 Over Runs Session Hazlewood (RCB) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    35<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    37<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183831"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  2 Over Runs Session Bhuvneshwar (RCB)Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    14<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    16<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183832"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  4 Over Runs Session Bhuvneshwar (RCB)Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    32<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    34<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183833"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  2 Over Runs Session Y Dayal (RCB) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    18<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    20<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183834"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  4 Over Runs Session Y Dayal (RCB) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    37<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    39<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183835"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  2 Over Runs Session M Starc (DC) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    18<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    20<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183836"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  4 Over Runs Session M Starc (DC) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    36<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    38<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183837"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  2 Over Runs Session A Patel (DC) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    15<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    17<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183838"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  4 Over Runs Session A Patel (DC) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    32<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    34<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183839"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  2 Over Runs Session Kuldeep (DC) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    14<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    16<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183840"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  4 Over Runs Session Kuldeep (DC) Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    28<span>100</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    30<span>100</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183841"
              className="bets-wrap fancy-bet khadda-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">20 OVER KHADDA RCB ADV + 31 runs</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 3,906.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    100<span>odds</span>
                  </a>
                </dd>
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183842"
              className="bets-wrap fancy-bet khadda-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">20 OVER KHADDA DC ADV + 31 runs</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 3,906.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    100<span>odds</span>
                  </a>
                </dd>
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183843"
              className="bets-wrap fancy-bet lottery-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 6 Over Lottery Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="lottery-tips">
                  <h4>Runs</h4>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lotteryBall">
                  <a className="lottery-ball" id="lotteryNo_0">
                    0
                  </a>{" "}
                  {/* spark select */}
                  <a className="lottery-ball" id="lotteryNo_1">
                    1
                  </a>
                  <a className="lottery-ball" id="lotteryNo_2">
                    2
                  </a>
                  <a className="lottery-ball" id="lotteryNo_3">
                    3
                  </a>
                  <a className="lottery-ball" id="lotteryNo_4">
                    4
                  </a>
                  <a className="lottery-ball" id="lotteryNo_5">
                    5
                  </a>
                  <a className="lottery-ball" id="lotteryNo_6">
                    6
                  </a>
                  <a className="lottery-ball" id="lotteryNo_7">
                    7
                  </a>
                  <a className="lottery-ball" id="lotteryNo_8">
                    8
                  </a>
                  <a className="lottery-ball" id="lotteryNo_9">
                    9
                  </a>
                </dd>
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183844"
              className="bets-wrap fancy-bet lottery-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 10 Over Lottery Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="lottery-tips">
                  <h4>Runs</h4>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lotteryBall">
                  <a className="lottery-ball" id="lotteryNo_0">
                    0
                  </a>{" "}
                  {/* spark select */}
                  <a className="lottery-ball" id="lotteryNo_1">
                    1
                  </a>
                  <a className="lottery-ball" id="lotteryNo_2">
                    2
                  </a>
                  <a className="lottery-ball" id="lotteryNo_3">
                    3
                  </a>
                  <a className="lottery-ball" id="lotteryNo_4">
                    4
                  </a>
                  <a className="lottery-ball" id="lotteryNo_5">
                    5
                  </a>
                  <a className="lottery-ball" id="lotteryNo_6">
                    6
                  </a>
                  <a className="lottery-ball" id="lotteryNo_7">
                    7
                  </a>
                  <a className="lottery-ball" id="lotteryNo_8">
                    8
                  </a>
                  <a className="lottery-ball" id="lotteryNo_9">
                    9
                  </a>
                </dd>
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183845"
              className="bets-wrap fancy-bet lottery-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 15 Over Lottery Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="lottery-tips">
                  <h4>Runs</h4>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lotteryBall">
                  <a className="lottery-ball" id="lotteryNo_0">
                    0
                  </a>{" "}
                  {/* spark select */}
                  <a className="lottery-ball" id="lotteryNo_1">
                    1
                  </a>
                  <a className="lottery-ball" id="lotteryNo_2">
                    2
                  </a>
                  <a className="lottery-ball" id="lotteryNo_3">
                    3
                  </a>
                  <a className="lottery-ball" id="lotteryNo_4">
                    4
                  </a>
                  <a className="lottery-ball" id="lotteryNo_5">
                    5
                  </a>
                  <a className="lottery-ball" id="lotteryNo_6">
                    6
                  </a>
                  <a className="lottery-ball" id="lotteryNo_7">
                    7
                  </a>
                  <a className="lottery-ball" id="lotteryNo_8">
                    8
                  </a>
                  <a className="lottery-ball" id="lotteryNo_9">
                    9
                  </a>
                </dd>
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183846"
              className="bets-wrap fancy-bet lottery-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 20 Over Lottery Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="lottery-tips">
                  <h4>Runs</h4>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lotteryBall">
                  <a className="lottery-ball" id="lotteryNo_0">
                    0
                  </a>{" "}
                  {/* spark select */}
                  <a className="lottery-ball" id="lotteryNo_1">
                    1
                  </a>
                  <a className="lottery-ball" id="lotteryNo_2">
                    2
                  </a>
                  <a className="lottery-ball" id="lotteryNo_3">
                    3
                  </a>
                  <a className="lottery-ball" id="lotteryNo_4">
                    4
                  </a>
                  <a className="lottery-ball" id="lotteryNo_5">
                    5
                  </a>
                  <a className="lottery-ball" id="lotteryNo_6">
                    6
                  </a>
                  <a className="lottery-ball" id="lotteryNo_7">
                    7
                  </a>
                  <a className="lottery-ball" id="lotteryNo_8">
                    8
                  </a>
                  <a className="lottery-ball" id="lotteryNo_9">
                    9
                  </a>
                </dd>
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183847"
              className="bets-wrap fancy-bet lottery-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">2nd INNINGS 6 Over Lottery Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="lottery-tips">
                  <h4>Runs</h4>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lotteryBall">
                  <a className="lottery-ball" id="lotteryNo_0">
                    0
                  </a>{" "}
                  {/* spark select */}
                  <a className="lottery-ball" id="lotteryNo_1">
                    1
                  </a>
                  <a className="lottery-ball" id="lotteryNo_2">
                    2
                  </a>
                  <a className="lottery-ball" id="lotteryNo_3">
                    3
                  </a>
                  <a className="lottery-ball" id="lotteryNo_4">
                    4
                  </a>
                  <a className="lottery-ball" id="lotteryNo_5">
                    5
                  </a>
                  <a className="lottery-ball" id="lotteryNo_6">
                    6
                  </a>
                  <a className="lottery-ball" id="lotteryNo_7">
                    7
                  </a>
                  <a className="lottery-ball" id="lotteryNo_8">
                    8
                  </a>
                  <a className="lottery-ball" id="lotteryNo_9">
                    9
                  </a>
                </dd>
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183848"
              className="bets-wrap fancy-bet lottery-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">2nd INNINGS 10 Over Lottery Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="lottery-tips">
                  <h4>Runs</h4>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lotteryBall">
                  <a className="lottery-ball" id="lotteryNo_0">
                    0
                  </a>{" "}
                  {/* spark select */}
                  <a className="lottery-ball" id="lotteryNo_1">
                    1
                  </a>
                  <a className="lottery-ball" id="lotteryNo_2">
                    2
                  </a>
                  <a className="lottery-ball" id="lotteryNo_3">
                    3
                  </a>
                  <a className="lottery-ball" id="lotteryNo_4">
                    4
                  </a>
                  <a className="lottery-ball" id="lotteryNo_5">
                    5
                  </a>
                  <a className="lottery-ball" id="lotteryNo_6">
                    6
                  </a>
                  <a className="lottery-ball" id="lotteryNo_7">
                    7
                  </a>
                  <a className="lottery-ball" id="lotteryNo_8">
                    8
                  </a>
                  <a className="lottery-ball" id="lotteryNo_9">
                    9
                  </a>
                </dd>
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183849"
              className="bets-wrap fancy-bet lottery-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">Top Scoring Batsman Run Lottery Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 195.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="lottery-tips">
                  <h4>Runs</h4>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                  </dl>
                </dt>
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lotteryBall">
                  <a className="lottery-ball" id="lotteryNo_0">
                    0
                  </a>{" "}
                  {/* spark select */}
                  <a className="lottery-ball" id="lotteryNo_1">
                    1
                  </a>
                  <a className="lottery-ball" id="lotteryNo_2">
                    2
                  </a>
                  <a className="lottery-ball" id="lotteryNo_3">
                    3
                  </a>
                  <a className="lottery-ball" id="lotteryNo_4">
                    4
                  </a>
                  <a className="lottery-ball" id="lotteryNo_5">
                    5
                  </a>
                  <a className="lottery-ball" id="lotteryNo_6">
                    6
                  </a>
                  <a className="lottery-ball" id="lotteryNo_7">
                    7
                  </a>
                  <a className="lottery-ball" id="lotteryNo_8">
                    8
                  </a>
                  <a className="lottery-ball" id="lotteryNo_9">
                    9
                  </a>
                </dd>
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183850"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 6 Over Total ODD Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>102</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>98</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183851"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 10 Over Total ODD Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>102</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>98</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183852"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 15 Over Total ODD Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>102</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>98</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183853"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">1st INNINGS 20 Over Total ODD Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>102</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>98</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183854"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">2nd INNINGS 6 Over Total ODD Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>102</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>98</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183855"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">2nd INNINGS 10 Over Total ODD Adv</span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>102</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>98</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
            <div
              id="fancyBetMarket_2183856"
              className="bets-wrap fancy-bet"
              style={{}}
            >
              <h5>
                <span id="marketName">
                  Top Scoring Batsman Total Run Odd @1 Adv
                </span>
                <a href="#" id="open-fancy_info" className="btn-fancy_info">
                  fancybet info
                </a>
                <div id="fancy_popup2" className="fancy_info-popup">
                  <dl>
                    <dt>Min / Max</dt>
                    <dd id="minMax"> 1.00 / 781.00</dd>
                  </dl>
                  <dl>
                    <dt id="rebateName" style={{ display: "none" }}>
                      Rebate
                    </dt>
                    <dd id="rebate" style={{ display: "none" }} />
                  </dl>
                  <a href="#" id="close-fancy_info" className="close">
                    Close
                  </a>
                </div>
              </h5>
              <dl className="bets-selections">
                <dt className="line_market-selection">
                  <dl className="tips">
                    <dt>
                      <span
                        id="before"
                        className="win"
                        style={{ display: "none" }}
                      />
                      <span
                        id="after"
                        className="to-lose"
                        style={{ display: "none" }}
                      />
                    </dt>
                    <dd id="remarkFirstRow" style={{ display: "none" }} />
                    <dd id="remarkSecondRow" style={{ display: "none" }} />
                  </dl>
                  <a
                    id="fancyBetBookBtn"
                    href="#"
                    className="btn-book"
                    style={{ display: "none" }}
                  >
                    Book
                  </a>
                </dt>
                {/* Suspend for Fancy Bet */}
                <dd
                  id="suspend"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info">Ball Running</p>
                </dd>
                <dd
                  id="delayBetting"
                  className="suspend-fancy"
                  style={{ display: "none" }}
                >
                  <p id="info" />
                </dd>
                <dd id="lay_1">
                  <a className="lay-1" href="#">
                    1<span>102</span>
                  </a>
                </dd>
                <dd id="back_1">
                  <a className="back-1" href="#">
                    1<span>98</span>
                  </a>
                </dd>
                <dd className="mode-land" />
                <dd className="mode-land" />
              </dl>
            </div>
          </div>
          <div
            id="fancyBetWrap"
            className="bets-wrap fancy-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt className="line_market-selection">
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                  <dd id="remarkFirstRow" style={{ display: "none" }} />
                  <dd id="remarkSecondRow" style={{ display: "none" }} />
                </dl>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
              </dt>
              {/* Suspend for Fancy Bet */}
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd id="lay_1">
                <a className="lay-1" href="#">
                  <span />
                </a>
              </dd>
              <dd id="back_1">
                <a className="back-1" href="#">
                  <span />
                </a>
              </dd>
              <dd className="mode-land" />
              <dd className="mode-land" />
            </dl>
          </div>
          {/* Lottery */}
          <div
            id="fancyBetLotteryWrap"
            className="bets-wrap fancy-bet lottery-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt className="lottery-tips">
                <h4>Runs</h4>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                </dl>
              </dt>
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd id="lotteryBall">
                <a className="lottery-ball" id="lotteryNo_0">
                  0
                </a>{" "}
                {/* spark select */}
                <a className="lottery-ball" id="lotteryNo_1">
                  1
                </a>
                <a className="lottery-ball" id="lotteryNo_2">
                  2
                </a>
                <a className="lottery-ball" id="lotteryNo_3">
                  3
                </a>
                <a className="lottery-ball" id="lotteryNo_4">
                  4
                </a>
                <a className="lottery-ball" id="lotteryNo_5">
                  5
                </a>
                <a className="lottery-ball" id="lotteryNo_6">
                  6
                </a>
                <a className="lottery-ball" id="lotteryNo_7">
                  7
                </a>
                <a className="lottery-ball" id="lotteryNo_8">
                  8
                </a>
                <a className="lottery-ball" id="lotteryNo_9">
                  9
                </a>
              </dd>
            </dl>
          </div>
          {/* Lottery end */}
          {/* khadda */}
          <div
            id="fancyBetKhaddaWrap"
            className="bets-wrap fancy-bet khadda-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt>
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                </dl>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
              </dt>
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd id="back_1">
                <a className="back-1" href="#">
                  <span>odds</span>
                </a>
              </dd>
              <dd className="mode-land" />
            </dl>
          </div>
          {/* khadda end */}
          {/* multi selection for fancybet */}
          <div
            id="fancyBetThreeSelectionsWrap"
            className="bets-wrap fancy-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt>
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                  <dd id="remarkFirstRow" style={{ display: "none" }} />
                  <dd id="remarkSecondRow" style={{ display: "none" }} />
                </dl>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
              </dt>
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd className="select-more">
                <a id="lay_1" className="lay-1" href="#">
                  {" "}
                  {/* spark select */}
                  <span />
                </a>
                <a id="back_1" className="back-1" href="#">
                  <span />
                </a>
                <a id="lay_2" className="lay-1" href="#">
                  {" "}
                  {/* spark select */}
                  <span />
                </a>
                <a id="back_2" className="back-1" href="#">
                  <span />
                </a>
                <a id="lay_3" className="lay-1" href="#">
                  {" "}
                  {/* spark select */}
                  <span />
                </a>
                <a id="back_3" className="back-1" href="#">
                  <span />
                </a>
              </dd>
              <dd className="mode-land" />
              <dd className="mode-land" />
            </dl>
          </div>
          {/* multi selection for fancybet end */}
        </div>
        <div id="fancyBetTableTemplate" style={{ display: "none" }}>
          <div
            id="fancyBetHead"
            className="fancy_bet-head"
            style={{ display: "none" }}
          >
            {/*a id="multiMarketPin" class="pin-off" href="#">Pin to Muilti Markets</a*/}
            <h4 className="in-play">
              <a id="multiMarketPin" className="pin-off" href="#">
                Pin to Muilti Markets
              </a>
              <span>Fancy Bet</span>
              <a className="btn-head_rules">Rules</a>
            </h4>
          </div>
          <div
            id="fancyBetTabWrap"
            className="fancy_bet_tab-wrap"
            style={{ display: "none" }}
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
          <div
            id="noGameWrap"
            className="bets-wrap"
            style={{ display: "none" }}
          >
            <p className="no-game">
              Fancybet market will be available after Event at In-Play
            </p>
          </div>
          <div
            id="fancyBetField"
            className="bets-wrap fancy-bet"
            style={{ display: "none" }}
          >
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
          <div id="fancyBetTag" />
          <div
            id="fancyBetWrap"
            className="bets-wrap fancy-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt className="line_market-selection">
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                  <dd id="remarkFirstRow" style={{ display: "none" }} />
                  <dd id="remarkSecondRow" style={{ display: "none" }} />
                </dl>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
              </dt>
              {/* Suspend for Fancy Bet */}
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd id="lay_1">
                <a className="lay-1" href="#">
                  <span />
                </a>
              </dd>
              <dd id="back_1">
                <a className="back-1" href="#">
                  <span />
                </a>
              </dd>
              <dd className="mode-land" />
              <dd className="mode-land" />
            </dl>
          </div>
          {/* Lottery */}
          <div
            id="fancyBetLotteryWrap"
            className="bets-wrap fancy-bet lottery-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt className="lottery-tips">
                <h4>Runs</h4>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                </dl>
              </dt>
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd id="lotteryBall">
                <a className="lottery-ball" id="lotteryNo_0">
                  0
                </a>{" "}
                {/* spark select */}
                <a className="lottery-ball" id="lotteryNo_1">
                  1
                </a>
                <a className="lottery-ball" id="lotteryNo_2">
                  2
                </a>
                <a className="lottery-ball" id="lotteryNo_3">
                  3
                </a>
                <a className="lottery-ball" id="lotteryNo_4">
                  4
                </a>
                <a className="lottery-ball" id="lotteryNo_5">
                  5
                </a>
                <a className="lottery-ball" id="lotteryNo_6">
                  6
                </a>
                <a className="lottery-ball" id="lotteryNo_7">
                  7
                </a>
                <a className="lottery-ball" id="lotteryNo_8">
                  8
                </a>
                <a className="lottery-ball" id="lotteryNo_9">
                  9
                </a>
              </dd>
            </dl>
          </div>
          {/* Lottery end */}
          {/* khadda */}
          <div
            id="fancyBetKhaddaWrap"
            className="bets-wrap fancy-bet khadda-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt>
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                </dl>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
              </dt>
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd id="back_1">
                <a className="back-1" href="#">
                  <span>odds</span>
                </a>
              </dd>
              <dd className="mode-land" />
            </dl>
          </div>
          {/* khadda end */}
          {/* multi selection for fancybet */}
          <div
            id="fancyBetThreeSelectionsWrap"
            className="bets-wrap fancy-bet"
            style={{ display: "none" }}
          >
            <h5>
              <span id="marketName" />
              <a href="#" id="open-fancy_info" className="btn-fancy_info">
                fancybet info
              </a>
              <div id="fancy_popup2" className="fancy_info-popup">
                <dl>
                  <dt>Min / Max</dt>
                  <dd id="minMax" />
                </dl>
                <dl>
                  <dt id="rebateName">Rebate</dt>
                  <dd id="rebate" />
                </dl>
                <a href="#" id="close-fancy_info" className="close">
                  Close
                </a>
              </div>
            </h5>
            <dl className="bets-selections">
              <dt>
                <dl className="tips">
                  <dt>
                    <span
                      id="before"
                      className="win"
                      style={{ display: "none" }}
                    />
                    <span
                      id="after"
                      className="to-lose"
                      style={{ display: "none" }}
                    />
                  </dt>
                  <dd id="remarkFirstRow" style={{ display: "none" }} />
                  <dd id="remarkSecondRow" style={{ display: "none" }} />
                </dl>
                <a
                  id="fancyBetBookBtn"
                  href="#"
                  className="btn-book"
                  style={{ display: "none" }}
                >
                  Book
                </a>
              </dt>
              <dd
                id="suspend"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info">Ball Running</p>
              </dd>
              <dd
                id="delayBetting"
                className="suspend-fancy"
                style={{ display: "none" }}
              >
                <p id="info" />
              </dd>
              <dd className="select-more">
                <a id="lay_1" className="lay-1" href="#">
                  {" "}
                  {/* spark select */}
                  <span />
                </a>
                <a id="back_1" className="back-1" href="#">
                  <span />
                </a>
                <a id="lay_2" className="lay-1" href="#">
                  {" "}
                  {/* spark select */}
                  <span />
                </a>
                <a id="back_2" className="back-1" href="#">
                  <span />
                </a>
                <a id="lay_3" className="lay-1" href="#">
                  {" "}
                  {/* spark select */}
                  <span />
                </a>
                <a id="back_3" className="back-1" href="#">
                  <span />
                </a>
              </dd>
              <dd className="mode-land" />
              <dd className="mode-land" />
            </dl>
          </div>
          {/* multi selection for fancybet end */}
        </div>
        <div id="sportsBookWrap" style={{ display: "none" }}>
          <div id="sportsBookHead" className="sportsbook_bet-head">
            <h4 id="betHeader">
              <span id="sportsBookName">
                <pre id="inPlayTag" style={{ display: "none" }}>
                  in-play
                </pre>
                Premium Cricket
              </span>
              <a id="sportsBookRules" className="btn-head_rules">
                Rules
              </a>
            </h4>
            <a id="showFancyBetBtn" className="other-tab" style={{}}>
              Fancy Bet
            </a>
            <a
              id="minMaxBtn_1"
              href="#"
              className="btn-fancy_info"
              style={{ display: "none" }}
            >
              Min/Max
            </a>
            <a
              id="minMaxBtn_2"
              href="#"
              className="btn-fancy_info"
              style={{ display: "none" }}
            >
              Min
            </a>
            <div
              id="minMaxWrap_1"
              className="fancy_info-popup"
              style={{ display: "none" }}
            >
              <dl>
                <dt>Min/Max</dt>
                <dd id="minMaxInfo_1">0.00</dd>
              </dl>
              <dl>
                <dt id="rebateName_1">Rebate</dt>
                <dd id="rebateRatio_1">0.00%</dd>
              </dl>
              <a href="#" className="close">
                Close
              </a>
            </div>
            <div
              id="minMaxWrap_2"
              className="fancy_info-popup"
              style={{ display: "none" }}
            >
              <dl>
                <dt>Min</dt>
                <dd id="minMaxInfo_2">0.00</dd>
              </dl>
              <dl>
                <dt id="rebateName_2">Rebate</dt>
                <dd id="rebateRatio_2">0.00%</dd>
              </dl>
              <a href="#" className="close">
                Close
              </a>
            </div>
          </div>
          <div
            id="sportsBookTab_2_4"
            className="special_bets-tab-wrap"
            style={{ display: "none" }}
          >
            <ul className="special_bets-tab">
              <li>
                <a id="tab_All">All</a>
              </li>
              <li>
                <a id="tab_Popular">Popular</a>
              </li>
              <li>
                <a id="tab_Match">Match</a>
              </li>
              <li>
                <a id="tab_Innings">Innings</a>
              </li>
              <li>
                <a id="tab_Over">Over</a>
              </li>
              <li>
                <a id="tab_Batsman">Batsman</a>
              </li>
              <li>
                <a id="tab_Partnership">Partnership</a>
              </li>
              <li>
                <a id="tab_Group">Group</a>
              </li>
              <li>
                <a id="tab_Range">Range</a>
              </li>
              <li>
                <a id="tab_HeadtoHead">Head-to-Head</a>
              </li>
              <li>
                <a id="tab_Player">Player</a>
              </li>
            </ul>
          </div>
          <div
            id="sportsBookTab_2_2"
            className="special_bets-tab-wrap"
            style={{ display: "none" }}
          >
            <ul className="special_bets-tab">
              <li>
                <a id="tab_All">All</a>
              </li>
              <li>
                <a id="tab_Main">Main</a>
              </li>
              <li>
                <a id="tab_Total">Total</a>
              </li>
              <li>
                <a id="tab_Others">Others</a>
              </li>
            </ul>
          </div>
          <div
            id="sportsBookTab_2_1"
            className="special_bets-tab-wrap"
            style={{ display: "none" }}
          >
            <ul className="special_bets-tab">
              <li>
                <a id="tab_All">All</a>
              </li>
              <li>
                <a id="tab_Popular">Popular</a>
              </li>
              <li>
                <a id="tab_Half">Half</a>
              </li>
              <li>
                <a id="tab_Goals">Goals</a>
              </li>
              <li>
                <a id="tab_FastMarkets">Fast Markets</a>
              </li>
              <li>
                <a id="tab_Specials">Specials</a>
              </li>
              <li>
                <a id="tab_Corners">Corners</a>
              </li>
              <li>
                <a id="tab_Cards">Cards</a>
              </li>
              <li>
                <a id="tab_Players">Players</a>
              </li>
              <li>
                <a id="tab_Others">Others</a>
              </li>
            </ul>
          </div>
          <div
            id="sportsBookTab_2_137"
            className="special_bets-tab-wrap"
            style={{ display: "none" }}
          >
            <ul className="special_bets-tab">
              <li>
                <a id="tab_All">All</a>
              </li>
              <li>
                <a id="tab_Popular">Popular</a>
              </li>
              <li>
                <a id="tab_Half">Half</a>
              </li>
              <li>
                <a id="tab_Goals">Goals</a>
              </li>
              <li>
                <a id="tab_FastMarkets">Fast Markets</a>
              </li>
              <li>
                <a id="tab_Specials">Specials</a>
              </li>
              <li>
                <a id="tab_Corners">Corners</a>
              </li>
              <li>
                <a id="tab_Cards">Cards</a>
              </li>
              <li>
                <a id="tab_Players">Players</a>
              </li>
              <li>
                <a id="tab_Others">Others</a>
              </li>
            </ul>
          </div>
          <div
            id="sportsBookTab_2_138"
            className="special_bets-tab-wrap"
            style={{ display: "none" }}
          >
            <ul className="special_bets-tab">
              <li>
                <a id="tab_All">All</a>
              </li>
              <li>
                <a id="tab_Main">Main</a>
              </li>
              <li>
                <a id="tab_Half">Half</a>
              </li>
              <li>
                <a id="tab_Others">Others</a>
              </li>
            </ul>
          </div>
          <div
            id="sportsBookTab_1"
            className="special_bets-tab-wrap"
            style={{ display: "none" }}
          >
            <ul className="special_bets-tab" />
          </div>
          <div
            id="sportsBookNoBet"
            className="bets-wrap"
            style={{ display: "none" }}
          >
            <p className="no-game">Sports Book has no market</p>
          </div>
          <div
            id="sportsBookMarketTemplate"
            className="bets-wrap sports-book"
            style={{ display: "none" }}
          >
            <h4>
              <a
                id="multiMarketPin"
                className="pin-off"
                title="Add to Multi Markets"
              />
              <span id="marketName" className="to-collapse">
                Total sixes
              </span>
              <div className="fancy_info-popup">
                {" "}
                {/* add class=show to show this wrap */}
                <dl>
                  <dt>Min / Max</dt>
                  <dd>100.00 / 10000.00</dd>
                </dl>
                <a className="close">Close</a>
              </div>
            </h4>
            <dl
              id="sportsBookSelectionTemplate"
              className="bets-selections"
              style={{ display: "none" }}
            >
              <dt className>
                <h4 id="selectionName" />
                <ul>
                  <li id="before" className="win" style={{ display: "none" }} />
                  <li
                    id="after"
                    className="to-lose"
                    style={{ display: "none" }}
                  />
                </ul>
              </dt>
              <dd id="suspend" className="suspend" style={{ display: "none" }}>
                <p>Suspend</p>
              </dd>
              <dd>
                <a id="back_1" className="back-1" href="#">
                  <span />
                </a>
              </dd>
              <dd className="mode-land" />
            </dl>
          </div>
        </div>
        <div
          id="feedingSiteHead"
          className="sportsbook_bet-head"
          style={{ display: "none" }}
        >
          <h4>
            <span>SportsBook</span>
          </h4>
          <a
            id="minMaxBtn"
            className="btn-fancy_info"
            style={{ display: "none" }}
          >
            Min/Max/Rebate
          </a>
          <div id="feedingSiteMinMax" className="fancy_info-popup">
            <dl>
              <dt>Min / Max</dt>
              <dd id="minMaxInfo">100.00 / 10000.00</dd>
            </dl>
            <dl id="rebateName">
              <dt>Rebate</dt>
              <dd id="rebateRatio">3.00%</dd>
            </dl>
            <a className="close">Close</a>
          </div>
        </div>
        <div
          id="feedingSiteNoBet"
          className="bets-wrap"
          style={{ display: "none" }}
        >
          <p className="no-game">
            Sports Book 1X2 market will be available after Event In-Play
          </p>
        </div>
        <div
          id="feedingSiteMarketTemplate"
          className="bets-wrap multi sportsbook"
          style={{ display: "none" }}
        >
          <dl id="marketHead" className="bets-selections-head">
            <dt />
            <dd>Back</dd>
            <dd className="mode-land" />
          </dl>
          <dl
            id="feedingSiteSelectionTemplate"
            className="bets-selections"
            style={{ display: "none" }}
          >
            <dt className="line_market-selection">
              <h4 id="selectionName" />
              <ul>
                <li id="before" className="win" style={{ display: "none" }} />
                <li
                  id="after"
                  className="to-lose"
                  style={{ display: "none" }}
                />
              </ul>
            </dt>
            <dd id="suspend" className="suspend">
              <p>Suspend</p>
            </dd>
            <dd>
              <a id="back_1" className="back-1">
                <span />
              </a>
            </dd>
            <dd className="mode-land" />
          </dl>
        </div>
        <div
          id="lineMarketHead"
          className="line_market-head"
          style={{ display: "none" }}
        >
          <h4>
            <span>Line Markets</span>
          </h4>
          <a id="lineMarketRulesBtn" className="btn-rules" href="#">
            Rules
          </a>
        </div>
        <div
          id="lineMarketList"
          className="bets-wrap multi"
          style={{ display: "none" }}
        >
          <dl className="bets-selections-head">
            <dt />
            <dd className="mode-land" />
            <dd className="mode-land" />
            <dd>Back/Yes</dd>
            <dd>Lay/No</dd>
            <dd className="mode-land" />
            <dd className="mode-land" />
          </dl>
          <dl
            id="lineMarketTemplate"
            className="bets-selections"
            style={{ display: "none" }}
          >
            <dt id="marketHeader" className="line_market-selection">
              <h4 id="marketName" />
              <ul id="winLoss">
                <li
                  id="withoutBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li
                  id="lossWithoutBet"
                  className="win"
                  style={{ display: "none" }}
                />
                <li id="withBet" className="win" style={{ display: "none" }} />
                <li
                  id="lossWithBet"
                  className="win"
                  style={{ display: "none" }}
                />
              </ul>
              <a href="#" className="btn-book" style={{ display: "none" }} />
            </dt>
            <dd id="suspend" className="suspend">
              <p>Suspend</p>
            </dd>
            <dd id="closed" className="suspend">
              <p>Closed</p>
            </dd>
            <dd id="nonRunner" className="suspend">
              <p>Non Runner</p>
            </dd>
            <dd className="mode-land">
              <a id="back_3" className="back-3" href="#">
                <span />
              </a>
            </dd>
            <dd className="mode-land">
              <a id="back_2" className="back-2" href="#">
                <span />
              </a>
            </dd>
            <dd>
              <a id="back_1" className="back-1" href="#">
                <span />
              </a>
            </dd>
            <dd>
              <a id="lay_1" className="lay-1" href="#">
                <span />
              </a>
            </dd>
            <dd className="mode-land">
              <a id="lay_2" className="lay-2" href="#">
                <span />
              </a>
            </dd>
            <dd className="mode-land">
              <a id="lay_3" className="lay-3" href="#">
                <span />
              </a>
            </dd>
          </dl>
        </div>
        <p className="info-rotate" style={{ display: "none" }}>
          Rotate Screen
          <br />
          to see Market Depth
        </p>
      </div>
      <div
        id="allMarketTypeWrap"
        className="mian-wrap markets-all"
        style={{ display: "none" }}
      >
        <div className="path-wrap">
          <a id="backFullmarket" className="markets-back">
            <span>All Markets</span>
          </a>
        </div>
        <ul id="allMarketTypeList" className="menu-list">
          <li id="marketTypeTemaplate" style={{ display: "none" }}>
            <a href="#" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventDetails;
