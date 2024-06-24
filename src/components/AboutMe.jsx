
const partners = [
    { src: 'https://preview.colorlib.com/theme/ronaldo/images/partner-1.png.webp', alt: 'Partner 1' },
    { src: 'https://preview.colorlib.com/theme/ronaldo/images/partner-2.png.webp', alt: 'Partner 2' },
    { src: 'https://preview.colorlib.com/theme/ronaldo/images/partner-3.png.webp', alt: 'Partner 3' },
    { src: 'https://preview.colorlib.com/theme/ronaldo/images/partner-4.png.webp', alt: 'Partner 4' },
    { src: 'https://preview.colorlib.com/theme/ronaldo/images/partner-5.png.webp', alt: 'Partner 5' },
];

function AboutMe() {
    return (
        <div className="bg-white flex items-center justify-center mx-auto w-full min-h-screen mt-16 px-4" id="about-section">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    {/* Photo Box */}
                    <div className="w-full md:w-1/2 px-4 flex justify-center md:justify-end mb-8 md:mb-0">
                        <div className="bg-green-200 p-6 shadow-lg flex items-center justify-center w-full h-64 sm:h-80 md:h-96 transition-transform duration-300 transform hover:scale-105 mt-8 md:mt-0">
                            <img
                                src="https://tutorasap.es/wp-content/uploads/2013/02/Pretty-teacher-smiling-elkgroveins-com.jpg"
                                alt="Profile"
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Text Box */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="mb-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-left">About Me</h1>
                        </div>
                        <p className="mb-2 text-left text-gray-600 text-base md:text-lg">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex text-left"><span className="font-semibold w-28 md:w-32">Name:</span> <span className="text-gray-600">Ronaldo Fredrickson</span></li>
                            <li className="flex text-left"><span className="font-semibold w-28 md:w-32">Date of birth:</span> <span className="text-gray-600">November 28, 1989</span></li>
                            <li className="flex text-left"><span className="font-semibold w-28 md:w-32">Address:</span> <span className="text-gray-600">San Francisco CA 97987 USA</span></li>
                            <li className="flex text-left"><span className="font-semibold w-28 md:w-32">Zip code:</span> <span className="text-gray-600">1000</span></li>
                            <li className="flex text-left"><span className="font-semibold w-28 md:w-32">Email:</span> <span className="text-gray-600">ronaldo@gmail.com</span></li>
                            <li className="flex text-left"><span className="font-semibold w-28 md:w-32">Phone:</span> <span className="text-gray-600">+1-2234-5678-9-0</span></li>
                        </ul>
                        <div className="mt-8 text-left">
                            <p className="mb-8 text-lg">
                                <span className="text-xl font-bold">120</span>
                                <span className="ml-2 font-bold">Projects completed</span>
                            </p>
                            <button className="btn btn-primary rounded-md text-white py-2 px-4 transition ease-in-out delay-150 bg-green-500 border-2 border-transparent hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:border-green-500 duration-400">
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