 import { Link } from 'react-router-dom';
 import banner from '../assets/banner.jpg';
 import ensalada from '../assets/ensalada.jpg';
 import random from '../assets/random.jpg';
 import { Favorite } from '@material-ui/icons';
 import data from '../data/tipos.json'

 const Bento = () => {
  return (
        <>
<section >
	<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 h-full md:px-auto">
			<div className="col-span-2 sm:col-span-1 md:col-span-2">
				<article className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-64 mb-4">
					<img src={banner} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out contrast-125"/> 
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl items-center text-pretty">Find recipes of all kinds in the same place <Favorite style={{ color: 'white', width: '30px', height: '30px' }}/></h3>
				</article>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-56">
						<img src={ensalada} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out contrast-130"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl underline">Recipe of the day</h3>
						<div className='z-10 text-lg font-medium text-white absolute bottom-0 left-0 p-4 bg-slate-300/70 w-full'>
							<p className='line-clamp-2 text-pretty'>{data.data[1].description}</p>
						</div>
					</Link>
					<Link to="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-56">
						<img src={random} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out contrast-130"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 className="z-10 text-2xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl text-pretty"><span className="underline">Undecided?</span> Check out one of our random recipes.</h3>
					</Link>
				</div>
			</div>
		</div>
	</div>
</section>       
        
        </>
  )
}

export default Bento; 
