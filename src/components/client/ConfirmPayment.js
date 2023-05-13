import { useEffect, useState } from "react";
import FailedTransaction from "./FailedTransaction";
import SuccessTransaction from "./SuccessTransaction";

const ConfirmPayment = () => {

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('/api/ConfirmPayment/')
        .then((data)=>{
            return data.json();
        })
        .then(data => {
            if(data === "Completed"){
                setSuccess(true);
            }else if(data === "Failed"){
                setSuccess(false);
            }else if(data === "Pending"){
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