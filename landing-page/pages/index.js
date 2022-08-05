import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import Info from "../components/Info";


export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Nav />
      <Hero />
      <Landing />
      <Info />
    </main>
  );
}
