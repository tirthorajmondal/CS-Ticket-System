import ProgressCard from './ProgressCard';

const ProgressContainer = ({ inprogress, resolved }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-7xl mx-1.5 lg:mx-auto mb-10'>
            <ProgressCard title={'In Progress'} count={inprogress} />
            <ProgressCard title={'Resolved'} count={resolved} />
        </div>
    );
};

export default ProgressContainer;