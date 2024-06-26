import 'font-awesome/css/font-awesome.min.css';
import '../App.css';
export const Scards = ({ title, description, icon }) => {
    return (
        <div>
            <div className='px-6 py-3 shadow-md  scard flex justify-between flex-col items-center hover:bg-custom-brown' >
                <div className='px-6 py-3   scard flex justify-between flex-col items-center ' >
        <div>
            {/*  */}
            <div className='px-6 py-3  relative scard flex justify-between flex-col items-center hover:bg-custom-brown' >
            {/* */}
            <div className='px-6 py-3  relative scard flex justify-between flex-col items-center hover:bg-custom-brown' >
                
                    {icon}
                    <br />
                    <h3 className="text-md capitalize font-medium py-2 " >
                        {title}
                    </h3>
                    <br />
                    <p className='text-gray-600 text-lg '>{description}</p>
                </div>
            </div>
            </div>
</div>
        </div>
        </div>
    )
}