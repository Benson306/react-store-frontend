import { Link } from 'react-router-dom';
import hoodies  from '../../data/mens_outerwear.json';

const Hoodies = () => {
    return ( <div>
        <div className='invisible lg:visible h-0 lg:h-auto'>
            <img src={require('../../images/ladies_outerwear.jpg')} width="100%" alt="" />
        </div>

        <div className='text-center mt-5 text-gray-950 text-bold font-serif text-xl tracking-wider'>Hoodies</div>
        <div className="text-center text-slate-500 text-md mb-5">({hoodies.length} items)</div>

        <div className='flex flex-wrap'>
           { hoodies.map( hoodie => (
            <Link to={"/preview"} className='w-1/2 md:w-2/6' key={hoodie.name} state={{ data: hoodie}}>
                <div className='flex justify-center'>
                    <img src={require(`../../productImages/${hoodie.image}`)} width="310px" alt="" />
                </div>

                <div className='text-center text-bold'>{hoodie.title}</div>
                <div className='text-center text-gray-700'>Ksh {hoodie.price}</div>
            </Link>
           )) 
           }
            
        </div>
        
    </div> );
}
 
export default Hoodies;