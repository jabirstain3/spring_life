import { BannerSlide } from "../../components/bannerSlider/BannerSlider";
import DisplayServicesHome from "../../components/dispalyServicesHome.jsx/DisplayServicesHome";
import { DisplayPartners } from "../../components/displayPartners/DisplayPartners";
import DisplayTeamMembers from "../../components/displayTeamMembers/DisplayTeamMembers";

const HomeLayout = () => {
    return (
        <div className="w-full ">
            <BannerSlide/>
            <DisplayServicesHome/>
            <DisplayTeamMembers/>
            <DisplayPartners/>
        </div>
    );
};

export default HomeLayout;