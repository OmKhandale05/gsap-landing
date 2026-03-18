import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Product = () => {
  const pinRef = useRef(null);
  const textRef = useRef(null);

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
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const ctx = gsap.context(() => {
  
      gsap.fromTo(textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            markers: true
          }
        }
      );
  
    });
  
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        style={{
          height: "150vh",
          background: "black",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Scroll Down
      </div>
      <div className="h-[150vh] flex items-center justify-center bg-black">
        <h1
          ref={textRef}
          className="text-6xl font-bold text-white overflow-hidden"
        >
          AMAZING ANIMATION
        </h1>
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
