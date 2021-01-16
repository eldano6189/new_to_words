import Head from "next/head";
import HowNTWWorksSection from "./home-page/how-NTW-works/howNTWWorksSection";
import LandingSection from "./home-page/landing-section/landingSection";
import GrammerlyBanner from "../components/advert-component/grammerlyBanner";
import BenefitsNTW from "./home-page/benefits-NTW/benefitsNTW";
import ContactSection from "./home-page/contact-section/contactSection";
import ScrollAnimation from "../components/scroll-animation/scrollAnimation";

export default function Index() {
  return (
    <>
      <Head>
        <title>NewToWords - The Home of Spelling</title>
      </Head>
      <div className="container-homepage">
        <img className="bkgrd-img" src="/images/bkgrd.jpg" alt="Bkgrd" />
        <LandingSection />
        <HowNTWWorksSection />
        <GrammerlyBanner />
        <BenefitsNTW />
        <GrammerlyBanner />
        <ContactSection />
        <ScrollAnimation />
      </div>
      <style jsx>{`
        .container-homepage {
          margin-top: 6vh;
          overflow-x: hidden;
          width: 100%;
          height: auto;
        }

        .bkgrd-img {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          z-index: -1;
          filter: brightness(40%) contrast(90%);
          -webkit-filter: brightness(40%) contrast(90%);
          -moz-filter: brightness(40%) contrast(90%);
          clip-path: polygon(0 95%, 100% 90%, 100% 0, 0 0);
        }
      `}</style>
    </>
  );
}
