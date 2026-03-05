import TicketCard from './TicketCard';

const TicketsContainer = ({ tickets, inprogress, resolved, handleInprogress, handleResolved }) => {

    const onTicketClick = (ticket) => {
        handleInprogress(ticket)
        document.getElementById('Progress')?.scrollIntoView({ behavior: 'smooth' });
    }




    return (
        <div className="flex flex-col lg:flex-row gap-y-6 max-w-7xl mx-1.5 lg:mx-auto">
            <div className="w-full lg:w-9/12">
                <h3 className='text-xl font-bold mb-3'>Tickets</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-2 md:gap-4 lg:gap-6'>
                    {
                        tickets && tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} onTicketClick={onTicketClick} />)
                    }
                </div>
            </div>
            {/* right side action */}
            <div id='Progress' className=" w-full lg:w-3/12 lg:ml-6 scroll-mt-20"  >
                <div className="min-h-20 ">
                    <h3 className='text-xl font-bold mb-3'>Task Status</h3>
                    <div className="p-4 lg:p-0">
                        {
                            // in progress card
                            inprogress.length !== 0 ? inprogress.map(ticket => <div key={ticket.id} className='bg-white px-3 py-4 rounded shadow-lg mb-4'>
                                <p className='text-xl font-medium mb-4'>{ticket.title}</p>
                                <button
                                    onClick={() => handleResolved(ticket)}
                                    className='px-4 py-2 w-full bg-[#02A53B] text-white font-semibold rounded-sm hover:bg-[#037c2d] transition'>Complete</button>
                            </div>) : <div className='text-gray-400 text-center py-10'>Nothing in progress.</div>
                        }
                    </div>
                </div>
                <div className=" mt-4 ">
                    <h3 className='text-xl font-bold mb-3'>Resolved Task</h3>
                    <div className=" p-4 lg:p-0">
                        {
                            //resolved card
                            resolved.length !== 0 ? resolved.map(ticket => <div key={ticket.id} className='px-4 py-5 bg-white rounded shadow-lg mb-4'>
                                <h3 className="font-semibold text-xl mb-4">{ticket.title}</h3>
                                <p className='text-gray-400'>Ticket Solved</p>

                            </div>) : <div className='text-gray-400 text-center py-10'>No resolved tickets yet.</div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TicketsContainer;