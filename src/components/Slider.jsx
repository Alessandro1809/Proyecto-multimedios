import data from '../data/tipos.json'

const Slider = () => {
    console.log(data);
  return (
    <>
    <div className="wrapper max-h-1500px flex overflow-x-auto pt-16 pb-4 lg:pt-40 md:pt-40 mb-12">
        {data.data.map((item) =>(
            <>  
            <div className='justify-center items-center grid'>
                <div key={item.id} className="item w-[110px] h-[110px] flex items-center justify-center bg-blue-400/50 rounded-full mx-2 transition-all duration-300 hover:scale-110">
                    <div className="item2 w-[100px] h-[100px] rounded-full mx-1">
                        <img src={item.img} alt="" className='w-[100px] h-[100px] rounded-full'/>
                    </div>
                </div>
                <p className='text-center mt-2 text-pretty tracking-wide'>{item.categoria}</p>
            
            </div>
            
            </>
        ))}
        </div>
    </>
  )
}

export default Slider;