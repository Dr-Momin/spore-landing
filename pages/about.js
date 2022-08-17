import React from 'react';

const AboutUs = () => {
    return (
        <div>

            <div>
                <h1>About Us</h1>
                <h1> We want to change how people send money.</h1>
            </div>


            <div className={"text-center"}>

                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    At Spore, we want to simplify how people interact with the various new payment methods globally, eliminating the "Do you have …?" question worldwide.
                </p>


                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>
                    Additionally, we are tired of seeing fees associated with things that shouldn't have fees, like giving money to friends or family. So, we are building a solution. Whoever and wherever you are, we aim to make sending money across borders free and simplify the financial accounts you need.
                </p>

                <p>
                    To achieve our goal, our amazing team has assembled to tirelessly work on improving your financial experience.
                </p>

            </div>

        </div>
    );
};

export default AboutUs;
