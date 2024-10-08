function HireMe() {
  return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-9 py-8">
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[66vh] flex items-center justify-center bg-cover bg-center">
              <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{
                      backgroundImage: "url('https://wallpapercave.com/wp/wp7287123.jpg')",
                      objectFit: 'cover',
                      objectPosition: 'center',
                  }}
              ></div>
              <div className="absolute inset-0 bg-orange-400  opacity-70"></div>
              <div className="relative text-center text-white px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      I'm <span className="text-black">Available</span> for freelancing
                  </h1>
                  <p className="mt-4 text-base sm:text-lg md:text-xl">
                      A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  </p>
                  <button className="mt-8 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-3 bg-black text-white rounded-full shadow-lg hover:bg-white hover:text-black">
                      HIRE ME
                  </button>
              </div>
          </div>
      </div>
  );
}

export default HireMe;
