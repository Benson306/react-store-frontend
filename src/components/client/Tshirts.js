import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Tshirts = () => {
    const [loading, setLoading] = useState(true);
    const [tshirts, setTshirts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/get_products/tshirt`)
            .then((res) => res.json())
            .then((res) => {
                setTshirts(res);
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
                    alt="Tshirts Banner"
                />
            </div>

            <div className="text-center mt-8 text-blue-900 font-bold font-serif text-3xl tracking-wider drop-shadow-lg">
                Tshirts
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
                {!loading && !error && `(${tshirts.length} items)`}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {!loading && !error && tshirts.map(tshirt => (
                    <Link
                        to="/preview"
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 transition-transform transform hover:-translate-y-2"
                        key={tshirt.productName}
                        state={{ data: tshirt }}
                    >
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-4 h-full">
                            <img
                                src={`${process.env.REACT_APP_API_URL}/uploads/${tshirt.image}`}
                                alt={tshirt.productName}
                                className="rounded-lg mb-4 object-cover w-full h-48"
                            />
                            <div className="text-center font-semibold text-lg text-blue-900 mb-1 truncate w-full">
                                {tshirt.productName}
                            </div>
                            <div className="text-center text-gray-700 text-md">
                                Ksh {tshirt.price}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tshirts;