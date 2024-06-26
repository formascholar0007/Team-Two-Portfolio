import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
export const Scards = ({ title, description, icon }) => {
    return (
        <>
            <div className='px-6 py-10 shadow-md relative md:w-[100%] w-[80%] scard flex justify-between flex-col items-center hover:bg-sky-500' >
                <div className=' relative  w-[80%] scard flex justify-between flex-col items-center ' >
                    {icon}
                    <br />
                    <h3 className="text-md capitalize font-medium py-2 " >
                        {title}
                    </h3>
                    <br />
                    <p className='text-gray-600 text-lg '>{description}</p>
                </div>
            </div>
        </>
    )
}