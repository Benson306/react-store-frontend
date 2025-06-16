import { useState } from 'react';

const Navigation = () => {
    const currentYear = new Date().getFullYear();
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="flex-1">{/* Main content goes here */}</div>
            <footer
                className="w-full text-white text-center py-10 text-base font-bold tracking-widest shadow-inner rounded-t-xl border-t-4 border-yellow-400 flex flex-col items-center gap-4"
                style={{ backgroundColor: "#212020", color: "#FFFFFF" }}
            >
                <div className="text-lg font-extrabold tracking-wider mb-2">
                    © {currentYear} IKO NINI &nbsp;|&nbsp; All Rights Reserved
                </div>
                <div className="flex justify-center gap-8 mt-2">
                    {/* YouTube */}
                    <a
                        href="https://www.youtube.com/@IkoNini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="YouTube"
                    >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.379 3.5 12 3.5 12 3.5s-7.379 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.207 0 12 0 12s0 3.793.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.621 20.5 12 20.5 12 20.5s7.379 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.793 24 12 24 12s0-3.793-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/iko_nini/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="Instagram"
                    >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.385 3.678 1.366 2.697 2.347 2.443 3.459 2.384 4.74 2.325 6.02 2.313 6.429 2.313 12s.012 5.98.071 7.26c.059 1.281.313 2.393 1.294 3.374.981.981 2.093 1.235 3.374 1.294C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.313 3.374-1.294.981-.981 1.235-2.093 1.294-3.374.059-1.28.071-1.689.071-7.26s-.012-5.98-.071-7.26c-.059-1.281-.313-2.393-1.294-3.374-.981-.981-2.093-1.235-3.374-1.294C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                        </svg>
                    </a>
                    {/* Facebook */}
                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="Facebook"
                    >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                        </svg>
                    </a>
                    {/* Twitter */}
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="Twitter"
                    >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.007-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
                        </svg>
                    </a>
                    {/* TikTok */}
                    <a
                        href="https://www.tiktok.com/@ikonini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition"
                        aria-label="TikTok"
                    >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M12.75 2v12.25a2.25 2.25 0 1 1-2.25-2.25h.25V9.5a5 5 0 1 0 5 5V2h-3zm6.5 0v3.5a3.5 3.5 0 0 0 3.5 3.5h1V6.5h-1a1.5 1.5 0 0 1-1.5-1.5V2h-2z"/>
                        </svg>
                    </a>
                </div>
                <div className="text-xs text-gray-300 mt-2">
                    Connect with us on social media!
                </div>
            </footer>
        </div>
    );
};

export default Navigation;