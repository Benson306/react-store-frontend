import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FailedTransaction from "./FailedTransaction";
import SuccessTransaction from "./SuccessTransaction";
import PuffLoader from "react-spinners/PuffLoader";

const ConfirmPayment = () => {
    const [searchParams] = useSearchParams();
    let id = searchParams.get('OrderMerchantReference');

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/ConfirmPayment/${id}`)
            .then(res => {
                if (res.ok) {
                    setSuccess(true);
                } else {
                    setSuccess(false);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
                {loading && (
                    <div className="flex flex-col items-center">
                        <PuffLoader size={60} color={"#172554"} />
                        <span className="mt-6 text-lg text-blue-900 font-semibold">Confirming your payment...</span>
                    </div>
                )}
                {!loading && success && (
                    <div className="w-full">
                        <SuccessTransaction />
                    </div>
                )}
                {!loading && !success && (
                    <div className="w-full">
                        <FailedTransaction />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConfirmPayment;