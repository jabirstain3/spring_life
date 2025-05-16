// import React, {useState, useEffect} from "react";

import { IoTimerOutline } from "react-icons/io5";
import { VscSymbolMethod } from "react-icons/vsc";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import CommentDisplayLayout from "../commentDisplayLayout/CommentDisplayLayout";
import { useToast } from "../../hooks/useToast"
import { useLocation } from "react-router";

const ServicesDetailsLayout = () => {
    // const [isFavorite, setIsFavorite] = useState()
    const { state } = useLocation();
        const toast = useToast()
    // console.log(state);
    document.title = "Spring Life - Services Details";
    const { image, serviceName, category, pricing, description, duration, counselor, } = state;
    const data = duration.split(" ");
    // console.log(data);

    const handelBooking = () => {
        toast("success" , "Booking Confirmed")
    }
    
    return (
        <div className="sectionBase mx-auto">
            <div className="w-full max-w-4xl mx-auto my-6 md:my-10">

                <div className="bg-amber-50 p-4 shadow-lg rounded-xl">
                    {/* Left side - Image gallery */}
                    <div className="space-y-4">
                        <img alt="product/image" src={image} className="w-full"/>
                    </div>

                    <h1 className="text-[1.6rem] md:text-[1.9rem] text-gray-800 font-semibold">{serviceName}</h1>

                    <div className="flex items-start mt-3 gap-8">
                        <div className="flex flex-col items-start gap-[6px]">
                            <VscSymbolMethod  className="size-8 text-black"/>
                            <p className="text-gray-700 text-[1rem] font-medium">{category}</p>
                        </div>

                        <div className="flex flex-col items-start gap-[6px]">
                            <HiOutlineCalendarDateRange className="size-8 text-black"/>
                            <p className="text-gray-700 text-[1rem] font-medium">{data[0]}</p>
                        </div>

                        <div className="flex flex-col items-start gap-[6px]">
                            <IoTimerOutline className="size-8 text-black"/>
                            <p className="text-gray-700 text-[1rem] font-medium">{data[1]} {data[2]} - {data[4]} {data[5]}</p>
                        </div>
                    </div>
                </div>

                {/* Right side - Product details */}
                <div className="bg-amber-50 p-4 shadow-lg rounded-xl my-6">

                    <p className="text-[1.1rem] font-bold gap-1 text-gray-800 line-clamp-2">Description: <span className="pl-1 text-[1rem] font-normal text-gray-600 line-clamp-2">{description}</span></p>
                    <p className="py-3 text-[1.1rem] font-bold gap-1 text-gray-800 line-clamp-2">Counsilor: <span className="pl-1 font-medium text-gray-600 line-clamp-2">{counselor}</span></p>

                    <div className="flex items-center gap-3">
                        <span className="text-[1.3rem] text-gray-800 font-medium">Price: {pricing}</span>
                        {/* <span className="text-lg text-gray-500 line-through">$400.00</span> */}
                    </div>


                    <div className="space-y-2 pt-4">
                        <p className="font-medium text-[1.3rem] text-gray-800">Slots Availabl:e</p>
                        <p className="text-gray-800 font-semibold pl-1">21 <span className="font-medium text-gray-500"> Out of 86</span></p>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto">
                    <button className="w-full px-6 py-3 bg-[#328f3f] text-white shadow-lg text-[1.2rem] font-semibold rounded-md hover:bg-[#61CE70] mx-auto" onClick={handelBooking}>Book A Slot</button>
                </div>
            </div>
            <div className="w-full max-w-4xl mx-auto mb-6 md:mb-10">
                <CommentDisplayLayout srvs={serviceName}/>
            </div>
        </div>
    );
};

export default ServicesDetailsLayout;
