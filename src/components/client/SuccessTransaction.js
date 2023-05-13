import { Link } from "react-router-dom";
import { Checkmark } from 'react-checkmark';

const SuccessTransaction = () => {
    return ( <div> 
        <div className='mt-20 flex justify-center'>
            <div className='block'>
                <div className='flex justify-center mb-10 ml-5'>
                    {/* <CancelOutlinedIcon fontSize="inherit" color="error"/> */}
                    <Checkmark size='xxLarge' />
                </div>
                <div className="flex justify-center text-center mb-10 px-10 ml-5 text-2xl">
                    Your Order Has Been Placed Succesfully. 
                </div>
                <div className="flex justify-center text-center mb-5 px-10 ml-5 text-lg text-gray-600">
                    Check Your email for Details.
                </div>
                <div className="flex justify-center text-center mb-5 px-10 ml-5 text-lg text-gray-600">
                    You will be contacted by an IkoNini agent within the next few hours to make arrangements on delivery.
                </div>
                <div className="flex justify-center text-center mb-4 px-10 ml-5 text-lg">
                    Thank You!
                </div>
                <div className="flex justify-center text-center px-10 ml-5 text-lg" style={{fontSize:'3em'}}>&#x1F38A;</div>
                <div className="flex justify-center px-10 ml-5">
                    <Link to={'/'}><div className="collapse lg:visible w-48 flex justify-center p-1 border-2 border-black" >
                            HOME
                    </div></Link>
                </div>
                
                
            </div>
        </div>
        
        <Link to={'/'}><div className="visible lg:collapse fixed bottom-0 bg-blue-950 text-white text-center w-full lg:w-0 p-4 text-bold tracking-wider font-serif" >
            HOME
        </div></Link>
    
        </div> );
}
 
export default SuccessTransaction;