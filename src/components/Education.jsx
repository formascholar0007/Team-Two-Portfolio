import React, { useEffect } from 'react';
function Education() {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("nav ul li a");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLi.forEach((link) => {
                        link.classList.remove("text-green-500");
                        link.classList.add("text-gray-700");
                        if (link.getAttribute("href").substring(1) === entry.target.id) {
                            link.classList.add("text-green-500");
                            link.classList.remove("text-gray-700");
                        }
                    });
                }
            });
        }, options);
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="bg-gray-100 mt-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex space-x-8">
                    <div className="w-1/4 sticky top-0 max-h-screen overflow-y-auto">
                        <nav>
                            <ul className="space-y-4 flex flex-col items-center mt-[8rem]">
                                <li><a href="#education" className="text-gray-700 font-bold mr-[0.6rem]">-Education</a></li>
                                <li><a href="#experience" className="text-gray-700 font-bold mr-[0.2rem]">-Experience</a></li>
                                <li><a href="#Clients" className="text-gray-700 font-bold mr-[2.2rem]">-Clients</a></li>
                                <li><a href="#Awards" className="text-gray-700 font-bold mr-[1.7rem]">-Awards</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="w-3/4 ml-16 mt-[8rem]">
                        <section id="education">
                            <h2 className="text-3xl font-bold mb-8 text-green-500">Education</h2>
                            <div className="mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">Computer Processing Systems/Computer Software</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">Diploma in Computer</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">Art & Creative Director</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="experience">
                            <h2 className="text-3xl font-bold mb-10 text-green-500">Experience</h2>
                            <div className="mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">Senior Graphic Designer</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">Design Manager</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">UX/UI Designer</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-custom-brown text-white p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-green-500 font-bold">2014-2015</p>
                                        <h3 className="text-2xl font-bold">Front-end Developer</h3>
                                        <p className="text-gray-700 font-bold">Cambridge University</p>
                                        <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='mt-[5rem]'>
                            <section id="Clients">
                                <h2 className="text-3xl font-bold mb-8 text-green-500">Clients</h2>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                    {/* Card 1 */}
                                    <div className="bg-custom-brown shadow-md rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
                                        <img src="https://wallpaperaccess.com/full/2187146.jpg" alt="Skill 2" className="w-24 h-24 object-cover rounded-full mb-4" />
                                        <p className="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel..</p>
                                        <a href="#" className="text-blue-500 hover:underline">Read More..</a>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-custom-brown shadow-md rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
                                        <img src="https://justificaturespuesta.com/wp-content/uploads/2013/04/shutterstock_85474711-e1366916292301.jpg" alt="Skill 2" className="w-24 h-24 object-cover rounded-full mb-4" />
                                        <p className="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel..</p>
                                        <a href="#" className="text-blue-500 hover:underline">Read More..</a>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-custom-brown shadow-md rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
                                        <img src="https://wallpaperaccess.com/full/2187146.jpg" alt="Skill 3" className="w-24 h-24 object-cover rounded-full mb-4" />
                                        <p className="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel..</p>
                                        <a href="#" className="text-blue-500 hover:underline">Read More..</a>
                                    </div>
                                </div>

                            </section>
                        </div>
                        <div className='mt-[5rem]'>
                            <section id="Awards">
                                <h2 className="text-3xl font-bold mb-8 text-green-500">Awards</h2>
                                <div className="mb-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="bg-custom-brown text-white p-4 rounded-full">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-green-500 font-bold">2014-2015</p>
                                            <h3 className="text-2xl font-bold">Top 10 Web Developer</h3>
                                            <p className="text-gray-700 font-bold">Cambridge University</p>
                                            <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="mt-6 mb-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="bg-custom-brown text-white p-4 rounded-full">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-green-500 font-bold">2014-2015</p>
                                            <h3 className="text-2xl font-bold">Top 5 LeaderShip Exellence Winner</h3>
                                            <p className="text-gray-700 font-bold">Cambridge University</p>
                                            <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="mt-6 mb-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="bg-custom-brown text-white p-4 rounded-full">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-green-500 font-bold">2014-2015</p>
                                            <h3 className="text-2xl font-bold">Top 4 Web Tester</h3>
                                            <p className="text-gray-700 font-bold">Cambridge University</p>
                                            <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="mt-6 mb-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="bg-custom-brown text-white p-4 rounded-full">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-green-500 font-bold">2014-2015</p>
                                            <h3 className="text-2xl font-bold">Art & Creative Director</h3>
                                            <p className="text-gray-700 font-bold">Cambridge University</p>
                                            <p className="text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education;
