import { useEffect } from "react";
import gsap from "gsap";

const Product = () => {
  useEffect(() => {
    gsap.fromTo(".box", 
      { x: -300 }, 
      { x: 300, duration: 2 }
    );
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="box w-20 h-20 bg-red-500"></div>
    </div>
  );
};

export default Product;