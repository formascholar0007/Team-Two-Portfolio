export const Project = () => {
    return (
        <>
            <div>
                <h1 className="text-6xl text-center font-bold mt-14">Projects</h1>
                <br />
                <p className="text-center text-xl text-gray-500 hover:text-orange-400">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
                <br />
                <br />
                <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-6 px-0"> {/* Removed px-8 */}
                    <div className="bg-[url('./images/1..png')] object-contain h-[350px] w-full bg-center bg-no-repeat bg-cover"> {/* Removed mx-4 */}
                        <div className='h-full flex items-center hover:text-white text-transparent hover:bg-orange-400 hover:bg-opacity-50 justify-center'>
                            <b>Branding & Illustration Design</b>
                            <br />
                            <b>Web Design</b>
                        </div>
                    </div>
                    <div className="bg-[url('./images/2..png')] object-contain h-[350px] w-full bg-center bg-no-repeat bg-cover">
                        <div className='h-full flex items-center hover:text-white text-transparent hover:bg-orange-400 hover:bg-opacity-50 justify-center'>
                            <b>Branding & Illustration Design</b>
                            <br />
                            <b>Web Design</b>
                        </div>
                    </div>
                    <div className="bg-[url('./images/3.png')] object-contain h-[350px] w-full bg-center bg-no-repeat bg-cover">
                        <div className='h-full flex items-center hover:text-white text-transparent hover:bg-orange-400 hover:bg-opacity-50 justify-center'>
                            <b>Branding & Illustration Design</b>
                            <br />
                            <b>Web Design</b>
                        </div>
                    </div>
                    <div className="bg-[url('./images/4.png')] object-contain h-[350px] w-full bg-center bg-no-repeat bg-cover">
                        <div className='h-full flex items-center hover:text-white text-transparent hover:bg-orange-400 hover:bg-opacity-50 justify-center'>
                            <b>Branding & Illustration Design</b>
                            <br />
                            <b>Web Design</b>
                        </div>
                    </div>
                    <div className="bg-[url('./images/5.png')] object-contain h-[350px] w-full bg-center bg-no-repeat bg-cover">
                        <div className='h-full flex items-center hover:text-white text-transparent hover:bg-orange-400 hover:bg-opacity-50 justify-center'>
                            <b>Branding & Illustration Design</b>
                            <br />
                            <b>Web Design</b>
                        </div>
                    </div>
                    <div className="bg-[url('./images/6.png')] object-contain h-[350px] w-full bg-center bg-no-repeat bg-cover">
                        <div className='h-full flex items-center hover:text-white text-transparent hover:bg-orange-400 hover:bg-opacity-50 justify-center'>
                            <b>Branding & Illustration Design</b>
                            <br />
                            <b>Web Design</b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
