import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const Hero = () => {
    const [roles, setRoles] = useState([
        'Web Developer',
        'Designer',
        'Programmer',
        'Logo Designer',
        'Graphics',
        'UX/UI Designer',
        'App-Developing',
        'Photography',
    ]);

    const [currentRole, setCurrentRole] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true); // Start the animation when the component mounts

        const intervalId = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 3000); // Change the role every 3 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [roles.length]);

    return (
        <div className={`bg-orange-400 flex justify-center items-center flex-col min-h-screen transition-opacity duration-[2.2s] ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <section className="text-center mb-[8rem]">
                <div className="img mt-16">
                    <img 
                        src="https://cdn.pixabay.com/photo/2023/11/21/13/29/computer-8403409_960_720.jpg" 
                        alt="Your Photo" 
                        className="w-72 h-72 rounded-full mx-auto border-4 border-highlight transition-transform duration-300 transform hover:scale-105" 
                    />
                    <div className="txt mt-[3.3rem]">
                        <h2 className="text-4xl font-bold mt-4 text-highlight text-white">Hello, I'm Yogesh</h2>
                        <p className="text-xl mt-2 text-accent text-white">
                            {roles[currentRole]}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
