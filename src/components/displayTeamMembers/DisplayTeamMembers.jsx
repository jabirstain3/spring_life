import MemberCard from "../memberCard/MemberCard"
const DisplayTeamMembers = () => {
    const team = [
        { image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TMG1XTRat-gL0eZ6KWTQBgHaHw%26pid%3DApi&f=1&ipt=ff1e6714780e923b1a4a81c7a918677fdf83ca09487987ec0ad349be6b3d2ac2&ipo=images", id: 12300421, name:"Dr. Anjali Mehra", specialisation:"Career counseling" },
        { image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DPPHNTEc9-FMhR1-MDxQHAAAAA%26cb%3Diwp2%26pid%3DApi&f=1&ipt=0d379404beddac2eadedf3f760eb48e2259051503ce3e54c83a1e9fbb2735618&ipo=images", id: 12300413, name:"Mr. Neeraj Saini", specialisation:"Scholarships" },
        { image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2S9FIrphJ7p02Pr9lfMJYQHaHa%26cb%3Diwc2%26pid%3DApi&f=1&ipt=f73927d89e097f43fbfa3a7149f7cd790aea8993532ac363876eea4568dd8974&ipo=images", id: 12300427, name:"Mr. Rohit Bansal", specialisation:"job hunting" },
    ]
    return (
        <div className="sectionBase mx-auto bg-white mt-10 rounded-2xl">
            <h1 className="text-[2.5rem] font-bold text-center mt-6">Our Team </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 p-4">
                {
                    team.map((member) => <MemberCard key={member.id} member={member}/>)
                }
            </div>
        </div>
    );
};

export default DisplayTeamMembers;