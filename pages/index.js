import LargeTiles from "@components/LargeTiles";
import Header from "@components/Header";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  const tileInfo = [
    {
      initialText: "DRY CLEAN",
      hoveredText:
        "Dry Cleaning available with turnaround time usually 24-48 hours. Call for pricing.",
      bgColor: "#0CC0DF",
      url: "",
    },
    {
      initialText: "SELF SERVICE",
      hoveredText: "Available everyday. Last wash is at 6:30pm.",
      bgColor: "#FF66C4",
      url: "",
    },
    {
      initialText: "DROP OFF SERVICE",
      hoveredText:
        "Drop off available daily. Come Monday - Thursday for special pricing.",
      bgColor: "#CB6CE6",
      url: "",
    },
    {
      initialText: "PICKUP & DELIVERY",
      hoveredText:
        "Schedule Pickup & Delivery with our partners at Laundry Pickup Day. Click here for more information",
      bgColor: "#FF914D",
      url: "https://laundrypickupday.com/",
    },
    {
      initialText:
        "OUR LOCATION 18005 Linden Blvd Queens, NY 11434 (929) 933-7507",
      hoveredText: "",
      bgColor: "#6422B8",
      url: "",
    },
    {
      initialText: "OPEN 7 DAYS 8AM - 8PM",
      hoveredText: "",
      bgColor: "#FFB859",
      url: "",
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
          <Header
            tileInfo={tileInfo}
            className="h-screen w-full flex items-center justify-center lg:col-span-2 md:col-span-5 bg-cover bg-center flex-col relative bgimg"
          />
          <LargeTiles
            tileInfo={tileInfo}
            className={
              "pr-5 hide-on-small lg:col-span-3 grid grid-cols-2 gap-3 font-bold text-center text-white text-2xl w-full"
            }
          />
        </div>
      </main>
    </div>
  );
}
