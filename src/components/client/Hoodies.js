import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hoodies = () => {
    const [loading, setLoading] = useState(true);
    const [hoodies, setHoodies] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/get_products/hoodie`)
            .then((res) => res.json())
            .then((res) => {
                setHoodies(res);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <div className="mb-10">
            <div className="hidden lg:block">
                <img
                    src={require('../../images/bg_home_banner.jpeg')}
                    className="object-cover rounded-xl shadow-md w-full max-h-64"
                    alt="Hoodies Banner"
                />
            </div>

            <div className="text-center mt-8 text-blue-900 font-bold font-serif text-3xl tracking-wider drop-shadow-lg">
                Hoodies
            </div>
            {loading && (
                <div className="text-center text-slate-500 text-lg my-8">
                    Loading...
                </div>
            )}
            {error && (
                <div className="text-center text-red-500 text-lg my-8">
                    Failed to load products. Please try again later.
                </div>
            )}
            <div className="text-center text-slate-500 text-md mb-8">
                {!loading && !error && `(${hoodies.length} items)`}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {!loading && !error && hoodies.map(hoodie => (
                    <Link
                        to="/preview"
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 transition-transform transform hover:-translate-y-2"
                        key={hoodie.productName}
                        state={{ data: hoodie }}
                    >
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 h-full">
                            <img
                                src={`${process.env.REACT_APP_API_URL}/uploads/${hoodie.image}`}
                                alt={hoodie.productName}
                                className="rounded-lg mb-4 object-cover w-full h-48"
                            />
                            <div className="text-center font-semibold text-lg text-blue-900 mb-1 truncate w-full">
                                {hoodie.productName}
                            </div>
                            <div className="text-center text-gray-700 text-md">
                                Ksh {hoodie.price}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hoodies;