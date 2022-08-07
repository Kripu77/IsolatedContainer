import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Info from "../components/Info";
import Card from "../components/Card";
import Eth from "../components/Eth";
import Explore from "../components/Explore";
import Asset from "../components/Asset";
import ReactSlider from "../components/ReactSlider";



export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Nav />
      <Hero />
      <Landing />
      <Info />
      <Card />
      <Eth />
      <Explore />
      <Asset/>

      
  
    </main>
  );
}
