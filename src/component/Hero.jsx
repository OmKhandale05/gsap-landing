import { useLayoutEffect } from "react";
import gsap from "gsap";

const Hero = () => {
    useLayoutEffect(() => {
        const tl = gsap.timeline();

        tl.from(".title", {
            y: -50,
            opacity: 0,
            duration: 1
        })

        .from(".subtitle",{
            y: -50,
            opacity: 0,
            duration:1,
            
        })

        .from(".btn", {
            scale: 0,
            duration: 0.5,
            opacity: 0,
            duration: 0.5
            
        });
        
    }, []);
    return ( 
        <div className="h-screen flex flex-col justify-center items-center gap-6 bg-black text-white">
            <h1 className="title text-5xl font-bold">GSAP Landing</h1>
            <p className="subtitle text-lg text-gray-400">
                Learn animations the right way.
            </p>
            <button className="btn bg-white text-black px-6 py-2 rounded">
                Get Started.
            </button>
        </div>
     );
}
 
export default Hero;
