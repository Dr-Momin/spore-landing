import React from 'react';
import Navbar from "../components/Navbar";
import Image from "next/image";
import images from '../public/assests/index';
import {FaApple, FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Link from "next/link";

const Features = () => {
    return (
        <div>
            <Navbar/>

            {/*Heading*/}
            <div className={"h-96 w-full flex flex-col justify-center items-center "}>
                <div className={"w-[95%] sm:w-[80%] md:w-[70%] lg:w-[50%] text-center"}>
                    <h1>Features</h1>
                    <h1>Spore is an easy way to spen,
                        send, and save money.</h1>
                </div>

            </div>


            {/*Line Break*/}
            <div className={"h-0.5 bg-gray-200 w-[90%]"}></div>


            {/*Spend Section*/}
            <div className={"flex flex-col md:flex-row gap-4 justify-center items-center w-[85%] "}>
                <div className={"w-[100%] md:w-[50%] "}>
                    <label>Spend</label>
                    <h1>Spend however you need.</h1>
                    <p>With Spore, you can unlock the power of virtual cards to pay online or where tap-and-go is accepted, transfer your balance to other apps to never feel restricted, and send money directly on the app to other users.</p>
                </div>

                <div>
                    <Image src={images.mobile1} width={"600"} height={"400"}  />
                </div>

            </div>

            {/*Line Break*/}
            <div className={"h-0.5 bg-gray-200 w-[90%]"}></div>

            {/*Billing Section*/}
            <div className={"flex flex-col md:flex-row gap-4 justify-center items-center w-[85%] "}>
                <div className={"w-[100%] md:w-[50%] "}>
                    <label>Billing</label>
                    <h1>See your charges and deposits in one place</h1>
                    <p>Access your log of payments and money sent in one place.</p>
                    <p>At Spore, we work hard to make your transactions as up-to-date and transparent as possible</p>
                </div>

                <div>
                    <Image src={images.mobile2} width={"600"} height={"400"} />
                </div>
            </div>







            {/*Footer*/}
            <div className={"w-full "}>
                {/*Button and Social Icons*/}
                <div className={"flex justify-around w-full "}>
                    <button className={"bg-black text-white rounded-full px-16 py-1"}>Register</button>

                    <div className={"flex gap-3"}>
                        <div className={"bg-gray-200 rounded p-2"}>
                            <FaGoogle size={"20"}  />
                        </div>
                        <div className={"bg-gray-200 rounded p-2"}>
                            <FaApple size={"20"}  />
                        </div>
                        <div className={"bg-gray-200 rounded p-2"}>
                            <FaFacebook size={"20"}  />
                        </div>
                        <div className={"bg-gray-200 rounded p-2"}>
                            <FaLinkedinIn size={"20"}  />
                        </div>
                        <div className={"bg-gray-200 rounded p-2"}>
                            <FaTwitter size={"20"}  />
                        </div>
                    </div>
                </div>


                <div className={"h-0.5 bg-gray-200 w-[90%]"}></div>
                <div className={"flex justify-center items-center"}>
                    <ul className={"hidden md:flex"}>
                        <Link href={"/"} >
                            <li className={"ml-10 text-sm hover:border-b font-bold "}>Home</li>
                        </Link>
                        <Link href={"/"} >
                            <li className={"ml-10 text-sm hover:border-b font-bold"}>About Us</li>
                        </Link>
                        <Link href={"/"} >
                            <li className={"ml-10 text-sm hover:border-b font-bold"}>Contact</li>
                        </Link>
                        <Link href={"/"} >
                            <li className={"ml-10 text-sm hover:border-b font-bold"}>Help</li>
                        </Link>

                    </ul>
                </div>


            </div>

        </div>
    );
};

export default Features;
