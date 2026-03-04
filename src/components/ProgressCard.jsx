import bgImage from '../assets/vector1.png'

const ProgressCard = ({ title, count }) => {
    const bgClass =
        title?.toLowerCase() === 'resolved'
            ? 'bg-linear-to-b from-[#00827a] to-[#54cf68]'
            : 'bg-linear-to-b from-violet-900 to-purple-500';

    return (
        <div className={`text-white rounded-xl pointer-events-none ${bgClass}`}>
            <div className="flex  ">
                <img className="w-1/3" src={bgImage} alt="" />
                <div className="w-1/3 flex flex-col justify-center items-center py-4 gap-2">
                    <p className="text-xl whitespace-nowrap">{title}</p>
                    <p className="text-4xl font-bold">{count}</p>
                </div>
                <img className="w-1/3 transform scale-x-[-1]" src={bgImage} alt="" />
            </div>
        </div>

        // <div
        //     className={`min-h-32 lg:min-h-44 w-full rounded-lg shadow-md p-4 ${bgClass} relative overflow-hidden`}

        // >
        //     <div
        //         className="absolute inset-0 left-0 w-1/2 bg-no-repeat bg-left bg-contain  pointer-events-none"
        //         style={{ backgroundImage: `url(${bgImage})` }}
        //     />

        //     <div
        //         className="absolute inset-y-0 right-0 w-1/2 bg-amber-400/5 bg-no-repeat bg-right! bg-contain  pointer-events-none"
        //         style={{
        //             backgroundImage: `url(${bgImage})`,
        //             transform: 'scaleX(-1)',
        //             backgroundBlendMode: 'multiply',
        //             backgroundPosition: 'right !important',
        //         }}
        //     />

        //     <div className="absolute -z-10 inset-0 flex flex-col justify-center items-center gap-3">
        //         <h3 className='text-white font-semibold text-lg'>{title}</h3>
        //         <p className='text-white text-3xl font-bold'>{count}</p>
        //     </div>
        // </div>
    );
};

export default ProgressCard;