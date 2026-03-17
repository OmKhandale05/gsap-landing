import { useEffect } from 'react'
import './App.css'
// import Hero from './component/Hero'
import gsap from 'gsap'

function App() {
  useEffect(()=> {
    console.log("gsap running");
    gsap.fromTo("h1", 
    {opacity: 0},
    {opacity:1 , duration: 2});
  }, []);
  

  return (
    <div className='bg-black text-white h-screen flex flex-col items-center gap-4 justify-center'>
      <h1 className='title text-4xl'>GSAP Start</h1>
      <p className='subtitle text-gray-400'>Learning step by step</p>
      <button className='btn bg-white text-black px-4 py-2 rounded-lg '>
        Start
      </button>
      
    </div>
      )
}

export default App
