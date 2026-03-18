import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {

  useGSAP(() => {

    // 🟢 Cards animation
    gsap.fromTo(".card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          markers: true
        }
      }
    );

    // 🔵 Scroll text animation
    gsap.fromTo(".scroll-text",
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          markers: true
        }
      }
    );

  });

  return (
    <div className="bg-black text-white">

      <div className="h-[150vh] flex items-center justify-center">
        <h1 className="text-4xl">Scroll Down</h1>
      </div>

      <div className="cards-container min-h-screen p-10 bg-gray-900">
        <h2 className="text-3xl mb-10 text-center">Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-white text-black p-10 rounded-xl">Card1</div>
          <div className="card bg-white text-black p-10 rounded-xl">Card2</div>
          <div className="card bg-white text-black p-10 rounded-xl">Card3</div>
        </div>
      </div>

      <div className="scroll-section h-[150vh] flex items-center justify-center bg-black">
        <h2 className="scroll-text text-5xl font-bold">
          Smooth Scroll Animation
        </h2>
      </div>

    </div>
  );
};

export default Product;