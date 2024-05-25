import data from '../data/tipos.json'

const Slider = () => {
    console.log(data);
  return (
    <>
    <div className="wrapper max-h-1500px flex overflow-x-auto pt-16 pb-4 lg:pt-40 md:pt-40 mb-12">
        {data.data.map((item) =>(
            
            <div key={item.id} className="item w-[110px] h-[110px] flex items-center justify-center bg-gray-300 rounded-full mr-4 transition-all duration-300 hover:scale-110">
                <div className="item2 w-[100px] h-[100px] bg-black rounded-full ml-1 mr-1"></div>
            </div>
        
        ))}
        </div>
    </>
  )
}

export default Slider;