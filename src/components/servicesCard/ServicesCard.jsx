import{useState} from "react";
import { IoTimerOutline} from "react-icons/io5";
import {FiArrowUpRight} from "react-icons/fi";
import {RiHeartAddLine, RiHeartFill} from "react-icons/ri";
import { useToRoute } from "../../hooks/useToRoute";

const ServicesCard = ({ services }) => {
    const goTo = useToRoute()
    const [isFavorite, setIsFavorite] = useState(false);
    const { id, image, serviceName, category, pricing, description, duration, counselor, } = services

    const handelDetails = () => {
        goTo(`services/${id}`, services);
    }

    return (
        <div className="border border-gray-300 bg-amber-50 w-full max-w-[280px] md:max-w-[320px] relative rounded-xl overflow-hidden">

            {/* badge */}
            <span className="bg-red-500 rounded-b-md px-3 py-1 text-[0.9rem] text-white absolute top-0 left-4">{category}</span>

            {/* product image */}
            <img alt="product/image" src={image} className="w-full mt-6"/>

            {/* product details */}
            <div className="p-4 pt-0">
                <div className="h-36">
                    <h3 className="text-[1.4rem] font-semibold  mt-2">{serviceName}</h3>
                    <span className="text-[0.9rem] font-normal text-gray-500 line-clamp-2 my-1">{description}</span>
                    <p className="text-[1rem] font-medium text-gray-600 line-clamp-2">{counselor}</p>
                </div>

                {/* price & discount offer */}
                <div className="flex items-center mt-3 gap-[15px]">
                    <p className="text-[1.150rem] font-semibold mt-1">{pricing}</p>
                    <p className="border text-green-600 text-[0.8rem] border-green-400 px-2 py-1 rounded-md">35% Off</p>
                </div>

                {/* shipping offers */}
                <div className="flex items-center border-t border-gray-300 mt-3 gap-[15px] pt-[5px]">
                    <div className="flex items-center gap-[6px] text-gray-400 text-[0.9rem]">
                        <IoTimerOutline className="size-5"/>
                        <p>{duration}</p>
                    </div>
                </div>

                {/* actions */}
                <div className="flex items-center justify-between mt-7 gap-[15px]">
                    <button className="py-[9px] px-4 text-white rounded-2xl grow justify-center flex items-center gap-[0.5rem] bg-[#328f3f] text-[1rem] font-medium hover:bg-[#61CE70] transition-all duration-200" onClick={handelDetails}>
                        View Details
                        <FiArrowUpRight className="text-[1.3rem]"/>
                    </button> 

                    <button className="p-[9px] rounded-full border-2 border-[#328f3f]">
                        {
                            isFavorite ? (
                                <RiHeartFill onClick={() => setIsFavorite(false)} className="text-red-700 text-[1.3rem]"/>
                            ) : 
                            (
                                <RiHeartAddLine onClick={() => setIsFavorite(true)}className="text-[#328f3f] text-[1.3rem]"/>
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
