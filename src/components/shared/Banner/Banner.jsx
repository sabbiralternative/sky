const Banner = () => {
  return (
    <div id="promoteWrap" className="promo-banner-wrap active">
      <div className="promo-banner">
        <div
          className="promo-viewport"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <ul
            id="slides"
            className="slides"
            style={{
              width: "800%",
              transitionDuration: "0s",
              transform: "translate3d(-904px, 0px, 0px)",
            }}
          >
            <li
              className="banner clone"
              aria-hidden="true"
              style={{
                width: "452px",
                marginRight: "0px",
                float: "left",
                display: "block",
              }}
            >
              <a className="ui-link">
                <img
                  src="/src/assets/img/promo/kv-skyexchange-m.jpg"
                  alt=""
                  draggable="false"
                />
              </a>
            </li>
            <li
              className="banner"
              style={{
                width: "452px",
                marginRight: "0px",
                float: "left",
                display: "block",
              }}
              data-thumb-alt
            >
              <a className="ui-link">
                <img
                  src="/src/assets/img/promo/kv-skyexchange-2-m.jpg"
                  alt=""
                  draggable="false"
                />
              </a>
            </li>
            <li
              className="banner promo-active-slide"
              data-thumb-alt
              style={{
                width: "452px",
                marginRight: "0px",
                float: "left",
                display: "block",
              }}
            >
              <a className="ui-link">
                <img
                  src="/src/assets/img/promo/kv-skyexchange-m.jpg"
                  alt=""
                  draggable="false"
                />
              </a>
            </li>
            <li
              className="banner clone"
              style={{
                width: "452px",
                marginRight: "0px",
                float: "left",
                display: "block",
              }}
              aria-hidden="true"
            >
              <a className="ui-link">
                <img
                  src="/src/assets/img/promo/kv-skyexchange-2-m.jpg"
                  alt=""
                  draggable="false"
                />
              </a>
            </li>
          </ul>
        </div>
        <ol className="promo-control-nav promo-control-paging">
          <li>
            <a href="#" className>
              1
            </a>
          </li>
          <li>
            <a href="#" className="promo-active">
              2
            </a>
          </li>
        </ol>
        <ul className="promo-direction-nav">
          <li className="promo-nav-prev">
            <a className="promo-prev" href="#" />
          </li>
          <li className="promo-nav-next">
            <a className="promo-next" href="#" />
          </li>
        </ul>
      </div>
      <div className="promo-banner-loading" />
    </div>
  );
};

export default Banner;
