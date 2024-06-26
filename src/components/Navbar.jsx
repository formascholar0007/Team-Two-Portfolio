// import hero from '../Images/banner_img_1.png';

import p from '../images/p.png';
export const Navbar = () => {
    return (
        <>
        <div className='' style={{background:'#dfc5bc'}}>
        <div className=' mx-auto w-[90%] shadow-stone-900'>
            <div className=' flex justify-between items-center p-4 sticky top-0 bg-neutral-800 rounded-md shadow-stone-900'>
                <div className="logo flex items-center ">
                    <img src={p} alt="p" height={150} width={100} className='rounded-3xl'  />
                    <b className='text-2xl hidden  lg:block text-white px-3'>Portfolio</b>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-9 capitalize text-white '>
                        <li className='text-l hover:border-b-2 border-blue-500 cursor-pointer'><b>Home</b></li>
                        <li className='text-l hover:border-b-2 border-blue-500 cursor-pointer'><b>about</b></li>
                        <li className='text-l hover:border-b-2 border-blue-500 cursor-pointer'><b>resume</b></li>
                        <li className='text-l hover:border-b-2 border-blue-500 cursor-pointer'><b>service</b></li>
                        <li className='text-l hover:border-b-2 border-blue-500 cursor-pointer'><b>project</b></li>
                        <li className='text-l hover:border-b-2 border-blue-500 cursor-pointer'><b>my blog</b></li>
                        <li className='text-l hover:border-b-2 border-blue-500 cursor-pointer'><b>contact</b></li>
                    </ul>
                </div>
                <div>
                </div>
                    {/* <button className="capitalize p-3 lg:p-4 bg-custom-green text-xl text-black rounded">
                        download cv <i className="fa fa-download p-1" aria-hidden="true"></i>
                    </button> */}
                    <button className='hidden  lg:block  px-4 py-1 text-xl font-semibold rounded bg-gray-50 border-b-2 border-black-500 '>lets</button>
                    <div className="bar"> <i className="fa fa-bars sm:block md:hidden text-2xl" ></i></div>
                </div>
            </div>
            </div>
        </>
    )
}