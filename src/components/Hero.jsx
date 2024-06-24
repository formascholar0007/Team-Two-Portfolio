import 'font-awesome/css/font-awesome.min.css';
import devig2 from '../images/devig2.png';
export const Hero = () => {
    return (
        <>
            {/* <div className="mx-auto h-screen hero border">
                <div className="mx-auto h-full"> */}
            <div className="mx-auto w-full h-screen  hero">
                <div className="mx-auto w-[90%] h-screen ">

                    <div className=" flex items-center justify-between text-start">
                        <div className="lg:w-[50%] w-[80%] pt-16 lg:pt-0 ">
                            <h1 className="text-6xl font-extrabold uppercase ">HI, i'm suhani! creative
                                <span className='text-custom-green'> currentText</span>
                            </h1>
                            <br />
                            <p className="pt-5 text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos.
                                Voluptas quasi impedit doloremque natus illo beatae cumque! Maiores maxime fuga at assumenda laudantium!
                                Hic nemo quod maiores repellat ipsum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos.
                                Voluptas quasi impedit doloremque natus illo beatae cumque!
                            </p>
                            <br />
                            <br />
                            <div className='flex gap-8 pt-3 items-center'>
                                   
                                <div className="capitalize flex items-center justify-evenly p-3 lg:p-4 text-xl text-black rounded-full bg-slate-300 lg:rounded">
                                   <span className='hidden  lg:block'>download cv</span>  <i className="fa fa-download p-1 " aria-hidden="true"></i>
                                </div>
                                <div className=''>
                                    <i class="fa fa-instagram  bg-slate-300 text-xl rounded-full px-5 py-4" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i class="fa fa-facebook bg-slate-300 text-xl rounded-full px-5 py-4" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i class="fa fa-twitter  bg-slate-300 text-xl rounded-full px-5 py-4" aria-hidden="true"></i>
                                </div>

                             
                                {/*
                                <div className='capitalize text-xl flex gap-4 items-center'>
                                    <div className='text-center'><i class="fa fa-play px-5 py-4  rounded-full bg-custom-green "></i> </div>
                                    Watch the video
                                </div>
                             */}
                            </div>
                        </div>
                        <div className='hidden  lg:block' style={{ width: '655px' }}>
                            <img src={devig2} alt="heroimg" className='w-full rounded-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
