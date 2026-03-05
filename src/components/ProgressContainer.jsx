import ProgressCard from './ProgressCard';

const ProgressContainer = ({ inprogress, resolved }) => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 max-w-7xl mx-1.5 lg:mx-auto mb-10 '>
            <ProgressCard title={'In Progress'} count={inprogress} />
            <ProgressCard title={'Resolved'} count={resolved} />
        </div>
    );
};

export default ProgressContainer;