import { FaUser, FaCalendar } from 'react-icons/fa6';

const TicketCard = ({ ticket, onTicketClick }) => {
    // console.log(ticket);
    return (
        <div
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-purple-300"
            onClick={() => onTicketClick && onTicketClick(ticket)}
        >
            {/* Header: Title and Status */}
            <div className="flex justify-between items-start gap-3 mb-3">
                <h3 className="text-base font-semibold text-gray-900 flex-1 leading-tight">
                    {ticket.title}
                </h3>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border 
                    ${ticket.status === 'Open' ? 'bg-green-100 text-green-800 border-green-300' :
                        ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' :
                            ticket.status === 'Closed' ? 'bg-gray-100 text-gray-800 border-gray-300' :
                                'bg-blue-100 text-blue-800 border-blue-300'}
                    whitespace-nowrap`}>
                    {ticket.status}
                </span>
            </div>
            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {ticket.description}
            </p>

            {/* Footer: ID, Priority, Customer, Date */}
            <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-900">{ticket.id}</span>
                    <span className={`font-semibold `}>
                        {ticket.priority}
                    </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-1.5">
                        <FaUser className="text-gray-400" />
                        <span>{ticket.customer}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <FaCalendar className="text-gray-400" />
                        <span>{ticket.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;