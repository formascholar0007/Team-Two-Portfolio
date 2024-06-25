import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
export const Scards = ({ title, description, icon }) => {
    return (
        <>
<<<<<<< HEAD
            {/*  */}
            <div className='px-6 py-10 shadow-md relative md:w-[100%] w-[80%] scard flex justify-between flex-col items-center hover:bg-sky-500' >
=======
            {/* */}
            <div className='px-6 py-10 shadow-md relative md:w-32 w-[80%] scard flex justify-between flex-col items-center hover:bg-green-300' >
>>>>>>> bc7ace2acca596925848b28901359202e2d0b0af
                
                    {icon}
                <br />
                <h3 className="text-md capitalize font-medium py-2 " >
                    {title}
                </h3>
                <br />
                <p className='text-gray-600 text-lg '>{description}</p>
            </div>

        </>
    )
}