import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Product = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".card",
        {opacity: 0, y: 80 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".cards-container",
                start: "top 85%",
                markers: true
            },
        });

    }, []);
    return ( 
        <div className="bg-black text-white">
            <div className="h-[150vh] flex items-center justify-center">
                <h1 className="text-4xl">Scroll Down</h1>
            </div>

            <div className="cards-container min-h-screen p-10 bg-gray-900">
            <h2 className="text-3xl mb-10 text-center">Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card bg-black p-6 rounded-xl">Card1</div>
                <div className="card bg-black p-6 rounded-xl">Card2</div>
                <div className="card bg-black p-6 rounded-xl">Card3</div>
            </div>
        </div>
    

        </div>
        
     );
}
 
export default Product;