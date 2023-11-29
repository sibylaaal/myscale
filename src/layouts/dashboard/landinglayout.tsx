import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';

const Model: React.FC = () => {
  const gltf = useGLTF('/old_pc.glb'); 

  return (
    <>
   <div className='flex bg-slate-800'>
   
   <main className="relative h-screen  overflow-hidden  dark:bg-gray-800">
  <header className="z-30 flex items-center w-full h-24 sm:h-32">
    <div className="container flex items-center justify-between px-6 mx-auto">
      <div className="text-3xl font-black text-gray-800 uppercase dark:text-white">
        <img className='w-10 h-10' src={'/logo.png' }/>
        
              </div>
      <div className="flex items-center">
        <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
          <a href="#" className="flex px-6 py-2">
            
          </a>
          <a href="#" className="flex px-6 py-2">
            

          </a>
          <a href="#" className="flex px-6 py-2">
            
          </a>
          <Link to={"/register"} className="flex text-white  bg-cyan-400 px-6 py-2 rounded-md mr-2">
            register
          </Link>
          <Link to={"/login"} className="flex text-white  bg-cyan-400 px-6 py-2 rounded-md">
            login
          </Link>
        </nav>
        <button className="flex flex-col ml-4 lg:hidden">
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:"></span>
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:"></span>
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:"></span>
        </button>
      </div>
    </div>
  </header>
  <div className="relative z-20 flex items-center overflow-hidden  dark:bg-gray-800">
    <div className="container relative flex px-6 py-16 mx-auto">
      <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
        <span className="w-20 h-2 mb-12 bg-white dark:"></span>
        <h1 className="flex flex-col text-xl font-black leading-none text-white uppercase font-bebas-neue sm:text-4xl dark:text-white">
          Make your
          <span className="text-5xl sm:text-7xl">Api</span>
        </h1>
        <p className="text-sm text-white sm:text-base typing-effect ">
          Dimension of reality that makes change possible and 
          understandable  An
          indefinite and homogeneous environment in which natural events and
          human existence take place.
        </p>
        <div className="flex mt-8">
          <a
            href="#"
            className="px-4 py-2 mr-4 text-white uppercase bg-cyan-500 border-2 border-transparent rounded-lg text-md "
          >
            Get started
          </a>
          <a
            href="#"
            className="px-4 py-2 text-white uppercase bg-transparent border-2 border-white  rounded-lg dark:text-white  text-md"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
      <Canvas style={{ position: 'relative', top: -85, left: 0, width: '100%',zIndex:1, height: '70vw' }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 3]} />
      <Suspense fallback={null}>
        {gltf ? (
          <primitive object={gltf.scene} scale={[5, 5, 5]} position={[0, 0, 0]} />
        ) : null}
      </Suspense>
    </Canvas> 
      </div>
    </div>
  </div>
</main>


</div>
    
    </>
  );
};

export default Model;
