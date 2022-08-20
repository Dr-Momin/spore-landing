import React from 'react';
import {FaApple, FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Image from "next/image";
import bgCircle from "../public/assests/bgCircle.png";
import bgUser from "../public/assests/bgUser.png";
import Navbar from "../components/Navbar";
import Icons from "../components/Icons";


const SignIn = () => {
    return (
        <>
            <Navbar/>
            <div className={"w-full h-screen text-center "}>

                <div className={"w-full h-full mx-auto p-2 flex flex-col  lg:justify-between md:flex-row bg-white lg:bg-[#ECF0F3] "}>

                        <Image
                            src={bgCircle} alt="" width={"650"} height={"300"}
                               className={""} />

                        {/* Sign in box */}
                        <div className={"h-96 w-80 flex flex-col items-center justify-center gap-4 shadow-2xl rounded-lg absolute top-1/4 inset-0 mx-auto  lg:mx-24" }>
                            <h2 style={{textShadow: "0 2px rgba(0,0,0,0.3)"}} className={"text-2xl  drop-shadow-2xl shadow-black"}>Sign In</h2>

                            <Icons/>
                            {/*Social Media Icons*/}
                            {/*<div className={"flex gap-3"}>*/}
                            {/*    <div className={"bg-gray-200 rounded p-2"}>*/}
                            {/*        <FaGoogle size={"20"}  />*/}
                            {/*    </div>*/}
                            {/*    <div className={"bg-gray-200 rounded p-2"}>*/}
                            {/*        <FaApple size={"20"}  />*/}
                            {/*    </div>*/}
                            {/*    <div className={"bg-gray-200 rounded p-2"}>*/}
                            {/*        <FaFacebook size={"20"}  />*/}
                            {/*    </div>*/}
                            {/*    <div className={"bg-gray-200 rounded p-2"}>*/}
                            {/*        <FaLinkedinIn size={"20"}  />*/}
                            {/*    </div>*/}
                            {/*    <div className={"bg-gray-200 rounded p-2"}>*/}
                            {/*        <FaTwitter size={"20"}  />*/}
                            {/*    </div>*/}

                            {/*</div>*/}

                            {/*Horizontal Row*/}
                            <div className={"flex"}>
                                <hr/>
                                <p>OR</p>
                                <hr/>
                            </div>

                            {/* Form */}
                            <form className={"flex flex-col w-full px-3 gap-2"}>
                                <label htmlFor="email" className={"text-left"}>Email Address</label>
                                <input type="email" name="email" id="email" className={"rounded-lg text-lg outline-0 px-2 py-1 bg-gray-100"}/>
                                <label htmlFor="password" className={"text-left"}>Password</label>
                                <input type="password" name="password" id="password" className={"rounded-lg text-lg outline-0 px-2 py-1 bg-gray-100"}/>

                                <button type={"submit"} className={"bg-[#005ff9] text-white w-[80%] mx-auto my-2 rounded-xl py-1  "}>Sign In</button>


                                <p className={" text-xs"}>Don&apos;t have an account? <a href="#" className={"text-[#005ff9]"}>Register</a></p>

                            </form>
                        </div>

                    <div className="hidden lg:flex">
                        <Image src={bgUser} width="650" height="200" />
                    </div>

                </div>

                <div className="bg-white lg:hidden px-20">
                    <Image src={bgUser} layout={"responsive"} />
                </div>



            </div>
        </>

    );
};

export default SignIn;
