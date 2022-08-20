import React from 'react';
import ShieldIcon from "./ShieldIcon";
import CheckIcon from "./CheckIcon";
import Button from "./Button";
import Image from "next/image";
import images from "../public/assests";
import Footer from "./Footer";

const Main = () => {
    return (
        <>


            <main className={"w-full flex flex-col justify-center items-center"}>
                {/*Section: Home*/}
                <section className={"bg-blue-100 w-full flex justify-center items-center"}>

                    <div className={"w-[80%]  bg-blue-100 flex flex-col md:flex-row pt-40 md:justify-between"}>

                        <div className={"flex flex-col gap-6 items-center md:w-[70%] lg:w-[50%]"}>

                            <div className={"flex flex-col items-center md:items-start md:pt-3 lg:pt-8"}>
                                <button className={"flex text-[#005ff9] gap-4 items-center pb-6"}> <ShieldIcon/> Send Securely</button>
                                <h1 className={"text-center md:text-left"}>Stop Spending On <span className={"text-[#005ff9]"}>Sending</span> </h1>

                                <div className={"flex flex-col items-center md:items-start"}>
                                    <h2 className={"text-xl font-medium pt-8 pb-4"}>We Prioritize your experience</h2>
                                    <p className={"flex items-center gap-4"}> <CheckIcon/> Zero fees Anywhere.</p>
                                    <p className={"flex items-center gap-4"}> <CheckIcon/>  Zero friction Anytime</p>
                                </div>

                                <div className={"mt-12"}>
                                    <Button />
                                </div>
                            </div>

                        </div>

                        <div className={"md:mt-[-6.5rem]"}>
                            <Image src={images.home1} width={500} height={600}/>
                        </div>
                    </div>

                </section>



                {/*Section: What we offer*/}
                <section className={"w-[75%] mt-20 flex flex-col gap-12 justify-center items-center"}>
                    <h1>What we offer</h1>

                    {/*Card 01*/}
                    <div className={"w-full lg:w-[70%] flex flex-col md:flex-row items-center justify-center shadow-xl bg-white   rounded-lg"}>
                        <div className={"p-6  sm:p-14 md:p-6  h-80 flex flex-col gap-4 md:w-[70%] lg:w-[80%]"}>
                            <label className={"text-[#005ff9] font-bold bg-blue-100 w-16 px-1 rounded "}>SPORE</label>
                            <h2 className={"text-[#005ff9] text-lg"}>The fastest way of international transactions</h2>
                            <p>Send money internationally with <span className={"text-[#005ff9] font-bold"}>0 fees</span>  and convert to nearly any digital form of currency within the app.</p>
                            <div className={" mx-auto lg:pt-8 xl:pt-10"}>
                                <Button/>
                            </div>
                        </div>


                        <div>
                            <Image src={images.home2} width={"400"} height={"300"} />
                        </div>
                    </div>

                    {/*Card 02*/}
                    <div className={"w-full lg:w-[70%] flex flex-col md:flex-row items-center justify-center shadow-xl bg-white   rounded-lg"}>
                        <div className={"p-6  sm:p-14 md:p-6  h-80 flex flex-col gap-4 md:w-[70%] lg:w-[80%]"}>
                            <label className={"text-[#005ff9] font-bold bg-blue-100 w-16 px-1 rounded"}>SPORE</label>
                            <h2 className={"text-[#005ff9] text-lg"}>Spore enables you to stop paying fees</h2>
                            <p>save anywhere from 1-10% in addition to flat fees for similar services</p>
                            <div className={" mx-auto lg:pt-8 xl:pt-10"}>
                                <Button/>
                            </div>


                        </div>
                        <div>
                            <Image src={images.home3} width={"400"} height={"300"} />
                        </div>
                    </div>

                </section>

                {/*Section: Deposit*/}
                <section className={" mt-16"}>
                    <div className={""}>
                        {/*<Image src={images.artboard} height={"2000"} id={"artboard"} />*/}
                    </div>

                    <div className={"bg-blue-400 flex flex-col md:flex-row justify-center items-center gap-8 p-6 px-20 md:gap-32"}>
                        <div className={""}>
                            <Image src={images.home4} height={"300"} width={"150"} />
                        </div>

                        <div className={"text-white space-y-4 md:w-[50%] lg:w-[30%]"}>
                            <h2 className={"text-3xl"}>Deposit</h2>
                            <h2 className={"text-lg"}>Send and Spend in different ways.</h2>
                            <p>We are happily flexible in how you choose to deposit and withdraw money. We plan to offer a variety of methods to add to your balance while also letting you send it to global and local leaders in the payment space.</p>
                        </div>

                    </div>

                </section>

                {/*Section: Leave Fees Behind*/}
                <section className={"pt-8 text-center w-full border-8"}>
                    <h1 className={"text-[#005ff9]"}>Leave Fees Behind</h1>
                    <p>Join the movement for financial flexibility.</p>

                    <div className={"pt-12"}>
                        <Image src={images.home5}  height={"1500"} />
                    </div>
                </section>

                {/*Footer*/}
                <Footer />
            </main>

        </>
    );
};

export default Main;
