// import About from './components/About'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <>
  
//       <div className="relative h-screen w-screen bg-slate-950">
//         {/* Left Gradient
//         <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))] z-0"></div>
        
//         {/* Right Gradient */}
//         <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))] z-0"></div>

//         {/* Navbar (Ensure it's above everything) */}
//         <div className="container mx-auto px-10">
//           <Navbar />
//           <Hero/>
//           <About/>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      {/* Fixed Gradient Background */}
      <div className="fixed top-0 left-0 w-full h-full bg-slate-950">
        {/* Gradient Layer */}
        <div className="fixed inset-0 w-full h-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.2),rgba(255,255,255,0))]"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
