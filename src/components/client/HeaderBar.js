import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HeaderBar = () => {
    const location = useLocation();

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        if(location.pathname === '/preview'){
            setShow(true);
        }else{
            setShow(false)
        }
    })
    

    return ( <div className="flex justify-between mx-7 lg:mx-20 mt-6">
    { show && <div className='lg:pl-10'>
         <KeyboardBackspaceSharpIcon onClick={() => navigate('/')} /> 
    </div>
    }
    { !show && <div className='lg:pl-10 w-6'></div>}

    <div className='font-sans text-lg lg:text-3xl text-center tracking-widest font-bold flex items-center'>SHOP</div>

    <div className='flex items-center'>
        <ShoppingCartIcon fontSize={'medium'}  />
    </div>

</div> );
}
 
export default HeaderBar;