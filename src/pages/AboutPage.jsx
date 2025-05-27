import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import RafiNameCard from "../components/name-card/rafi";
import Namecard from "../components/name-card/nizel";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen py-24 ">
        <div className="flex gap-8 flex-wrap items-center justify-center w-full px-4">
        
        <RafiNameCard />
        {/* Panggil kartu nama kamu dibawah sini..... */}
        <Namecard />


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
