import LargeTiles from "@components/LargeTiles";
import Header from "@components/Header";
import Head from "next/head";
import Script from "next/script";
import Menu from "@components/Menu";
import MobileTiles from "@components/MobileTiles";
import { useEffect } from "react";

export default function Home() {
  const tileInfo = [
    {
      initialText: "WASH & WIN PRIZES",
      hoveredText: "Enter our prize raffle each time you wash with us.",
      bgColor: "#0CC0DF",
    },
    {
      initialText: "SELF SERVICE",
      hoveredText: "Available everyday. Last wash is at 7pm.",
      bgColor: "#FF66C4",
    },
    {
      initialText: "DROP OFF SERVICE",
      hoveredText:
        "Drop off available daily. Come Monday - Thursday for special pricing.",
      bgColor: "#CB6CE6",
    },
    {
      initialText: "PICKUP & DELIVERY",
      hoveredText: "Coming soon!",
      bgColor: "#FF914D",
    },
    {
      initialText:
        "OUR LOCATION 18005 Linden Blvd Queens, NY 11434 (929) 933-7507",
      hoveredText: "",
      bgColor: "#6422B8",
    },
    {
      initialText: "OPEN 7 DAYS 8AM - 8PM",
      hoveredText: "",
      bgColor: "#FFB859",
    },
  ];

  useEffect(() => {
    function tileTextHover(arr) {
      arr.forEach((element, i) => {
        const hoverDiv = document.getElementById("hover-div-" + (i + 1));
        const initialText = element.initialText;
        const hoveredText = element.hoveredText;

        hoverDiv.addEventListener("mouseenter", () => {
          if (hoveredText != "") hoverDiv.textContent = hoveredText;
        });
        hoverDiv.addEventListener("mouseleave", () => {
          if (hoveredText != "") hoverDiv.textContent = initialText;
        });
      });
    }
    tileTextHover(tileInfo);
  }, []);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>St. Albans Laundromat</title>
        <Script src="https://fonts.cdnfonts.com/css/open-sauce-one" />
        <Script src="https://fonts.cdnfonts.com/css/twister-2" />
      </Head>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
          <Header tileInfo={tileInfo} className="h-screen w-full flex items-center justify-center lg:col-span-2 md:col-span-5 bg-cover bg-center flex-col relative bgimg" />
          <LargeTiles
            tileInfo={tileInfo}
            className={
              "hide-on-small lg:col-span-3 grid grid-cols-2 gap-3 font-bold text-center text-white text-2xl w-full"
            }
            />
        </div>
      </main>
    </div>
  );
}
