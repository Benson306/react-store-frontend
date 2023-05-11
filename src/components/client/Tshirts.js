import tshirts  from '../../data/mens_outerwear.json';

const Tshirts = () => {

    const handleClick = () =>{
        console.log("Next")
    }

    return ( <div>
        <div className='invisible lg:visible h-0 lg:h-auto'>
            <img src={require('../../images/mens_tshirts.jpg')} width="100%" alt="" />
        </div>

        <div className='text-center mt-5 text-gray-950 text-bold font-serif text-xl tracking-wider'>T-Shirts</div>
        <div className="text-center text-slate-500 text-md mb-5">({tshirts.length} items)</div>

        <div className='flex flex-wrap'>
           { tshirts.map( tshirt => (
            <div className='w-1/2 md:w-2/6' key={tshirt.name} onClick={handleClick}>
                <div className='flex justify-center'>
                    <img src={require(`../../productImages/${tshirt.image}`)} width="310px" alt="" />
                </div>

                <div className='text-center text-bold'>{tshirt.title}</div>
                <div className='text-center text-gray-700'>$ {tshirt.price}</div>
            </div>
           )) 
           }
            
        </div>
        
    </div> );
}
 
export default Tshirts;