import React, { useEffect, useRef, useState } from 'react';
import men from '../images/Yogesh.png';
import 'font-awesome/css/font-awesome.min.css';

export const Contact = () => {
    const [visibleCards, setVisibleCards] = useState([]);

    const Concard = [
        {
            icon: <i className="fa fa-map-marker text-4xl rounded-full px-9 py-7 bg-orange-400 " aria-hidden="true"></i>,
            title: 'Address ',
            description: 'Selaqui Vikasnagar (Dehradun)',
        },
        {
            icon: <i className="fa fa-phone text-4xl rounded-full px-9 py-7 bg-orange-400 " aria-hidden="true"></i>,
            title: 'Contact Number',
            description: '+ 9675030885',
        },
        {
            icon: <i className="fa fa-paper-plane text-4xl rounded-full px-9 py-7 bg-orange-400 " aria-hidden="true"></i>,
            title: 'Email Address',
            description: 'yogesh54@gmail.com',
        },
        {
            icon: <i className="fa fa-globe text-4xl rounded-full px-9 py-7 bg-orange-400 " aria-hidden="true"></i>,
            title: 'Website',
            description: '@yogeshsinghvlog1750',
        },
    ];

    const observer = useRef();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'), 10);
                    setVisibleCards((prevVisibleCards) => [
                        ...prevVisibleCards,
                        index,
                    ]);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersection, options);

        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => observer.current.observe(card));

        return () => {
            cards.forEach((card) => observer.current.unobserve(card));
        };
    }, []);

    return (
        <>
            <div className='w-[90%] lg:w-[90%] mx-auto'>
                <h1 className="text-4xl md:text-6xl text-center font-bold mt-14">Contact Me</h1>
                <br />
                <p className="text-center text-gray-500 hover:text-orange-400 text-lg md:text-xl">
                    Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia <br /> oomaanjhire
                </p>
                <br />
                <div className="md:flex md:gap-[3%] block mx-auto my-20">
                    {Concard.map((data, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`card shadow-lg text-center w-full md:w-[48%] lg:w-[23%] px-8 pt-10 pb-16 mb-8 md:mb-0 mx-auto transform transition-transform duration-300 hover:translate-y-[-10px] ${
                                visibleCards.includes(index) ? 'visible' : ''
                            }`}
                            style={{
                                animationDelay: `${index * 1.0}s`,
                            }}
                        >
                            {data.icon}
                            <h1 className="text-xl text-sky-700 font-bold py-4">{data.title}</h1>
                            <p className="text-slate-600">{data.description}</p>
                        </div>
                    ))}
                </div>
                <div className='md:flex md:flex-row gap-8 flex flex-col'>
                    <div className='w-full transition-transform duration-300 transform hover:scale-105 mt-8 md:mt-0'>
                        <img src={men} alt="men" className='w-full' />
                    </div>
                    <div className='flex flex-col border w-full px-5 py-16 bg-orange-200 mt-8 md:mt-0'>
                        <input type="text" placeholder='Your Name' className='border px-6 py-3 mb-6 rounded-md w-full' id='Contact' />
                        <input type="text" placeholder='Your Email' className='border px-6 py-3 mb-6 rounded-md w-full' />
                        <input type="text" placeholder='Your Subject' className='border px-6 py-3 mb-6 rounded-md w-full' />
                        <textarea name="" id="" cols="30" rows="7" className='border px-6 py-3 mb-6 rounded-md text-gray-400 w-full'>Message</textarea>
                        <div className='flex justify-center'>
                            <button className='px-8 py-3 border rounded-3xl bg-black text-white hover:bg-orange-500 hover:text-white'>
                                send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
