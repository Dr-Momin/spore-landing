import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Features from "./features";

export default function Home() {
  return (
      <div>
          <Head>
              <title>Momin | Front-End Developers</title>
              <meta name={"description"}/>
          </Head>

          <div>
              <Navbar />
              {/*<SignIn />*/}
              {/*<SignUp />*/}
                <Features />




          </div>


      </div>
  )
}
