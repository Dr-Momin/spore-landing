import Head from 'next/head'
import Navbar from "../components/Navbar";
import React from "react";
import ShieldIcon from "../components/ShieldIcon";
import CheckIcon from "../components/CheckIcon";
import Button from "../components/Button";
import Image from "next/image";
import images from "../public/assests";
import Footer from "../components/Footer";
import Hello from "../components/Hello";



export default function Home() {
  return (
      <div>
          <Head>
              <title>Spore Landing</title>
              <meta name={"description"}/>
          </Head>


          <Navbar/>



          <Hello />



      </div>
  )
}
