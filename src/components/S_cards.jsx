import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
export const Scards = ({ title, description, icon }) => {
    return (
        
            <div className=' py-3 shadow-md scard flex justify-between flex-col items-center hover:bg-orange-400 ' >
                <div className='py-3   scard flex justify-between flex-col items-center ' >
       
            {/*  */}
            <div className='px-6 py-3  relative scard flex justify-between flex-col items-center hover:bg-orange-400 ' >
            {/* */}
            <div className='px-6 py-3  relative scard flex justify-between flex-col items-center hover:bg-orange-400 ' >
                
       
            <div className='px-6   relative scard flex justify-between flex-col items-center hover:bg-orange-400 hover:text-white' >
                <div className=' relative  flex justify-between flex-col items-center ' >
                    {icon}
                    <br />
                    <h3 className="text-md capitalize font-medium py-2 " >
                        {title}
                    </h3>
                    <br />
                    <p className='text-gray-600 text-lg hover:text-white '>{description}</p>
                </div>
            </div>
            </div></div></div></div>

        
    )
}