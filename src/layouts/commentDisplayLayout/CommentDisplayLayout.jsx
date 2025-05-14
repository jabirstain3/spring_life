import { useContext, useState } from "react";
import CommentCard from "../../components/commentCard/CommentCard";
import { AuthContext } from "../../utils/context/AuthContextProvider";

const CommentDisplayLayout = ({ srvs }) => {
    const [ comments, setComments ] = useState([
        // {
        //     cmntId:2341221, 
        //     image: "", 
        //     userName: "fuck You", 
        //     commentText: "lorem rfgsefg edrfg efr ert er  ert ert ert eryetyerth we rterty ewrt erhae4tljerg oihwero  erigere vweikj vouhierg werg weru ", 
        //     servicesName: "abc" },
    ])

    const { user } = useContext(AuthContext);

    const handelComment = (e) => {
        e.preventDefault();

        const text = e.target.comment.value;
        console.log(text);
        
        const commentObj ={
            cmntId: Math.random(),
            image: user.photoURL, 
            userName: user.displayName, 
            commentText: text, 
            servicesName: srvs }

            setComments([...comments, commentObj])
    }

    return (
        <div className="mt-10 md:mt-20">
            <div className="flex flex-col flex-wrap md:flex-row gap-8 justify-center items-center">
                {
                    comments &&
                    comments.map((cmnt) => <CommentCard key={cmnt.cmntId} comment={cmnt}/>)
                }
            </div>
            <div className="w-full mt-8">
                <form className="w-full max-w-[400px] mx-auto"  onSubmit={handelComment} >
                    <label htmlFor="description" className="font-[400] text-[15px]" >
                        Comment <span className="text-red-500">*</span>
                    </label>
                    <textarea id="description" name='comment' className="border-border border rounded-md outline-none mt-1 px-4 w-full py-3 bg-white min-h-[160px] focus:border-primary transition-colors duration-300"
                    required/>
                    <button className="py-[9px] px-4 text-black border rounded-full grow justify-center flex items-center gap-[0.5rem] bg-amber-100 text-[1rem] font-medium hover:bg-amber-200 transition-all duration-200" type="submit">Submit</button>
                </form>
            </div>
            
        </div>
    );
};

export default CommentDisplayLayout;