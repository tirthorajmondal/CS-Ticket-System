import React from 'react';
import ProgressCard from './ProgressCard';

const ProgressContainer = ({ inprogress, resolved }) => {
    return (
        <div className='flex gap-10 max-w-7xl mx-1.5 lg:mx-auto mb-10 '>
            <ProgressCard title={'In Progress'} count={inprogress} />
            <ProgressCard title={'Resolved'} count={resolved} />
        </div>
    );
};

export default ProgressContainer;