import React, { useEffect, useRef } from 'react';
import 'font-awesome/css/font-awesome.min.css';


const partners = [
    // Your partner data here
];

function AboutMe() {
    const aboutSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        if (aboutSectionRef.current) {
            observer.observe(aboutSectionRef.current);
        }

        return () => {
            if (aboutSectionRef.current) {
                observer.unobserve(aboutSectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={aboutSectionRef}
            className="bg-white flex items-center justify-center mx-auto w-full min-h-screen mt-16 px-4 fade-in"
            id="about-section"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* Photo Box */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center md:justify-end mb-8 md:mb-0">
                        <img
                            src="/src/images/Yogesh.png"
                            alt="Profile"
                            className="md:flex md:flex-row gap-8 flex flex-col transition-transform duration-300 transform hover:scale-105 mt-8 md:mt-0"
                        />
                    </div>

                    {/* Text Box */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="mb-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-left">About Me</h1>
                        </div>
                        <p className="mb-2 text-left text-gray-600 text-base md:text-lg">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex text-left">
                                <span className="font-semibold w-28 md:w-32">Name:</span>
                                <span className="text-gray-600">Yogesh</span>
                            </li>
                            <li className="flex text-left">
                                <span className="font-semibold w-28 md:w-32">Date of birth:</span>
                                <span className="text-gray-600">September 17, 2003</span>
                            </li>
                            <li className="flex text-left">
                                <span className="font-semibold w-28 md:w-32">Address:</span>
                                <span className="text-gray-600">Selaqui Vikasnagar (Derradun)</span>
                            </li>
                            <li className="flex text-left">
                                <span className="font-semibold w-28 md:w-32">Zip code:</span>
                                <span className="text-gray-600">248011</span>
                            </li>
                            <li className="flex text-left">
                                <span className="font-semibold w-28 md:w-32">Email:</span>
                                <span className="text-gray-600">yogeshsinghyogesh54@gmail.com</span>
                            </li>
                            <li className="flex text-left">
                                <span className="font-semibold w-28 md:w-32">Phone:</span>
                                <span className="text-gray-600">9675030885</span>
                            </li>
                        </ul>
                        <div className="mt-8 text-left">
                            <p className="mb-8 text-lg">
                                <span className="text-xl font-bold">100</span>
                                <span className="ml-2 font-bold">Projects completed</span>
                            </p>
                            <button className="btn btn-primary rounded-md text-white py-2 px-4 transition ease-in-out delay-150 bg-black border-2 border-transparent hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 hover:text-white duration-400">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>

                <section className="bg-white mt-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-between items-center">
                            {partners.map((partner, index) => (
                                <div key={index} className="w-full sm:w-1/2 md:w-1/5 px-4 mb-4">
                                    <a href="#" className="block transition transform hover:scale-105">
                                        <img src={partner.src} className="w-full h-auto mx-auto" alt={partner.alt} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AboutMe;
