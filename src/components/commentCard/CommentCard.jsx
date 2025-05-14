import {FaQuoteLeft,} from "react-icons/fa";

const CommentCard = ({ comment }) => {
    const { image, userName, commentText, servicesName } = comment

    return (
        <div className="w-full max-w-[300px] md:w-[70%] md:max-w-[360px] mt-8 md:mt-0 p-4 bg-white shadow-2xl rounded-lg relative">
            <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]"/>
            <img src={image} alt="demo/image" className="w-[100px] h-[100px] object-cover rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-primary"
            />
            <p className="text-[#424242] text-[0.9rem] mt-16">{commentText}</p>

            <div className="flex items-start mt-5 justify-between">
                <div>
                    <h2 className="text-[1.2rem] font-[600]">{userName}</h2>
                    <p className="text-[1rem] text-[#727272]">{servicesName}</p>
                </div>
                {/* <div className="flex items-center gap-1">
                    <FaStar className="text-[1.3rem] text-[#ffba24]"/>
                    <FaStar className="text-[1.3rem] text-[#ffba24]"/>
                    <FaStar className="text-[1.3rem] text-[#ffba24]"/>
                    <FaStar className="text-[1.3rem] text-[#ffba24]"/>
                    <FaRegStar className="text-[#ffba24] text-[1.3rem]"/>
                </div> */}
            </div>
            <FaQuoteLeft
                className="absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]"/>
        </div>
    );
};

export default CommentCard;