function Footerbar() {
    return (
        <div className="bg-black text-white">
            <footer className="bg-black py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold mb-4">About</h4>
                            <p className="mt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="mt-4 flex space-x-4">
                                <div>
                                  <a href="#"><i className="fa fa-instagram bg-green-500 text-xl rounded-full px-4 py-3" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                   <a href="#"><i className="fa fa-facebook bg-green-500 text-xl rounded-full px-5 py-3" aria-hidden="true"></i></a>
                                </div>
                                <div>
                                   <a href="#"><i className="fa fa-twitter bg-green-500 text-xl rounded-full px-4 py-3" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold mb-4">Links</h4>
                            <ul className="mt-4">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold mb-4">Services</h4>
                            <ul className="mt-4">
                                <li><a href="#" className="text-gray-400 hover:text-white">Web Design</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Business Strategy</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Data Analysis</a></li>
                                <li className="mt-2"><a href="#" className="text-gray-400 hover:text-white">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold mb-4">Questions?</h4>
                            <ul className="mt-4 space-y-5">
                                <li className="flex items-center">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/place-marker.png" alt="Map Icon" className="w-6 h-6 mr-2" />
                                    <span className="ml-2">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-phone text-xl mr-2" aria-hidden="true"></i>
                                    <span className="ml-2">+2 392 3929 210</span>
                                </li>
                                <li className="flex items-center">
                                    <i className="fa fa-envelope text-xl mr-2" aria-hidden="true"></i>
                                    <span className="ml-2">info@yourdomain.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-10 text-lg text-center">
                    <p className="text-white">&copy; 2024 All rights reserved | This template is made with <span className="text-red-500">&hearts;</span> by Colorlib</p>
                </div>
            </footer>
        </div>
    );
}

export default Footerbar;
