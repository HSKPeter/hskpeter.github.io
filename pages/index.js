import React from "react";
import config from "../config/config";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/home/GetInTouch";
import Head from 'next/head';
import Home from '../components/Home'

const App = () => {
  const {getInTouch} = config();
  return (
    <>
      <Head>
        <title>Personal site | Peter H.</title>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <Home />
      <Footer>
        <GetInTouch
          heading={getInTouch.heading}
          message={getInTouch.message}
          profileNameOfLinkedIn={getInTouch.profileNameOfLinkedIn}
          linkOfLinkedIn={getInTouch.linkOfLinkedIn}
        />
      </Footer>
    </>
  );
};

export default App;
