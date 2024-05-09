import { useState, useEffect } from "react";
import Menu from "./icons/Menu";
import Close from "./icons/Close";
import Buscador from "./Buscador";
import NavLinks from "./NavLinks";
import cubiertos from '../assets/cubiertos.png'
const Header = () => {

  const [isTopVisible, setTopVisible] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);

  const toggleTop = () => setTopVisible(!isTopVisible);

  
  
  return (
     
      <>
        <header id="header-nav" className="fixed top-0 z-50 w-full px-6 py-4">

          <div className="flex justify-between mx-auto max-w-12xl items-center">
            <img src={cubiertos} alt="logo" className='w-12' />
            <div className="lg:flex md:flex justify-center -mt-3 hidden">
                  <h1 className="text-center text-3xl tracking-wider text-yellow-300 w-32 h-5 ">ALLRECIPES</h1>
            </div>

            <div className="flex justify-center md:hidden lg:hidden">
                <div>
                  {/* Botón para toggle offcanvas Top */}
                  <button
                    type="button"
                    className="abrir_cerrar menu_icon inline-flex items-center justify-center px-0.5 py-0.5 text-sm font-semibold text-white bg-transparent border border-transparent rounded-full gap-x-2 hover:shadow-lg hover:shadow-yellow-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 z-50 -mt-4 top-[50%] left-[50%]"
                    onClick={toggleTop}
                  >
                     {isTopVisible ? <Close/> : <Menu/>} 
                  </button>

                  {/* Offcanvas Top */}
                    <div
                     className={`fixed top-0 inset-x-0 transition-all duration-1000 transform ${isTopVisible ? 'translate-y-0' : '-translate-y-full'} max-h-960 h-[100vh] w-full z-80 border-b bg-yellow-800/90 dark:border-gray-700 ${isTopVisible ? 'translate-y-0' : '-translate-y-full'}`}
                     tabIndex="-1"
                    > 
                        <section className="flex flex-col text-2xl font-medium tracking-wider text-center text-white text-pretty mt-20 gap-10  ">
                                  <NavLinks/>                
                        </section>
                          
                    </div>        
                </div>
            </div>
      
            <nav
              
                className="fixed w-full h-dvh inset-0 text-2xl flex flex-col items-center justify-center gap-8 -translate-y-full transition-transform duration-2000 target:translate-y-0 md:static md:h-[initial] md:bg-[initial] md:text-xl md:flex-row  text-white"
              >
                <div className="flex justify-center ">
                  
                </div>    

              </nav>        
             <Buscador/>
            </div>
              
   </header> 
          
    </> 
  )
}

export default Header;