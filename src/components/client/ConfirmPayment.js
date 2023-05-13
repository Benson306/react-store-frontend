import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FailedTransaction from "./FailedTransaction";
import SuccessTransaction from "./SuccessTransaction";

const ConfirmPayment = () => {

    const location = useLocation();

    console.log(location);

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('/api/ConfirmPayment/645f19141f47848c6f199e13')
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

    })
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