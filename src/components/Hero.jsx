import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
    useEffect(()=> {
        const tl = gsap.timeline();
    
        tl.fromTo(".title",
        {opacity: 0, y: 50},
        {opacity:1 , y:0, duration: 1})
    
        .fromTo(".subtitle",
        {opacity:0, y: 50},
        {opacity: 1, y: 0, duration: 1})
    
        .fromTo(".btn",
        {opacity: 0, scale: 0},
        {opacity: 1, scale: 1, duration: 0.5});
      }, []);

    return ( 
        <div className='bg-black text-white h-screen flex flex-col items-center gap-4 justify-center'>
      <h1 className='title text-4xl'>GSAP Start</h1>
      <p className='subtitle text-gray-400'>Learning step by step</p>
      <button className='btn bg-white text-black px-4 py-2 rounded-lg '>
        Start
      </button>
      
    </div>
     );
}
 
export default Hero;