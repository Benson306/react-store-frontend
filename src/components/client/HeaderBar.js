import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCart from '../../utils/CartContext';

const HeaderBar = () => {
    const location = useLocation();

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        if(location.pathname === '/preview' || location.pathname === '/cart' || location.pathname === '/checkout'){
            setShow(true);
        }else{
            setShow(false)
        }
    })

    const { products } = useCart();
    

    return ( 
        <div className="w-full fixed top-0 flex justify-between px-6 py-2 bg-gradient-to-b from-[#243c5a] to-indigo-500 z-[99]">
            { show && <div className='lg:pl-10'>
                <KeyboardBackspaceSharpIcon onClick={() => navigate('/')} /> 
            </div>
            }

            <div className='flex justify-between z-[999]'>
                <img src={require('../../images/logo.png')} className='w-[4rem] h-[4rem] mr-2 rounded-full z-50' />
                <div className='font-sans text-xl text-white text-center tracking-widest font-bold flex items-center'>IKO NINI</div>
            </div>
            
            <Link to={'/cart'} className='z-[999]'>
                <div className='flex items-center text-white mt-4'>
                    <ShoppingCartIcon fontSize={'large'} color='white' />
                    <sup class="font-features sups bg"><div className='text-white text-xl ml-2'>{products.length}</div></sup>
                </div>
            </Link>
        </div>
    );
}

export default HeaderBar;