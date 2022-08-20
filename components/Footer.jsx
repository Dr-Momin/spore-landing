import React from 'react';
import {FaApple, FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import Button from "./Button";
import Icons from "./Icons";

const Footer = () => {
    return (
        <div className={"w-full bg-white py-12 bg-[#FDFEFF]"}>
            {/*Button and Social Icons*/}
            <div className={" flex flex-col justify-center items-center gap-8 md:gap-0 md:flex-row md:justify-around w-full "}>
                <div >
                    <Button/>
                </div>

                {/* Imported Icons as SVG from components folder*/}
                <Icons/>

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



            </div>


            {/* Line Break */}
            <div className={"h-0.5 bg-gray-200 w-[90%] my-8 mx-auto"}></div>


            <div className={"flex justify-center items-center "}>
                <ul className={"flex flex-row text-center gap-4 md:gap-12  "}>
                    <Link href={"/"} >
                        <li className={" text-sm hover:border-b font-bold "}>Home</li>
                    </Link>
                    <Link href={"/about"} >
                        <li className={" text-sm hover:border-b font-bold"}>About Us</li>
                    </Link>
                    <Link href={"/contact"} >
                        <li className={" text-sm hover:border-b font-bold"}>Contact</li>
                    </Link>
                    <Link href={"/help"} >
                        <li className={" text-sm hover:border-b font-bold"}>Help</li>
                    </Link>

                </ul>
            </div>


        </div>
    );
};

export default Footer;
