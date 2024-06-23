import React from 'react';

function AboutMe() {
    return (
        <div className="bg-white flex items-center justify-center min-h-screen" id="about-section">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Photo Box */}
                    <div className="w-full md:w-1/2 px-4 flex">
                        <div className="bg-green-200 p-6  shadow-lg flex items-center justify-center w-full h-full">
                            <img
                                src="https://internationalteacherstraining.com/blog/wp-content/uploads/2018/08/171219-teacher-stock.jpg"
                                alt="Profile"
                                className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </div>
                    {/* Text Box */}
                    <div className="w-full md:w-1/2 px-4 py-5">
                        <div className="mb-8">
                            <h1 className="text-5xl font-bold text-left">About Me</h1>
                        </div>
                        <p className="mb-6 text-left text-gray-400 font-roboto text-base">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ul className="space-y-2">
                            <li className="flex text-left"><span className="font-semibold w-32">Name:</span> <span className="text-gray-400 font-robot">Ronaldo Fredrickson</span></li>
                            <li className="flex text-left"><span className="font-semibold w-32">Date of birth:</span> <span className="text-gray-400 font-robot">November 28, 1989</span></li>
                            <li className="flex text-left"><span className="font-semibold w-32">Address:</span> <span className="text-gray-400 font-robot">San Francisco CA 97987 USA</span></li>
                            <li className="flex text-left"><span className="font-semibold w-32">Zip code:</span> <span className="text-gray-400 font-robot">1000</span></li>
                            <li className="flex text-left"><span className="font-semibold w-32">Email:</span> <span className="text-gray-400 font-robot">ronaldo@gmail.com</span></li>
                            <li className="flex text-left"><span className="font-semibold w-32">Phone:</span> <span className="text-gray-400 font-robot">+1-2234-5678-9-0</span></li>
                        </ul>
                        <div className="mt-8 text-left">
                            <p className="mb-8 text-lg">
                                <span className="text-1xl font-bold">120</span>
                                <span className="ml-2 font-bold">Project complete</span>
                            </p>
                            <p>

                            <button className="btn btn-primary rounded-md text-white py-2 px-4 transition ease-in-out delay-150 bg-green-500 border-2 border-transparent hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:border-green-500 duration-400">
                                    Download CV
                                </button>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
