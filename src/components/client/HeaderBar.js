import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCart from '../../utils/CartContext';
import logo from '../../images/vid.jpg';
import Hoodies from './Hoodies';
import Tshirts from './Tshirts';
import Videos from './Videos';

const HeaderBar = () => {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { products } = useCart();
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    useEffect(() => {
        if (
            location.pathname === '/preview' ||
            location.pathname === '/cart' ||
            location.pathname === '/checkout'
        ) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [location.pathname]);

    // Tab labels and handlers
    const tabs = [
        { label: 'Videos', index: 0 },
        { label: 'Hoodies', index: 1 },
        { label: 'T-shirts', index: 2 },
    ];

    const handleTabClick = (index) => {
        setCurrentTabIndex(index);
        setMenuOpen(false);
    };

    return (
        <header className="mx-0 lg:mx-0 mt-0 mb-6">
            <div
                className="relative flex items-center justify-between rounded-none shadow-none px-2 sm:px-8 py-3"
                style={{ backgroundColor: "#dfb214", color: "#000000" }}
            >
                {/* Dropdown Menu for navigation (mobile) - now on the left */}
                <div className="lg:hidden flex items-center absolute left-2 top-1/2 -translate-y-1/2">
                    <button
                        className="p-2 rounded-full hover:bg-yellow-300 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                    >
                        {menuOpen ? (
                            <CloseIcon className="text-black" fontSize="large" />
                        ) : (
                            <MenuIcon className="text-black" fontSize="large" />
                        )}
                    </button>
                    {menuOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg z-50 min-w-[160px] border border-yellow-400">
                            {tabs.map(tab => (
                                <button
                                    key={tab.label}
                                    onClick={() => handleTabClick(tab.index)}
                                    className={`block w-full text-left px-6 py-3 text-base font-semibold hover:bg-yellow-100 transition ${
                                        currentTabIndex === tab.index ? 'text-yellow-600' : 'text-black'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Logo - center on mobile, left on desktop */}
                <Link
                    to="/"
                    className="flex items-center justify-center flex-shrink-0 z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0"
                >
                    <img
                        src={logo}
                        alt="IKO NINI Logo"
                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-full shadow border-2 border-yellow-400 bg-white"
                    />
                </Link>

                {/* Brand text - center on desktop, hidden on mobile */}
                <span
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-3xl tracking-widest font-extrabold drop-shadow select-none"
                    style={{ color: "#000000" }}
                >
                    IKO NINI
                </span>

                {/* Back Button (always right, but hidden on mobile if menu is open) */}
                <div className="flex-1 flex justify-end items-center lg:justify-end">
                    {!menuOpen && show ? (
                        <button
                            className="flex items-center justify-center rounded-full hover:bg-yellow-300 transition-colors p-2"
                            onClick={() => navigate('/')}
                            aria-label="Back"
                        >
                            <KeyboardBackspaceSharpIcon className="text-black" fontSize="medium" />
                        </button>
                    ) : (
                        <div className="w-8" />
                    )}

                    {/* Cart Icon - always rightmost */}
                    <Link to="/cart" className="relative flex items-center group ml-2">
                        <ShoppingCartIcon fontSize="medium" className="text-black group-hover:text-yellow-700 transition-colors" />
                        <span className="absolute -top-2 -right-2 bg-black text-yellow-400 text-xs font-bold rounded-full px-2 py-0.5 shadow-md border border-white">
                            {products.length}
                        </span>
                    </Link>
                </div>
            </div>

            {/* Tabs for desktop */}
            <div className="hidden lg:flex justify-center mt-2">
                <div className="bg-white rounded-xl shadow-lg px-6 py-3 flex gap-4">
                    {tabs.map(tab => (
                        <button
                            key={tab.label}
                            onClick={() => handleTabClick(tab.index)}
                            className={`px-5 py-2 rounded-full font-bold transition ${
                                currentTabIndex === tab.index
                                    ? 'bg-yellow-400 text-black shadow'
                                    : 'bg-white text-black hover:bg-yellow-200'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab content (desktop only, below tabs) */}
            <div className="hidden lg:flex flex-col items-center mt-6">
                {currentTabIndex === 0 && (
                    <Box sx={{ p: 0 }} className="w-full max-w-4xl">
                        <Typography component="div">
                            <Videos />
                        </Typography>
                    </Box>
                )}
                {currentTabIndex === 1 && (
                    <Box sx={{ p: 0 }} className="w-full max-w-4xl">
                        <Typography component="div">
                            <Hoodies />
                        </Typography>
                    </Box>
                )}
                {currentTabIndex === 2 && (
                    <Box sx={{ p: 0 }} className="w-full max-w-4xl">
                        <Typography component="div">
                            <Tshirts />
                        </Typography>
                    </Box>
                )}
            </div>
        </header>
    );
};

export default HeaderBar;