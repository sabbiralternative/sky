import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Banner from "../components/shared/Banner/Banner";
import WhatsApp from "../components/shared/WhatsApp";

const MainLayout = () => {
  const showBanner = ["/"];
  const location = useLocation();
  return (
    <div className="ui-mobile-viewport ui-overlay-a">
      <WhatsApp />
      <div data-role="page" className="ui-page ui-page-theme-a ui-page-active">
        <Header />
        <Footer />
        {showBanner.includes(location.pathname) && <Banner />}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
