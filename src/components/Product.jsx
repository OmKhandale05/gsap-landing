import { useEffect } from "react";
import gsap from "gsap";

const Product = () => {
  useEffect(() => {
    console.log("GSAP RUNNING");

    const el = document.querySelector(".box");
    console.log("ELEMENT:", el);

    gsap.to(".box", {
        x: 500,
        duration: 3,
        backgroundColor: "yellow",
        scale: 2,
        rotation: 360
      });

  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="box w-20 h-20 bg-red-500"></div>
    </div>
  );
};

export default Product;