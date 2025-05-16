import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context/AuthContextProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useToRoute } from "../../hooks/useToRoute";
import { useToast } from "../../hooks/useToast"
import { Bounce, ToastContainer } from "react-toastify";
import { NavLink, useLocation } from "react-router";

const LogInPage = () => { 
    const [show, setShow] = useState(false)
    const location = useLocation();
    const goTo = useToRoute();
    const toast = useToast()
    const { logInUser, googleUser, /*facebookCreateUser*/ }= useContext(AuthContext);
    // console.log(location);

    document.title = "Log in to Spring Life";
    const dest = location.state?.from?.pathname || "/";
    // console.log(dest);
    

    const handelLogInWithEmail = (e) =>{

        e.preventDefault();
        // console.log(e);

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        logInUser(email, password)
        .then((result) =>{
            // console.log(result.user);
            e.target.reset();
            goTo(dest);
            toast("success" , "Loged In Successfully.")
        })
        .catch((error)=>{
            toast("error" , "Authintication failed.")
            console.log(error.message);
        })
    }

    const handelLogInWithGoogle = () => {
        googleUser()
        .then((result) =>{
            // console.log(result.user);
            goTo(dest);
            toast("success" , "Loged In Successfully.")
        })
        .catch((error)=>{
            toast("error" , "Authintication failed.")
            console.log(error.message);
        })
        // console.log("Google");
        
    }

    const handelLogInWithFacebook = () => {
        // facebookCreateUser();
        // console.log("Facebook");
        
    }

    return (
        <div className="mx-auto flex items-center justify-center h-screen">
            <div className=" p-10 md:p-20 lg:px-32 grid gap-5 rounded-lg shadow-lg bg-white">
                <h1 className="text-4xl text-center font-bold text-[#227f27]">Log In</h1>

                <div className="flex justify-center items-center gap-5 mt-2">
                    <button className="border rounded-full p-2" onClick={handelLogInWithGoogle}>
                        <FcGoogle className="text-2xl" />
                    </button>

                    <button className="border rounded-full p-2" onClick={handelLogInWithFacebook}>
                        <FaFacebookF className="text-2xl text-[#4267B2]" />
                    </button>
                </div>

                <form className="grid gap-4 w-64 md:w-72 mx-auto" onSubmit={handelLogInWithEmail}>
                    <p className="text-center">Or use email to login</p>

                    <label htmlFor="">
                        <input className="border w-full rounded-md  px-4 py-1.5" type="email" name="email" placeholder="Email..."required />
                    </label>

                    <div className="relative">
                        <input className="border w-full rounded-md  px-4 py-1.5"  type={show ? 'text' : 'password'} name="password"  placeholder="password..." required /> 
                        {/* onChange={(e) => isValidPassword(e.target.value)} */}
                        <span className='absolute top-2 right-2 cursor-default' onClick={() => setShow(!show)}>{ show ? "Hide" : "Show"}</span>
                        {/*                                 
                        { !currectFormate && <span className='text-xs text-red-700' onClick={() => setShow(!show)}>Use at least 8 characters, uppercase, and lowercase letter.</span>} */}
                    </div>

                    <input className="w-fit border rounded-md bg-[#227f27] px-10 py-1 mt-2 mx-auto text-lg font-medium text-white" type="submit" value={"Log In"} />

                    {/* <p className="text-center">Forget password? <NavLink className={'hover:text-black '} to={'/forget-password'} >Reset Password!</NavLink></p> */}

                    <p className="text-center">Don't have an account? <NavLink state={dest} className={'hover:text-black '} to={'/registration'} >Registar Now.</NavLink></p>
                    </form>
            </div>

            <ToastContainer position="bottom-right" autoClose={3000} limit={4} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Bounce} />
        </div>
    );
};

export default LogInPage;