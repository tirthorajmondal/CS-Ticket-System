import bgImage from '../assets/vector1.png'

const ProgressCard = ({ title, count }) => {
    const bgClass =
        title?.toLowerCase() === 'resolved'
            ? 'bg-linear-to-r from-[#54CF68] to-[#00827A]'
            : 'bg-linear-to-br from-[#632EE3] to-[#9F62F2]';

    return (
        <div className={`text-white rounded-xl pointer-events-none ${bgClass} aspe`}>
            <div className="flex  ">
                <img className="w-1/3" src={bgImage} alt="" />
                <div className="w-1/3 flex flex-col justify-center items-center py-4 gap-2">
                    <p className="text-xl whitespace-nowrap">{title}</p>
                    <p className="text-4xl font-bold">{count}</p>
                </div>
                <img className="w-1/3 transform scale-x-[-1]" src={bgImage} alt="" />
            </div>
        </div>
    );
};

export default ProgressCard;

// from #632EE3 to #9F62F2
// from #54CF68 to #00827A