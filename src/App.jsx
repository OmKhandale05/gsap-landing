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
    <div className='bg-black text-white h-screen flex items-center justify-center'>
      <h1 className='text-4xl'>GSAP Start</h1>
      
    </div>
      )
}

export default App
