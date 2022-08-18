import React, {useState} from 'react';
import Image from "next/image";
import navLogo from "../public/assests/img.png";
import user from "../public/assests/user.png"
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClick = () => {
        setToggleMenu(prev => !prev);
    }

    return (
        <div className={"h-20 w-full shadow-md fixed z-50 px-4 bg-white"}>
            <div className={"flex justify-between items-center w-full h-full px-10"}>
                <h2 className={"text-lg tracking-[0.3rem] text-[#005ff9]"}>SPORE</h2>

                <ul className={"hidden md:flex"}>
                    <Link href={"/"} >
                        <li className={"ml-10 text-sm hover:border-b font-bold "}>Home</li>
                    </Link>
                    <Link href={"/about"} >
                        <li className={"ml-10 text-sm hover:border-b font-bold"}>About Us</li>
                    </Link>
                    <Link href={"/features"} >
                        <li className={"ml-10 text-sm hover:border-b font-bold"}>Features</li>
                    </Link>

                </ul>

                <button className={"bg-[#005ff9] text-white px-6 py-1 rounded-full flex items-center justify-between"}> Sign in
                    <Image src={user} width={"20"} height={"20"} className={"pl-7"} /> </button>

                {!toggleMenu && <AiOutlineMenu className={" md:hidden"} size={"25"} onClick={handleClick} />}

                {/*{toggleMenu && <AiOutlineClose size={"25"} onClick={handleClick}/>}*/}

            </div>

            {
                toggleMenu && <div className={"fixed right-0 top-0 w-full h-screen bg-black/70 "}>
                    <div className={"fixed right-0 top-0 w-[70%] bg-white h-screen ease-in duration-500"}>

                        <div className={"p-4"}>
                            <AiOutlineClose size={"25"} onClick={handleClick}/>
                        </div>
                        <div className={"flex items-center justify-center"}>
                            <ul className={"flex flex-col"}>
                                <Link href={"/"} >
                                    <li className={"mt-10 text-sm uppercase hover:border-b"}>Home</li>
                                </Link>
                                <Link href={"/"} >
                                    <li className={"mt-10 text-sm uppercase hover:border-b"}>About</li>
                                </Link>
                                <Link href={"/"} >
                                    <li className={"mt-10 text-sm uppercase hover:border-b"}>Skills</li>
                                </Link>
                                <Link href={"/"} >
                                    <li className={"mt-10 text-sm uppercase hover:border-b"}>Projects</li>
                                </Link>
                                <Link href={"/"}>
                                    <li className={"mt-10 text-sm uppercase hover:border-b"}>Contacts</li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                </div>
            }



        </div>
    );
};

export default Navbar;
