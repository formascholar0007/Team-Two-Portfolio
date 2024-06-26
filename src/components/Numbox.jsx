export const Numbox = () => {
    const numData = [
        {
            num: "100",
            text: 'Web-Design ',
        },
        {
            num: "1,200",
            text: 'Photography',

        },
        {
            num: "1,200",
            text: 'Web-Developer',

        },
        {
            num: "1,500",
            text: 'App-Developing',

        },
    ];
    return (
        <>
            <div className="md:flex block">
                {numData.map((data, index) => (
                    (
                        <div className="py-5 px-10 shadow-lg md:w-[20%] text-center my-14 mx-[5%] w-[80%] " >
                            <h1 className="text-4xl text-black font-bold py-4 ">{data.num}</h1>
                            <p className="text-slate-500">{data.text}</p>
                        </div>
                    )
                ))}
            </div>
        </>
    )
}