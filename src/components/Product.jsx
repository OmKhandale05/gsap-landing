import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Product = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".box",
      { x: -800 },
      {
        x: 500,
        scrollTrigger: {
          trigger: ".box",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: true
        }
      }
    );

  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center bg-black">
      <div className="box w-24 h-24 bg-red-500"></div>
    </div>
  );
};

export default Product;