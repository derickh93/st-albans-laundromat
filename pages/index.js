import Head from "next/head";
import { useEffect } from "react";

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

    const tham = document.querySelector(".tham");

    tham.addEventListener("click", () => {
      tham.classList.toggle("tham-active");
      var para = document.getElementById("tham-menu-div");
      para.classList.toggle("tham-menu");
    });
  }, []);

  return (
    <div>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/twister-2"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/open-sauce-one"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>St. Albans Laundromat</title>
      </Head>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 ">
          <div className="h-screen w-full h-full flex items-center justify-center lg:col-span-2 md:col-span-5 bg-cover bg-center flex flex-col bg-[url('/laundry-store.jpg')] relative ">
            <div className="absolute transform top-0 text-center pt-10 font-bold">
              <div class="lg:hidden tham tham-e-squeeze tham-w-9">
                <div class="tham-box">
                  <div class="tham-inner" />
                </div>
              </div>{" "}
              <span className="title text-[#004AAD] text-[90px] drop-shadow-lg">
                St. Albans
              </span>
              <br />
              <span className="text-[#FFDE59] text-[40px] drop-shadow-lg">
                Laundromat
              </span>
              <div
                id="tham-menu-div"
                className="grid grid-cols-1 gap-1 font-bold text-center text-white text-2xl w-full tham-menu"
              >
                <div
                  class="bg-[#0CC0DF] tiles flex flex-col h-full justify-center items-center opacity-80 px-4 py-3"
                  role="alert"
                >
                  <p class="font-bold">
                    {" "}
                    WASH & WIN PRIZES
                  </p>
                  <p class="text-sm">
                  Enter our prize raffle each time you wash with us.
                  </p>
                </div>
                <div className="bg-[#FF66C4] tiles flex flex-col h-full justify-center items-center opacity-80">
                  SELF <br></br>SERVICE
                </div>
                <div className="bg-[#CB6CE6] tiles flex flex-col h-full justify-center items-center opacity-80">
                  DROP OFF<br></br>SERVICE
                </div>
                <div className="bg-[#FF914D] tiles flex flex-col h-full justify-center items-center opacity-80">
                  PICK UP AND <br></br>DELIVERY
                </div>
                <div className="bg-[#6422B8] tiles flex flex-col h-full justify-center items-center opacity-80">
                  OUR LOCATION
                </div>
                <div className="bg-[#FFB859] tiles flex flex-col h-full justify-center items-center opacity-80">
                  OPEN 7 DAYS<br></br>8AM - 8PM
                </div>
              </div>{" "}
            </div>

            <div className="absolute transform bottom-0 text-white text-center items-center">
              <div className="flex flex-row items-center justify-evenly">
                <div>
                  <a
                    className="btn btn-social-icon btn-facebook"
                    href="https://www.facebook.com/stalbanslaundromat"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>{" "}
                  </a>
                </div>
                <div> Website by</div>
                <div>
                  <a
                    className="btn btn-social-icon btn-instagram"
                    href="https://instagram.com/stalbanslaundromat"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="pb-2">
                <p className="text-dark">
                  <a className="text-dark" href="https://derickh.dev">
                    <u>Queens Software Solutions</u>
                  </a>
                  <br />
                  Copyright © 2023 | Saint Albans Laundromat
                </p>
              </div>
            </div>
          </div>
          <div className="hide-on-small lg:col-span-3 flex">
            <div className="grid grid-cols-2 gap-3 font-bold text-center text-white text-2xl w-full">
              <div
                id="hover-div-1"
                className="bg-[#0CC0DF] tiles flex flex-col h-full justify-center items-center"
              >
                WASH & <br></br>WIN PRIZES
              </div>
              <div
                id="hover-div-2"
                className="bg-[#FF66C4] tiles flex flex-col h-full justify-center items-center"
              >
                SELF <br></br>SERVICE
              </div>
              <div
                id="hover-div-3"
                className="bg-[#CB6CE6] tiles flex flex-col h-full justify-center items-center"
              >
                DROP OFF<br></br>SERVICE
              </div>
              <div
                id="hover-div-4"
                className="bg-[#FF914D] tiles flex flex-col h-full justify-center items-center"
              >
                PICK UP AND <br></br>DELIVERY
              </div>
              <div className="bg-[#6422B8] tiles flex flex-col h-full justify-center items-center">
                OUR LOCATION<br></br>18005 Linden Blvd<br></br>Queens, NY 11434
                <br></br>(929) 933-7507
              </div>
              <div className="bg-[#FFB859] tiles flex flex-col h-full justify-center items-center">
                OPEN 7 DAYS<br></br>8AM - 8PM
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
