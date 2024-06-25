function HireMe() {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-9 py-8">
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[66vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp7287123.jpg')" }}>
          <div className="absolute inset-0 bg-green-900 opacity-70"></div>
          <div className="relative text-center text-white px-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">I'm <span className="text-green-400">Available</span> for freelancing</h1>
            <p className="mt-4 text-lg sm:text-xl">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <button className="mt-8 px-6 py-2 sm:px-8 sm:py-3 lg:px-9 lg:py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-blue-700">HIRE ME</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default HireMe;