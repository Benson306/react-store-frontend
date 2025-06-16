import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Videos = () => {
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(false);
    const carouselRef = useRef(null);
    const [scrollIndex, setScrollIndex] = useState(0);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/get_videos`)
            .then((res) => res.json())
            .then((res) => {
                setVideos(res);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setError(true);
            });
    }, []);

    // Carousel navigation handlers
    const scrollToIndex = (idx) => {
        if (carouselRef.current) {
            const card = carouselRef.current.querySelector('.carousel-card');
            if (card) {
                const cardWidth = card.offsetWidth + 24; // 24px gap-6
                carouselRef.current.scrollTo({
                    left: idx * cardWidth,
                    behavior: 'smooth'
                });
                setScrollIndex(idx);
            }
        }
    };

    const handlePrev = () => {
        if (scrollIndex > 0) scrollToIndex(scrollIndex - 1);
    };

    const handleNext = () => {
        if (scrollIndex < videos.length - visibleCards()) scrollToIndex(scrollIndex + 1);
    };

    // Responsive visible cards
    function visibleCards() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
    }

    // Update scrollIndex if window resizes
    useEffect(() => {
        const onResize = () => {
            if (scrollIndex > videos.length - visibleCards()) {
                setScrollIndex(Math.max(0, videos.length - visibleCards()));
            }
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [scrollIndex, videos.length]);

    return (
        <div className="mb-10">
            <div className="hidden lg:block">
                <img
                    src={require('../../images/bg_home_banner.jpeg')}
                    className="object-cover rounded-xl shadow-md w-full max-h-64"
                    alt="Videos Banner"
                />
            </div>

            <div className="text-center mt-8 text-blue-900 font-bold font-serif text-3xl tracking-wider drop-shadow-lg">
                Videos
            </div>
            {loading && (
                <div className="text-center text-slate-500 text-lg my-8">
                    Loading...
                </div>
            )}
            {error && (
                <div className="text-center text-red-500 text-lg my-8">
                    Failed to load videos. Please try again later.
                </div>
            )}
            <div className="text-center text-slate-500 text-md mb-8">
                {!loading && !error && `(${videos.length} items)`}
            </div>

            {/* Carousel */}
            {!loading && !error && videos.length > 0 && (
                <div className="relative max-w-7xl mx-auto">
                    {/* Carousel buttons */}
                    <button
                        onClick={handlePrev}
                        disabled={scrollIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-950/80 hover:bg-blue-900 text-yellow-400 rounded-full p-2 shadow transition disabled:opacity-30"
                        aria-label="Previous"
                        style={{ display: videos.length > visibleCards() ? 'block' : 'none' }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={scrollIndex >= videos.length - visibleCards()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-950/80 hover:bg-blue-900 text-yellow-400 rounded-full p-2 shadow transition disabled:opacity-30"
                        aria-label="Next"
                        style={{ display: videos.length > visibleCards() ? 'block' : 'none' }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    {/* Carousel track */}
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto no-scrollbar gap-6 py-4 px-2 scroll-smooth"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {videos.map((video, idx) => (
                            <Link
                                to="/preview"
                                className="carousel-card w-72 min-w-[18rem] max-w-xs p-3 transition-transform transform hover:-translate-y-2"
                                key={video.title}
                                state={{ data: video }}
                                tabIndex={0}
                            >
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 h-full">
                                    <img
                                        src={`${process.env.REACT_APP_API_URL}/uploads/${video.thumbnail}`}
                                        alt={video.title}
                                        className="rounded-lg mb-4 object-cover w-full h-48"
                                    />
                                    <div className="text-center font-semibold text-lg text-blue-900 mb-1 truncate w-full">
                                        {video.title}
                                    </div>
                                    <div className="text-center text-gray-700 text-md">
                                        Ksh {video.price}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videos;