import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Product = () => {
  const pinRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: "+=1000",
        pin: true,
        markers: true,
      });
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div style={{ height: "150vh", background: "black", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        Scroll Down
      </div>

      <div
        ref={pinRef}
        style={{
          height: "100vh",
          background: "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1>PIN WORKING 🔥</h1>
      </div>

      <div style={{ height: "150vh", background: "black" }}></div>
    </div>
  );
};

export default Product;