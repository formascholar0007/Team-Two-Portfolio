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
                        link.classList.remove("text-white");
                        link.classList.add("text-gray-700");
                        if (link.getAttribute("href").substring(1) === entry.target.id) {
                            link.classList.add("text-white");
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
        <div className="bg-orange-400 mt-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex space-x-8">
                    <div className="w-1/4 sticky top-0 max-h-screen overflow-y-auto">
                        <nav>
                            <ul className="space-y-4 flex flex-col items-center mt-[8rem]">
                                <li><a href="#education" className="text-gray-700 font-bold mr-[0.6rem] transform-translateY(0);">-Education</a></li>
                                <li><a href="#experience" className="text-gray-700 font-bold mr-[0.2rem]">-Experience</a></li>
                                <li><a href="#Clients" className="text-gray-700 font-bold mr-[2.2rem]">-Clients</a></li>
                                <li><a href="#Awards" className="text-gray-700 font-bold mr-[1.7rem]">-Service</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="w-3/4 ml-16 mt-[8rem]">
                        <section id="education">
                            <h2 className="text-3xl font-bold mb-8 text-blue-500">Education</h2>
                            <div className="mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">2018-2019</p>
                                        <h3 className="text-2xl font-bold">High School Education</h3>
                                        <p className="text-gray-700 font-bold">H.P.H.S.School Kanatal(T.G)</p>
                                        <p className="text-white">My village name is Kanatal. I completed my high school education with 61% in the first division from Himalayan Public Higher Secondary School, Sanguan, Kanatal, Tehri.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">2019-2020</p>
                                        <h3 className="text-2xl font-bold">Intermediate Education</h3>
                                        <p className="text-gray-700 font-bold">G.I.C.Thangdhar (T.G)</p>
                                        <p className="text-white">My village name is Kanatal. I completed my Intermediate education with 76% in the first division from Rajkiya Inter College Thangdhar Tehri Garhwal.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">2021-2024</p>
                                        <h3 className="text-2xl font-bold">Bachelor of Computer Application (BCA)</h3>
                                        <p className="text-gray-700 font-bold">Himgiri Zee University (Formerly Jigyasa University) Dehradun</p>
                                        <p className="text-white">I leave in Dehradun. I completed my Bachelor of Computer Application education with 7.4 CGPA from Jigyasa University (Dehradun)</p>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <section id="experience">
                            <h2 className="text-3xl font-bold mb-10 text-blue-500">Experience</h2>
                            <div className="mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">2019-2020</p>
                                        <h3 className="text-2xl font-bold">Basic Computer</h3>
                                        <p className="text-gray-700 font-bold">Negi Computer Institute</p>
                                        <p className="text-white">I have done basic computer course from Negi Computer Coaching Institute for 6 months. I got a lot of knowledge about computers.</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">2020-2021</p>
                                        <h3 className="text-2xl font-bold">HTML, CSS , JavaScript</h3>
                                        <p className="text-gray-700 font-bold">Himgiri Zee University</p>
                                        <p className="text-white">I was interested in computer science so I learned HTML CSS and JavaScript did website design</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">2021-2023</p>
                                        <h3 className="text-2xl font-bold">Tailwind css, React js, Chakra Ui, Graphics Design </h3>
                                        <p className="text-gray-700 font-bold">Jigyasa University</p>
                                        <p className="text-white">I was interested in computer science so I learned Tailwind css, React js, Chakra Ui, Graphics Design did website design</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-6 mb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">2023-2024</p>
                                        <h3 className="text-2xl font-bold">Front-end Developer</h3>
                                        <p className="text-gray-700 font-bold"> Work From Home</p>
                                        <p className="text-white">I wented to become a web Developer so i studied computer science and now i can easily make websites and i am a good front end developer</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className='mt-[5rem]'>
                            <section id="Clients">
                                <h2 className="text-3xl font-bold mb-8 text-blue-500">Clients</h2>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                    {/* Card 1 */}
                                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
                                        <img src="https://wallpaperaccess.com/full/2187146.jpg" alt="Skill 2" className="w-24 h-24 object-cover rounded-full mb-4" />
                                        <p className="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel..</p>
                                        <a href="#" className="text-blue-500 hover:underline">Read More..</a>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
                                        <img src="https://justificaturespuesta.com/wp-content/uploads/2013/04/shutterstock_85474711-e1366916292301.jpg" alt="Skill 2" className="w-24 h-24 object-cover rounded-full mb-4" />
                                        <p className="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel..</p>
                                        <a href="#" className="text-blue-500 hover:underline">Read More..</a>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
                                        <img src="https://wallpaperaccess.com/full/2187146.jpg" alt="Skill 3" className="w-24 h-24 object-cover rounded-full mb-4" />
                                        <p className="text-center mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel..</p>
                                        <a href="#" className="text-blue-500 hover:underline">Read More..</a>
                                    </div>
                                </div>

                            </section>
                        </div>
                        <div className='mt-[5rem]'>
                            <section id="Awards">
                                <h2 className="text-3xl font-bold mb-8 text-blue-500">Service</h2>
                                <div className="mb-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white text-black p-4 rounded-full">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">2021-2024</p>
                                            <h3 className="text-2xl font-bold">Top It Services</h3>
                                            <p className="text-gray-700 font-bold">Website Development </p>
                                            <p className="text-white">

1.Custom Website Design
2.Responsive Layouts
3.E-commerce Website Development
4.Portfolio Websites
5.UX/Ui Designer 

</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="mt-6 mb-12">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white text-black p-4 rounded-full">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.093 12.093 0 0112 20.794a12.093 12.093 0 01-6.16-9.216L12 14z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">2021-2024</p>
                                            <h3 className="text-2xl font-bold">Top Markting Services</h3>
                                            <p className="text-gray-700 font-bold">Digitile Marketing</p>
                                            <p className="text-white">1.logo Designer 2.Graphics Designer 3.Animation 4.Video editing </p>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
