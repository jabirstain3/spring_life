import logo from "../../../src/assets/logo/SpringLifeLogo.png"
import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineEmail, MdOutlineLocalPhone} from "react-icons/md";
import { NavLink } from "react-router";

const Footer = () => {
    const activeStyle = "text-[1rem] hover:text-[#328f3f] text-[#61CE70]";
    const inActiveStyle = "text-[1rem] text-[#424242] hover:text-[#328f3f] cursor-pointer transition-all duration-200";
    return (
        <footer className="sectionBase w-full mx-4 md:mx-auto bg-white my-10 md:my-12">
            <div className="flex justify-between gap-[30px] flex-col md:flex-row flex-wrap w-full">
                <div className="w-full sm:w-[25%] ">
                    <NavLink to={'/'}><img src={logo} alt="Spring Life" className="w-[150px] mb-[20px]"/></NavLink>

                    <div className="flex flex-col gap-[10px] text-[#22672b]">
                        <span><a className="text-[1rem] flex items-center gap-[8px] cursor-pointer"> 
                            <IoLocationOutline className="text-[1.2rem]"/>
                            Kulaura, Moulvibazar, Sylhet
                        </a></span>

                        <span><a className="text-[1rem] flex items-center gap-[8px] cursor-pointer"> 
                            <MdOutlineEmail className="text-[1.1rem]"/>
                            zenuilibrary@gmail.com
                        </a></span>

                        <span><a className="text-[1rem] flex items-center gap-[8px]  cursor-pointer">
                            <MdOutlineLocalPhone className="text-[1.1rem]"/>
                            +880 1828 004746
                        </a></span>
                    </div>
                </div>

                <div>
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Services</h3>
                    <div className="flex flex-col gap-[10px]">
                        <NavLink to={'/App'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Book Appointment</NavLink>
                        <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Career Coach</NavLink>
                        <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Interview Preparation</NavLink>
                    </div>
                </div>

                <div>
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Company</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>About</NavLink>
                        <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Features</NavLink>
                        <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Our Team</NavLink>
                        <NavLink to={'/r'} className={({ isActive, }) => isActive ? activeStyle : inActiveStyle }>Contact</NavLink>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">Social Media</h3>
                    <div className="flex text-black flex-col gap-[10px]">
                        <a className="text-[1rem] text-[#424242] hover:text-[#328f3f] cursor-pointer transition-all duration-200">Facebook</a>
                        <a className="text-[1rem] text-[#424242] hover:text-[#328f3f] cursor-pointer transition-all duration-200">Twitter</a>
                        <a className="text-[1rem] text-[#424242] hover:text-[#328f3f] cursor-pointer transition-all duration-200">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
                    