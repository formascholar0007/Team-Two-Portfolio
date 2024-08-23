import { useEffect, useRef } from "react";
import { Scards } from "./S_cards";
import analytics from "./flaticon/analytics.png";
import browser from "./flaticon/browser.png";
import idea from "./flaticon/idea.png";
import innovation from "./flaticon/innovation.png";
import laboratory from "./flaticon/laboratory.png";
import product from "./flaticon/new-product.png";

export const Services = () => {
    const cardRefs = useRef([]);

    const cardData = [
        {
            icon: <img src={analytics} height={20} width={70} alt="analytics" className="bg" />,
            title: 'Web-Design ',
            description: 'Web design blends aesthetics and functionality, covering layout, colors, graphics, fonts, and content for a better user experience.',
        },
        {
            icon: <img src={laboratory} height={20} width={70} alt="browser" />,
            title: 'Photo-Graphy',
            description: 'Photography captures moments by blending art and technique, focusing on composition, lighting, and subject to tell stories.',
        },
        {
            icon: <img src={product} height={20} width={70} alt="idea" />,
            title: 'Web-Developer',
            description: 'A web developer creates and manages websites using code and frameworks for optimal functionality and user experience.',
        },
        {
            icon: <img src={innovation} height={20} width={70} alt="innovation" />,
            title: 'App-Developing',
            description: 'App debugging finds and fixes errors to ensure smooth functionality and improve user experience.',
        },
        {
            icon: <img src={browser} height={20} width={70} alt="laboratory" />,
            title: 'Our-Blog',
            description: 'Our blog provides insights and updates on various topics to keep you informed and inspired.',
        },
        {
            icon: <img src={idea} height={20} width={70} alt="product" />,
            title: 'Logo-Design',
            description: 'Logo design creates symbols representing a brand’s identity, using creativity and strategy for memorable visuals.',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, index * 300); // Delay based on index (300ms between each card)
                    }
                });
            },
            {
                threshold: 0.1, // Trigger animation when 10% of the card is visible
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div>
                <h1 className="text-6xl text-center font-bold mt-14 ">Services</h1>
                <br />
                <p className="text-center text-xl text-gray-500 hover:text-orange-400">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
                <br />
                <br />
                <div className="w-[90%] mx-auto md:grid md:grid-cols-3 md:gap-5  flex flex-col items-center gap-10">
                    {cardData.map((data, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardRefs.current[index] = el)} // Attach refs to the cards
                            className="card"
                        >
                            <Scards title={data.title} description={data.description} icon={data.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
