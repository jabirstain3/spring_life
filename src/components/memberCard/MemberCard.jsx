
const Card = ({ member }) => {
    const { name, image, specialisation } = member

    return (
        <div className="w-full max-w-[240px] relative">
            <img src={image} alt={name} className="w-full aspect-square object-cover rounded-xl"
            />


            <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-3 rounded-b-xl">
                <span className="text-[0.8rem] py-1 px-3 bg-[#def9cb8e] rounded-full font-medium">{name}</span>
                <h1 className="text-[1.5rem] text-white font-bold leading-[34px] mt-1">{specialisation}</h1>
            </div>
        </div>
    );
};

export default Card;
                    