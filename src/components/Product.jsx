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
  
      gsap.fromTo(".char",
      {
        y: 120,
        opacity: 0,
        rotateX: 90,
        scale: 0.8,
        filter: "blur(10px)" //
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        filter: "blur(0px)", 
        stagger: 0.05,
        ease: "power3.out", 
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

gsap.to(".parallax-text", {
  y: -300,
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true
  }
});
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
          className="text-6xl font-bold text-white flex flex-wrap overflow-hidden"
        >
          {"AMAZING ANIMATION".split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
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

      <div className="parallax-section h-[200vh] bg-black relative overflow-hidden">

  <h1 className="parallax-text text-6xl font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    PARALLAX EFFECT
  </h1>

</div>
    </div>
  );
};

export default Product;
