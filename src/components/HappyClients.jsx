import React from 'react';

// <div class="mt-8 flex flex-col md:flex-row md:justify-start justify-center items-center gap-3"><a class="bg-black rounded-tl-2xl rounded-br-2xl shadow-lg hover:rounded-xl border-2 border-white hover:bg-white hover:text-black transition ease-in duration-500 text-white text-lg px-6 py-3 md:px-8 md:py-4" href="/services" style="transition: background-color 0.3s ease-in, border-radius 0.3s ease-in;">Services</a><a class="bg-white rounded-tl-2xl rounded-br-2xl text-black border-2 border-black shadow-lg hover:rounded-xl hover:bg-black hover:text-white text-lg px-6 py-3 md:px-8 md:py-4 transition ease-in duration-500" href="/contact" style="transition: background-color 0.3s ease-in, border-radius 0.3s ease-in;">Book An Appointment</a></div>

function HappyClients() {
    return (
        <div className="relative bg-zinc-900 text-white py-28 my-12">
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{
                    backgroundImage: "url('	https://articalbookpublication.com/assets/happyclient.jpg')",
                    backgroundAttachment: 'fixed'
                }} 
                aria-hidden="true"
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-65"></div>
            {/* Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center font-Josefin">
                    <div className="text-center gap-6 md:flex md:items-center mb-12 md:mb-0">
                        <h2 
                            className="text-6xl font-bold text-orange-500 counter-number" 
                            data-number="9178"
                        >
                            245+
                        </h2>
                        <p className="text-xl font-semibold">
                            Our Happy Clients All Over India
                        </p>
                    </div>
                    <div className="text-center gap-6 md:flex md:items-center">
                        <h2 
                            className="text-6xl font-bold text-orange-500 counter-number" 
                            data-number="4765"
                        >
                            2805+
                        </h2>
                        <p className="text-xl font-semibold">
                            Our Happy Clients All Over World
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HappyClients;
