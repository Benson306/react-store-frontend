import { useLocation } from "react-router-dom";

const Preview = () => {

    const location = useLocation();

    const data = location.state.data

    return ( <div className="flex mt-28">
        <div className="w-1/2 flex justify-center">
            <img src={require(`../../productImages/${data.largeImage}`)} />
        </div>

        <div className="w-1/2 pr-52">
           <div className="font-serif text-gray-800 text-bold text-2xl tracking-wider pb-3">{data.title}</div> 
           <div className="text-gray-500 pb-10">Ksh {data.price}</div>
           <hr />
           <form>

                <div className="flex py-4">
                        <div className="text-gray-500 w-20 flex items-center">Size</div>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={"XS"}>XS</option>
                            <option value={"S"}>S</option>
                            <option value={"M"}>M</option>
                            <option value={"L"}>L</option>
                            <option value={"XL"}>XL</option>
                        </select>                
                </div>
                <hr />

                <div className="flex py-4">
                        <div className="text-gray-500 w-20 flex items-center">Quantity</div>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={1}>5</option>
                        </select>                
                </div>

           </form>
           <hr />

           <div className="text-bold py-8">Description</div>

           <div>{ data.description }</div>

           <div className="w-52 mt-10 flex justify-center p-1 border-2 border-black">
            ADD TO CART
           </div>

        </div>
        
    </div> );
}
 
export default Preview;