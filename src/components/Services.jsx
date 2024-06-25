import  {Scards}  from "./S_cards";
import  analytics  from "./flaticon/analytics.png";
import  browser  from "./flaticon/browser.png";
import  idea  from "./flaticon/idea.png";
import  innovation  from "./flaticon/innovation.png";
import  laboratory  from "./flaticon/laboratory.png";
import  product  from "./flaticon/new-product.png";

export const Services = () => {
    const cardData = [
        {
            icon: <img src={analytics} height={20} width={70} alt="analytics" className="bg"/> ,
            title: 'Web-Design ',
            description: 'This is the description for card 1.This is the description for card 1.This is the description for card 1.1',
        },
        {
            icon:<img src= {laboratory} height={20} width={70} alt="browser" />   ,
            title: 'Photography',
            description: 'This is the description for card 2.This is the description for card 1.This is the description for card 1. 2.',
        },
        {
            icon:<img src= {product} height={20} width={70} alt="idea" />  ,
            title: 'Web-Developer',
            description: 'This is the description for card 3.This is the description for card 1.This is the description for card 1. 3.',
        },
        {
            icon: <img src={innovation} height={20} width={70} alt="innovation" />  ,
            title: 'App-Developing',
            description: 'This is the description for card 4.This is the description for card 1.This is the description for card 1. 4.',
        },
        {
            icon: <img src={browser} height={20} width={70} alt="laboratory" />  ,
            title: 'Branding',
            description: 'This is the description for card 5.This is the description for card 1.This is the description for card 1. 5.',
        },
        {
            icon: <img src={idea} height={20} width={70} alt="product" />  ,   
            title: 'Product Strategy',
            description: 'This is the description for card 6.This is the description for card 1.This is the description for card 1. 6.',
        },
    ];
    return (
        <>
            <div>
                <h1 className="text-6xl text-center font-bold mt-14"> Services</h1>
                <br />
                <p className="text-center text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                <br />
                <br />
                <div className="w-[90%] mx-auto md:grid md:grid-cols-3 md:gap-5  flex flex-col items-center  gap-10" >
                    {cardData.map((data, index) => (
                        <Scards key={index} title={data.title} description={data.description} icon={data.icon} />
                    ))}                
                </div>
            </div>
        </>
    )
}