import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FailedTransaction from "./FailedTransaction";
import SuccessTransaction from "./SuccessTransaction";

const ConfirmPayment = () => {

    const [searchParams, setSearchParams] =useSearchParams();

    let id = searchParams.get('OrderMerchantReference');

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`/api/ConfirmPayment/${id}`)
        .then(res => {
            return res.json();
        })
        .then(res => {

            if(res === "Completed"){
                setSuccess(true);
            }else if(res === "Failed"){
                setSuccess(false);
            }else if(res === "Pending"){
                setSuccess(false);
            }

            setLoading(false);
        })
        .catch(err =>{
            setLoading(false);
            console.log(err);
        })

    },[])
    return ( <div>
        {
            loading && <div class="flex items-center justify-center h-screen">
            Loading ...
          </div>
        }
        {
            !loading && success && <SuccessTransaction />
        }
        {
            !loading && !success && <FailedTransaction />
        }
    </div> );
}
 
export default ConfirmPayment;