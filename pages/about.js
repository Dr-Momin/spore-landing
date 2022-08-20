import React from 'react';
import Image from "next/image";
import images from '../public/assests/index';
import {FaApple, FaFacebook, FaGoogle, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
    return (
        <>
            <Navbar/>
            <main className={"flex flex-col justify-center items-center pt-36 bg-[#FDFEFF]"}>

                {/*About Us*/}
                <section className={"text-center w-[90%] flex flex-col gap-10 justify-center items-center"}>
                    <div className={"text-center w-[90%] flex flex-col gap-4"}>
                        <h1 className={"text-[#005ff9]"}>About Us</h1>
                        <h1> We want to change how people send money.</h1>

                        <div className={"flex flex-col gap-6 pt-8"}>

                            <p>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                At Spore, we want to simplify how people interact with the various new payment methods globally, eliminating the "Do you have …?" question worldwide.
                            </p>


                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <p>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                Additionally, we are tired of seeing fees associated with things that shouldn't have fees, like giving money to friends or family. So, we are building a solution. Whoever and wherever you are, we aim to make sending money across borders free and simplify the financial accounts you need.
                            </p>

                            <p>
                                To achieve our goal, our amazing team has assembled to tirelessly work on improving your financial experience.
                            </p>

                        </div>
                    </div>


                    <div>
                        <Image src={images.about1} width={"500"} height={"300"} />
                    </div>
                </section>






                {/*Our Team section*/}
                <section className={"text-center space-y-10 py-16"}>
                    <h1>Our Team</h1>
                    <div className={"flex flex-col md:flex-row gap-28"}>
                        {/* Card 1*/}
                        <div className={"w-60 h-60 py-4 flex flex-col justify-between items-center bg-white shadow-xl rounded-lg"}>

                            <div className={"mt-[-3.5rem]"}>
                                <Image src={images.teamAvatar} width={"100"} height={"100"} />
                            </div>

                            <div className={"text-center"}>
                                <h2 className={"text-2xl font-bold"}>David P</h2>
                                <label>Founder</label>
                            </div>


                            <div className={"flex gap-3 "}>
                                <div className={"bg-gray-200 rounded-full p-2"}>
                                    <FaTwitter size={"20"}  />
                                </div>
                                <div className={"bg-gray-200 rounded-full p-2"}>
                                    <FaLinkedinIn size={"20"}  />
                                </div>
                            </div>
                        </div>

                        {/*    Card 2*/}
                        <div className={"w-60 h-60 py-4 flex flex-col justify-between items-center bg-white shadow-xl rounded-lg"}>

                            <div className={"mt-[-3.5rem]"}>
                                <Image src={images.teamAvatar} width={"100"} height={"100"} />
                            </div>

                            <div className={"text-center"}>
                                <h2 className={"text-2xl font-bold"}>Jonny X</h2>
                                <label>Founder</label>
                            </div>


                            <div className={"flex gap-3 "}>
                                <div className={"bg-gray-200 rounded-full p-2"}>
                                    <FaTwitter size={"20"}  />
                                </div>
                                <div className={"bg-gray-200 rounded-full p-2"}>
                                    <FaLinkedinIn size={"20"}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/*Send Money Section*/}
                <section className={"bg-white flex flex-col justify-center items-center text-center gap-8 pt-8"}>
                    <h1 className={"text-2xl md:text-4xl"}>Change How You Send Money</h1>
                    <button className={"bg-black text-white rounded-full px-16 py-1"}>Register</button>

                    <div className={"px-16"}>
                        <Image src={images.about2}  height={"1200"} />
                    </div>



                </section>


            </main>

            <Footer/>

        </>
    );
};

export default AboutUs;
