import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderBar = () => {
    return ( <div className="flex justify-between mx-20 mt-6">
    <div className='pl-10'>

    </div>

    <div className='font-sans text-3xl text-center tracking-widest font-bold'>SHOP</div>

    <div className='flex align-middle'>
        <ShoppingCartIcon fontSize={'medium'}  />
    </div>

</div> );
}
 
export default HeaderBar;