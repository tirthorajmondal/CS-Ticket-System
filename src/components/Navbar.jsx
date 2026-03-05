import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 px-1.5 bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <a href='/' className="text-xl font-semibold text-gray-800"><span className=' bg-linear-to-br from-[#54CF68] to-[#00827A] text-white px-3 py-2 rounded-lg'>CS</span> Ticket System</a>
                    </div>

                    {/* animated hamburger  {something new} */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <span className={`w-6 h-0.5 border border-t-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 border border-t-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 border border-t-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex gap-6">
                            <li><a href="#home" className="text-gray-700 hover:text-purple-600 transition font-medium">Home</a></li>
                            <li><a href="#faq" className="text-gray-700 hover:text-purple-600 transition font-medium">FAQ</a></li>
                            <li><a href="#changelog" className="text-gray-700 hover:text-purple-600 transition font-medium">Changelog</a></li>
                            <li><a href="#blog" className="text-gray-700 hover:text-purple-600 transition font-medium">Blog</a></li>
                            <li><a href="#download" className="text-gray-700 hover:text-purple-600 transition font-medium">Download</a></li>
                            <li><a href="#contact" className="text-gray-700 hover:text-purple-600 transition font-medium">Contact</a></li>
                        </ul>
                        <button className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition transform hover:-translate-y-0.5">
                            + New Ticket
                        </button>
                    </div>
                </div>

                {/* silding menu by translate */}
                <div
                    className={`md:hidden fixed top-[65px] right-0 h-dvh w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-[600px]'
                        }`}
                >
                    <ul className="flex flex-col gap-0 ">
                        <li className="border-b border-gray-200">
                            <a href="#" className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition">
                                Home
                            </a>
                        </li>
                        <li className="border-b border-gray-200">
                            <a href="#" className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition">
                                FAQ
                            </a>
                        </li>
                        <li className="border-b border-gray-200">
                            <a href="#" className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition">
                                Changelog
                            </a>
                        </li>
                        <li className="border-b border-gray-200">
                            <a href="#" className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition">
                                Blog
                            </a>
                        </li>
                        <li className="border-b border-gray-200">
                            <a href="#" className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition">
                                Download
                            </a>
                        </li>
                        <li className="border-b border-gray-200">
                            <a href="#" className="block px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="px-4 mt-4">
                        <button className="w-full  bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 font-semibold hover:shadow-lg transition rounded-lg">
                            + New Ticket
                        </button>
                    </div>
                </div>

                {/* Overlay for Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-16"
                        onClick={toggleMenu}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;