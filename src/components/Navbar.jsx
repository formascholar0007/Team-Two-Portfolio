import React from 'react';
// import './Navbar.css'; // Import the CSS file

export const Navbar = () => {
    return (
        <>
        <div className='' style={{background:'#dfc5bc'}}>
            <div className='mx-auto w-[100%] shadow-stone-900'>
                <div className='flex justify-between items-center p-4 sticky top-0 bg-neutral-800'>
                    <div className="logo flex items-center fade-in-down" style={{ animationDelay: '0.2s' }}>
                        <img 
                            src="/src/images/logo.jpg" 
                            alt="YOGESH" 
                            className="w-[3rem]" 
                        />
                        <b className='text-2xl hidden lg:block text-white px-3'>YOGESH</b>
                    </div>
                    <div className='hidden md:block ml-[22rem]'>
                        <ul className='flex items-center gap-8 capitalize text-white'>
                            {['Home', 'About', 'Resume', 'Service', 'Project', 'My Blog', 'Contact'].map((text, index) => (
                                <li 
                                    key={text}
                                    className='text-l hover:border-b-2 border-orange-400 cursor-pointer fade-in-down' 
                                    style={{ animationDelay: `${0.2 * index + 0.4}s` }}
                                >
                                    <b>{text}</b>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='hidden lg:block px-4 py-1 text-xl font-semibold rounded bg-gray-50 border-b-2 border-black-500 hover:bg-orange-400 hover:text-white fade-in-down' style={{ animationDelay: '0.6s' }}>
                            Login
                        </button>
                        <div className="bar fade-in-down" style={{ animationDelay: '9.8s' }}>
                            <i className="fa fa-bars sm:block md:hidden text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
