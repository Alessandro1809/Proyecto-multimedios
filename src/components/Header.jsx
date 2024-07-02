import { useState } from "react";
import Buscador from "./Buscador";
import NavLinks from "./NavLinks";
import cubiertos from '../assets/cubiertos.png'
import { useForm } from "../api/hooks/useForm";
import { useRecipe } from "../api/hooks/recipes";
import { useLocation, useParams, Link } from "react-router-dom";;
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import { Favorite, Menu, Close, DeleteForeverRounded, Cancel } from "@material-ui/icons";

const Header = () => {

  const { id } = useParams();
  const location = useLocation();
  const { handleFavorite, onOpenModal, onCloseModal, open, handleDelete } = useForm();
  const [isTopVisible, setTopVisible] = useState(false);
  const { existeStorage, individualRecipe } = useRecipe();
  const toggleTop = () => setTopVisible(!isTopVisible);

  return (

    <>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='p-6'>
          <h2 className='text-xl font-medium'>
            ¿You want to <span className="text-red-400 font-bold">permanently remove</span> the item from favorites?
          </h2>
        </div>
        <footer className='flex justify-center'>
          <button
            id='cancel'
            onClick={onCloseModal}
            className='delete mx-2 my-4 w-auto h-auto p-2 text-lg transition-all duration-300 md:w-40 hover:bg-cyan-400/80 border-b border-cyan-400 md:text-lg rounded-lg flex justify-center items-center'
          >
            Close &nbsp;<Cancel />
          </button>
          <button
            id='delete'
            onClick={handleDelete}
            className='delete mx-2 my-4 w-auto h-auto p-2 text-lg bg-rose-400 transition-all duration-300 md:w-40 hover:bg-rose-400/80 border-b border-rose-400 md:text-lg rounded-lg'
          >
            Remove to {<Favorite />}
          </button>
        </footer>
      </Modal>
      <header id="header-nav" className="fixed top-0 z-50 w-full px-6 py-4">

        <main className="flex justify-between mx-auto max-w-12xl items-center">

          <Link to={"/"}><div className="lg:flex md:flex items-center gap-1 bg-slate-50/50 rounded-lg w-auto h-full p-2">
            <img src={cubiertos} alt="logo" className='w-12' />
            <div className="lg:flex md:flex justify-center -mt-3 hidden">
              <h1 className=" text-4xl tracking-wider text-orange-400 w-72 h-5 font-medium">ALLRECIPES</h1>
            </div>
          </div></Link>

          <div className="flex justify-center md:hidden lg:hidden">
            <div>
              {/* Botón para toggle offcanvas Top */}
              <button
                type="button"
                className="abrir_cerrar bg-slate-50/50 border-red-400 menu_icon inline-flex items-center justify-center p-2 text-sm font-semibold text-white border border-transparent rounded-full gap-x-2 hover:shadow-lg hover:shadow-orange-300 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 z-50 -mt-4 top-[50%] left-[50%] hover:bg-orange-400/80 transition-all duration-300"
                onClick={toggleTop}
              >
                {isTopVisible ? <Close /> : <Menu style={{ color: 'black' }} />}
              </button>

              {/* Offcanvas Top */}
              <div
                className={`fixed top-0 inset-x-0 transition-all duration-1000 transform ${isTopVisible ? 'translate-y-0' : '-translate-y-full'} max-h-960 h-[100vh] w-full z-80 border-b bg-red-800/90 dark:border-gray-700 ${isTopVisible ? 'translate-y-0' : '-translate-y-full'}`}
                tabIndex="-1"
              >
                <section className="flex flex-col text-2xl font-medium tracking-wider text-center text-white text-pretty mt-32 gap-10  ">
                  <NavLinks />
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
          {location.pathname !== '/' ?
            existeStorage(id) ?
              <button className="bg-orange-400/50 border border-red-400 transition-all duration-300 rounded-full p-2 hover:bg-orange-500/70" onClick={() => onOpenModal(id)}><DeleteForeverRounded /></button>
              :
              <button className="bg-slate-100/50 border border-red-400 transition-all duration-300 rounded-full p-2 hover:bg-orange-400/70" onClick={() => handleFavorite({ id: individualRecipe.idMeal, nombre: individualRecipe.strMeal, img: individualRecipe.strMealThumb })}><Favorite /></button>
            :
            <Buscador />
          }


        </main>

      </header>

    </>
  )
}

export default Header;