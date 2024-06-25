import men from '../images/men.png';
import 'font-awesome/css/font-awesome.min.css';
export const Contact = () => {
    const Concard = [
        {
            icon: <i class="fa fa-map-marker text-4xl rounded-full px-9 py-7 bg-cyan-300" aria-hidden="true"></i>,
            title: 'Address ',
            description: '198 West 21th Street, Suite 721 New York NY 100161',
        },
        {
            icon: <i class="fa fa-phone text-4xl rounded-full px-9 py-7 bg-cyan-300" aria-hidden="true"></i>
            ,
            title: 'Contact Number',
            description: '+ 1235 2355 98',
        },
        {
            icon: <i class="fa fa-paper-plane text-4xl rounded-full px-9 py-7 bg-cyan-300" aria-hidden="true"></i>,
            title: 'Email Address',
            description: 'info@yoursite.com',
        },
        {
            icon: <i class="fa fa-globe text-4xl rounded-full px-9 py-7 bg-cyan-300" aria-hidden="true"></i>,
            title: 'Website',
            description: 'yoursite.com',
        },
    ];
    return (
        <>
            <div className='w-[80%]  mx-auto'>
                <h1 className="text-6xl text-center font-bold mt-14"> Contact Me</h1>
                <br />
                <p className="text-center text-gray-500">Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia <br /> oomaanjhire</p>
                <br />
                <div className="md:flex md:gap-[3%] block  mx-auto my-20  ">
                    {Concard .map((data, index) => (
                        (
                            <div class="shadow-lg md:w-[23%] text-center  w-[80%] px-8 pt-10 pb-16">
                        {/* <div className="py-5 px-10 shadow-lg md:w-[850px] text-center my-14 mx-[5%] w-[80%] " > */}
                                {data.icon}
                                <h1 className="text-xl text-sky-700 font-bold py-4 ">{data.title}</h1>
                                <p className="text-slate-600">{data.description}</p>
                            </div>
                        )

                    ))}
                </div>
                <div className='md:flex  md:flex-row gap-8 flex flex-col '>
                    <div className='w-full'>
                        <img src={men} alt="men" />
                    </div>
                    <div className='flex flex-col border w-full px-5 py-16 bg-slate-100'>
                        <input type="text" placeholder='Your Name' className='border px-6 py-3 mb-6 rounded-md' />
                        <input type="text" placeholder='Your Email' className='border px-6 py-3 mb-6 rounded-md' />
                        <input type="text" placeholder='Your Subject' className='border px-6 py-3 mb-6 rounded-md' />
                        <textarea name="" id="" cols="30" rows="7" className='border px-6 py-3 mb-6 rounded-md text-gray-400' >Messege</textarea>
                        <button className='px-8 py-3 border self-start rounded-3xl bg-cyan-600 text-white'>send messege</button>
                    </div>
                </div>
            </div>
        </>
    )
}