import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Product = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".card",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      ".scroll-text",
      { x: -800, opacity: 0 }, // 🔥 BIG movement
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".scroll-text",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl">Scroll Down 👇</h1>
      </div>

      <div className="cards-container min-h-screen p-10 bg-gray-900">
        <h2 className="text-3xl mb-10 text-center">Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-white text-black p-10 rounded-xl">Card 1</div>
          <div className="card bg-white text-black p-10 rounded-xl">Card 2</div>
          <div className="card bg-white text-black p-10 rounded-xl">Card 3</div>
        </div>
      </div>
      <div className="scroll-section h-[150vh] flex items-center justify-center bg-black">
        <h2 className="scroll-text text-5xl font-bold">
          Smooth Scroll Animation 🚀
        </h2>
      </div>
    </div>
  );
};

export default Product;
