import React, { useEffect, useState, useRef } from "react";

function OurVlog() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const delays = [0.2, 1.0, 2.2]; // Delays in seconds for each card
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, delay * 1000);
      });
    }
  }, [isVisible]);

  const cardData = [
    {
      img: "https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
      title: "Professional Web Development Services",
      date: "Sept. 17, 2022",
      id: "1",
    },
    {
      img: "https://cdn.mos.cms.futurecdn.net/Xiwd2xvSftAFk3e2gqwr2G.jpg",
      title: "Our Web Development Experience",
      date: "Sept. 17, 2023",
      id: "2",
    },
    {
      img: "https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_2108122673-1-scaled.jpg",
      title: "Web Development Reliable Testing Services",
      date: "Sept. 17, 2024",
      id: "3",
    },
  ];

  return (
    <div ref={sectionRef} className="mx-auto w-full h-auto OurVlog">
      <div className="mx-auto w-[90%] h-auto">
        <div className="container mx-auto px-7 py-8">
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-6">Our Blog</h1>
          <p className="text-center text-base md:text-xl text-gray-600 mb-12 hover:text-orange-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
            {cardData.map((item, index) => (
              <div
                key={item.id}
                className={`max-w-sm rounded overflow-hidden shadow-lg mx-auto transform transition-opacity duration-700 ease-in-out ${
                  visibleCards.includes(index) ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  className="w-full transition-transform duration-300 transform hover:scale-105"
                  src={item.img}
                  alt={`Blog Image ${item.id}`}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-lg md:text-xl mb-2 hover:text-orange-400">
                    {item.title}
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                  Expert web development, proven results, and reliable testing. We ensure your site excels from design to performance.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-10">
                  <span className="text-orange-500 mr-2 text-sm md:text-xl">
                    {item.date}
                  </span>
                  <span className="text-orange-500 text-sm md:text-xl">Admin</span>
                  <span className="text-orange-500 ml-2 text-sm md:text-xl">
                    📧{item.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVlog;
