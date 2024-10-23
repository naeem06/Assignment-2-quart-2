
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Footer from "./component/Footer/Footer";
import About from "./About/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Footer/>
    </div>
  );
}
