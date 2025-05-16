
import {useContext, useState} from "react";
import logo from "../../../src/assets/logo/SpringLifeLogo.png"

// react icons
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {FaTasks} from "react-icons/fa";
import {TbLogout2, TbUsersGroup} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";

import {FiUser} from "react-icons/fi";
import {IoSettingsOutline} from "react-icons/io5";
import { NavLink } from "react-router";
import { AuthContext } from "../../utils/context/AuthContextProvider";
import { useToRoute } from "../../hooks/useToRoute";

const Navbar = () => { 
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const goTo = useToRoute();
    const { user, logOut } = useContext(AuthContext);
    
    const { displayName:name, photoURL:photo, } = user || { displayName:"User", photoURL: "notavailavle", };

    const navlinks = [
        {name: "About", path: "/about"},
        {name: "Services", path: "services"},
    ]

    const handelLogIn = () =>{
        goTo('/login')
    }

    const handelLogOut = () =>{
        logOut()
        goTo('/')
    }

    return (
        <nav className="sectionBase mx-auto flex items-center justify-between relative">

            {/* logo */}
            <NavLink to={'/'}>
                <img src={logo} alt="Spring Life" className="w-[100px] "/>
            </NavLink>

            {/* nav links */}
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
                <li className={` border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize hover:border-b-[#61CE70] hover:text-[#547d5b]`}>
                    <NavLink to='/' className="" >Home</NavLink> 
                </li>
                {
                    navlinks.map((link, index) => (
                        <li key={index} className={` border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize hover:border-b-[#61CE70] hover:text-[#547d5b]`}>
                            <NavLink to={link.path} className={({ isActive, }) => isActive ? "hover:text-[#328f3f] text-[#61CE70] font-medium" : "" }>{link.name}</NavLink> 
                        </li>
                    ))
                }
            </ul>

            {/* user account */}
            <div className="flex items-center gap-[15px]">
                {
                    user ?
                    (<div className="flex items-center gap-[10px] cursor-pointer relative"
                        onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                        <div className="relative">
                            <img src={photo} alt={name} className="w-[35px] h-[35px] rounded-full object-cover"/>
                            <div className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                        </div>

                        <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">{name}</h1>

                        <div
                            className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[10]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                            <button className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                                <FiUser/>
                                View Profile
                            </button>
                            <button className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                                <IoSettingsOutline/>
                                Settings
                            </button>

                            <div className="mt-3 border-t border-gray-200 pt-[5px]">
                                <button className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50" onClick={handelLogOut}>
                                    <TbLogout2/>
                                    Logout
                                </button>
                            </div>
                        </div>

                        <IoIosArrowUp className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 text-gray-600 sm:block hidden`}/>

                    </div>):
                    <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#469751] text-white hover:bg-[#42c153] transition-all duration-300" onClick={handelLogIn}>log In
                    </button>
                }

                <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}className="text-[1.8rem] text-[#424242]c cursor-pointer md:hidden flex"/>
            </div>

            {/* mobile sidebar */}
            <aside className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "hidden translate-x-[200px] opacity-0 z-[-1]"} w-[150px] md:hidden bg-white p-4 text-center absolute top-[55px] right-0 sm:w-[300px] rounded-md transition-all duration-300`}>
                <ul className="items-start gap-[10px] text-[1rem] text-gray-600 flex flex-col">
                    <li className={`border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize hover:border-b-[#61CE70] hover:text-[#328f3f]`}>
                        <NavLink to='/' className={({ isActive, }) => isActive ? "hover:text-[#328f3f] text-[#61CE70]" : "" }>Home</NavLink> 
                    </li>
                    {
                        navlinks.map((link, index) => (
                            <li key={index} className={`w-fit border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize hover:border-b-[#61CE70] hover:text-[#469751]`}>
                                <NavLink to={link.path} className={({ isActive, }) => isActive ? "hover:text-[#328f3f] text-[#61CE70] font-medium" : "" }>{link.name}</NavLink> 
                            </li>
                        ))
                    }
                </ul>
            </aside>
        </nav>
    );
};

export default Navbar;