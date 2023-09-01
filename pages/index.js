import Body from "@components/Body";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Menu from "@components/Menu";

export default function Home() {
  useEffect(() => {
    const hoverDiv1 = document.getElementById("hover-div-1");
    const initialText1 = "WASH & WIN PRIZES";
    const hoveredText1 = "Enter our prize raffle each time you wash with us.";

    hoverDiv1.addEventListener("mouseenter", () => {
      hoverDiv1.textContent = hoveredText1;
    });
    hoverDiv1.addEventListener("mouseleave", () => {
      hoverDiv1.textContent = initialText1;
    });

    const hoverDiv2 = document.getElementById("hover-div-2");
    const initialText2 = "SELF SERVICE";
    const hoveredText2 = "Available everyday. Last wash is at 7pm.";

    hoverDiv2.addEventListener("mouseenter", () => {
      hoverDiv2.textContent = hoveredText2;
    });

    hoverDiv2.addEventListener("mouseleave", () => {
      hoverDiv2.textContent = initialText2;
    });

    const hoverDiv3 = document.getElementById("hover-div-3");
    const initialText3 = "DROP OFF SERVICE";
    const hoveredText3 =
      "Drop off available daily. Come Monday - Thursday for special pricing.";

    hoverDiv3.addEventListener("mouseenter", () => {
      hoverDiv3.textContent = hoveredText3;
    });

    hoverDiv3.addEventListener("mouseleave", () => {
      hoverDiv3.textContent = initialText3;
    });

    const hoverDiv4 = document.getElementById("hover-div-4");
    const initialText4 = "PICKUP & DELIVERY";
    const hoveredText4 = "Coming soon!";

    hoverDiv4.addEventListener("mouseenter", () => {
      hoverDiv4.textContent = hoveredText4;
    });

    hoverDiv4.addEventListener("mouseleave", () => {
      hoverDiv4.textContent = initialText4;
    });
  }, []);

  return (
    <div>
      <Head lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>St. Albans Laundromat</title>
        <Script src="https://fonts.cdnfonts.com/css/open-sauce-one" />
        <Script src="https://fonts.cdnfonts.com/css/twister-2" />
      </Head>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
          <div className="h-screen w-full flex items-center justify-center lg:col-span-2 md:col-span-5 bg-cover bg-center flex-col relative bgimg">
            <Header />
            <Footer />
          </div>
          <Body />
        </div>
      </main>
    </div>
  );
}
