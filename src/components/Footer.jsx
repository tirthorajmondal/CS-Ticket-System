import { FaEnvelope, FaFacebookF, FaInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid  grid-cols-6 gap-8 mb-8">
                    <div className="col-span-6 lg:col-span-2">
                        <h3 className="text-white font-semibold text-lg mb-3">CS — Ticket System</h3>
                        <p className="text-sm leading-relaxed text-gray-400 text-justify ">
                            CS Ticket System is a comprehensive customer support platform designed to streamline ticket management and improve response times. Our intuitive interface makes it easy for teams to collaborate and resolve customer issues efficiently.
                        </p>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition text-sm">About Us</a></li>
                            <li><a href="#mission" className="text-gray-400 hover:text-purple-400 transition text-sm">Our Mission</a></li>
                            <li><a href="#contact-sales" className="text-gray-400 hover:text-purple-400 transition text-sm">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div className='col-span-3 lg:col-span-1'>
                        <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#products" className="text-gray-400 hover:text-purple-400 transition text-sm">Products & Services</a></li>
                            <li><a href="#stories" className="text-gray-400 hover:text-purple-400 transition text-sm">Customer Stories</a></li>
                            <li><a href="#download-apps" className="text-gray-400 hover:text-purple-400 transition text-sm">Download Apps</a></li>
                        </ul>
                    </div>

                    <div className='col-span-2  lg:col-span-1'>
                        <h4 className="text-white font-semibold mb-4 text-sm">Information</h4>
                        <ul className="space-y-3">
                            <li><a href="#privacy" className="text-gray-400 hover:text-purple-400 transition text-sm">Privacy Policy</a></li>
                            <li><a href="#terms" className="text-gray-400 hover:text-purple-400 transition text-sm">Terms & Conditions</a></li>
                            <li><a href="#join" className="text-gray-400 hover:text-purple-400 transition text-sm">Join Us</a></li>
                        </ul>
                    </div>

                    <div className='col-span-3 md:col-span-2 lg:col-span-1'>
                        <h4 className="text-white font-semibold mb-4 text-sm">Social Links</h4>
                        <ul className="space-y-3">
                            <li><a href='#' className="text-gray-400 hover:text-purple-400 transition text-sm inline-flex items-center gap-2">
                                <FaSquareXTwitter className='text-base' /> CS — Ticket System
                            </a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm inline-flex items-center gap-2">
                                <FaFacebookF className='text-base' /> CS — Ticket System
                            </a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm inline-flex items-center gap-2">
                                <FaInstagram className='text-base' /> CS — Ticket System
                            </a></li>
                            <li><a href="#" className="text-gray-400 hover:text-purple-400 transition text-sm inline-flex items-center gap-2">
                                <FaEnvelope className='text-base' /> support@cs-ticket.com
                            </a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;