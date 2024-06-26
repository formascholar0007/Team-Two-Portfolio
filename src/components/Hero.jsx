import 'font-awesome/css/font-awesome.min.css';
import devig6 from '../images/devig2.png';
export const Hero = () => {
    return (
        <>
            {/* <div className="mx-auto h-screen hero border">
                <div className="mx-auto h-full"> */}
                {/* #a3b18a, #cdb4db,imp #023047,imp #264653,imp #14213d,#344e41 ,imp #2b2d42, #8d99ae,#cb997e */}
            <div className="mx-auto w-full h-screen pt-11 hero bg-custom-brown overflow-hidden" >
                <div className="mx-auto w-[90%] h-screen bg-custom-brown">

                    <div className=" flex items-center justify-between text-start mt-[4%]">
                        <div className="lg:w-[50%] w-[80%] pt-16 lg:pt-0 ">
                            <h1 className="text-6xl font-extrabold uppercase animate__animated animate__bounceInLeft">HI, i'm suhani! creative
                                <span className='text-custom-green'> currentText</span>
                            </h1>
                            <br />
                            <p className="pt-5 text-white animate__animated animate__bounceInLeft animate__delay-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos.
                                Voluptas quasi impedit doloremque natus illo beatae cumque! Maiores maxime fuga at assumenda laudantium!
                                Hic nemo quod maiores repellat ipsum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos.
                                Voluptas quasi impedit doloremque natus illo beatae cumque!
                            </p>
                            <br />
                            <br />
                            <div className='flex gap-8 pt-3 items-center '>
                                   
                                <div className="capitalize flex items-center justify-evenly p-3 lg:p-4 text-xl text-white rounded-full bg-neutral-800 lg:rounded animate__animated  animate__shakeX">
                                   <span className='hidden  lg:block'>download cv</span>  <i className="fa fa-download p-1 " aria-hidden="true"></i>
                                </div>
                                <div className=''>
                                    <i class="fa fa-instagram bg-neutral-800 text-white text-xl rounded-full px-5 py-4 animate__animated animate__bounce " aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i class="fa fa-facebook bg-neutral-800 text-white text-xl rounded-full px-5 py-4 animate__animated animate__bounce" aria-hidden="true"></i>
                                </div>

                                <div>
                                    <i class="fa fa-twitter bg-neutral-800 text-white text-xl rounded-full px-5 py-4 animate__animated animate__bounce" aria-hidden="true"></i>
                                </div>

                             
                                {/*
                                <div className='capitalize text-xl flex gap-4 items-center'>
                                    <div className='text-center'><i class="fa fa-play px-5 py-4  rounded-full bg-custom-green "></i> </div>
                                    Watch the video
                                </div>
                             */}
                            </div>
                        </div>
                        <div className='hidden  lg:block  w-[555px]'>
                            <img src={devig6} alt="heroimg" className='w-full rounded-t-3xl rounded-b-3xl h-[450px] animate__animated animate__bounceInRight' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
