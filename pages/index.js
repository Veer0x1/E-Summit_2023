import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/cardcomponent/Header";
import Navbar from "../components/Navbar";
import HeaderMain from "../components/header/header";
import Helpdesk from "../components/helpdesk/helpdesk";
import Testimonial from "../components/helpdesk/testimonial";
import Awesomefeature from "../components/Awesomefeature";
import Layout from "../components/layout";
export default function Home() {
  return (
    <div style={{ background: "black" }}>
      <Head>
        <title>E-Summit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeaderMain />
      <Header />
    
    
      <Layout />
      <Awesomefeature />
      <Helpdesk />
      <Testimonial />
      <Footer />
    </div>
  );
}
