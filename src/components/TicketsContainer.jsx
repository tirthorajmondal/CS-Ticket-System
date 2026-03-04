import TicketCard from './TicketCard';

const TicketsContainer = ({ tickets, inprogress, resolved, handleInprogress, handleResolved }) => {


    const onTicketClick = (ticket) => {
        handleInprogress(ticket)
    }




    return (
        <div className="flex  max-w-7xl mx-1.5 lg:mx-auto">
            <div className="w-8/12 lg:w-9/12">
                <h3 className='text-xl font-bold mb-3'>Tickets</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-2 md:gap-4 lg:gap-6'>
                    {
                        tickets && tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} onTicketClick={onTicketClick} />)
                    }

                </div>
            </div>
            {/* right side action */}
            <div className=" w-4/12 lg:w-3/12 ml-1.5 md:ml-6"  >
                <div className="min-h-20">
                    <h3 className='text-xl font-bold mb-3'>In Progress</h3>
                    <div className=" bg-white">
                        {
                            inprogress.length !== 0 ? inprogress.map(ticket => <div key={ticket.id} className='bg-white px-3 py-4 rounded shadow-lg mb-4'>
                                <p className='text-xl font-medium mb-4'>{ticket.title}</p>
                                <button
                                    onClick={() => handleResolved(ticket)}
                                    className='px-4 py-2 w-full bg-[#02A53B] text-white font-semibold rounded-sm hover:bg-[#037c2d] transition'>Resolve</button>
                            </div>) : <div className='text-gray-400 text-center py-10'>Nothing in progress.</div>
                        }
                    </div>
                </div>
                <div className=" mt-4 ">
                    <h3 className='text-xl font-bold mb-3'>Resolved</h3>
                    <div className=" bg-white">
                        {
                            resolved.length !== 0 ? resolved.map(ticket => <div key={ticket.id} className='px-4 py-5 bg-white rounded shadow-lg mb-4'>
                                <h3 className="font-semibold text-xl mb-4 text-gray-800">{ticket.title}</h3>
                                <p>Ticket Solved</p>

                            </div>) : <div className='text-gray-400 text-center py-10'>No resolved tickets yet.</div>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TicketsContainer;