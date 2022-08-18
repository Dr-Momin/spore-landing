import React from 'react';
import Navbar from "../components/Navbar";
import Image from "next/image";
import images from '../public/assests/index';
import Footer from "../components/Footer";

const Features = () => {
    return (
        <div>
            <Navbar/>

            {/*Heading*/}
            <div className={"h-96 w-full flex flex-col justify-center items-center "}>
                <div className={"w-[95%] sm:w-[80%] md:w-[70%] lg:w-[50%] text-center space-y-5"}>
                    <h1 className={"text-[#005ff9]"}>Features</h1>
                    <h1>Spore is an easy way to spen,
                        send, and save money.</h1>
                </div>

            </div>


            {/*Line Break*/}
            <div className={"h-0.5 bg-gray-200 w-[90%]"}></div>


            <div className={"flex flex-col justify-center items-center gap-12"}>
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
            </div>




            {/*Footer*/}
            <Footer/>

        </div>
    );
};

export default Features;
