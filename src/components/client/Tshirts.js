const Tshirts = () => {
    return ( <div>
        <img src={require('../../images/mens_tshirts.jpg')} width="100%" alt="" />

        <div className='text-center mt-5 text-gray-950 text-bold font-serif text-xl tracking-wider'>T-Shirts</div>
        <div className="text-center text-slate-500 text-md">(16 items)</div>

        <div className='flex flex-wrap'>
            <div className='w-2/6'>

                <div className='flex justify-center'>
                    <img src={require('../../productImages/10-11017A.jpg')} width="310px" alt="" />
                </div>

                <div className='text-center text-bold'>Tri-Blend Leisure Shirt</div>
                <div className='text-center text-gray-700'>$ 32.95</div>

            </div>
            
        </div>
        
    </div> );
}
 
export default Tshirts;