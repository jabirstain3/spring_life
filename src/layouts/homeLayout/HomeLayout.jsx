import { BannerSlide } from "../../components/bannerSlider/BannerSlider";
import DisplayServicesHome from "../../components/dispalyServicesHome.jsx/DisplayServicesHome";

const HomeLayout = () => {
    return (
        <div className="w-full ">
            <BannerSlide/>
            <DisplayServicesHome/>
        </div>
    );
};

export default HomeLayout;