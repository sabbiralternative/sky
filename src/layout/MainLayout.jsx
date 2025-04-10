import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Banner from "../components/shared/Banner/Banner";

const MainLayout = () => {
  return (
    <div className="ui-mobile-viewport ui-overlay-a">
      <div data-role="page" className="ui-page ui-page-theme-a ui-page-active">
        <Header />
        <Footer />
        <Banner />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
