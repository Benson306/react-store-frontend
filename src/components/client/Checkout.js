import useCart from "../../utils/CartContext";

const Checkout = () => {

    const { products, total } = useCart();

    return ( <div className="mt-3 lg:mt-20">
        <div className="flex justify-center mb-10 text-xl">Checkout</div>

        <div className="block lg:flex mx-10">
            <div className="block w-full lg:w-1/2">
                <div className="font-bold mb-5">Account Information</div>
                <div>
                <input type="email" placeholder="Email" className="border-b-2 p-3 mb-5 w-full lg:w-3/4" required/>
                </div>
                <div>
                <input type="text" placeholder="Phone Number" className="border-b-2 p-3 mb-5 w-full lg:w-3/4" required/>
                </div>
            </div>

            <div >
                <div className="font-bold mb-5">Select Delivery Location</div>
                <select className="w-full p-1 lg:p-3 bg-white mb-4 border-b-2">
                    <option>Nairobi</option>
                    <option>Eldoret</option>
                    <option>Nakuru</option>
                    <option>Mombasa</option>
                </select>
                <div className="font-bold mb-5">Order Summary</div>
                {
                    products.map( product =>(
                        <div className="flex mb-1 text-xs lg:text-base">
                            <div className="w-48 lg:w-64">
                                { product.title }
                            </div>
                            <div className="w-5 lg:w-20">
                               X { product.quantity }
                            </div>
                            <div className="ml-2">
                                KES. { product.quantity * product.price }
                            </div>
                        </div>
                    ))
                }
                <hr />

                <div className="flex mt-5 text-xs lg:text-base">
                    <div className="w-48 lg:w-80  font-bold">Delivery Cost:</div>
                    <div className="ml-4">KES. 250</div>
                </div>

                <div className="flex mt-5 text-xs lg:text-base">
                    <div className="w-48 lg:w-80 font-bold">Total:</div>
                    <div className="ml-4">KES. {total + 250}</div>
                </div>

                <div className="collapse lg:visible w-28 flex justify-center p-1 border-2 border-black mt-10" >
                    PAY
                </div>


            </div>

        </div>


        <div className="visible lg:collapse fixed bottom-0 bg-blue-950 text-white text-center w-full lg:w-0 p-4 text-bold tracking-wider font-serif" >
            PAY
        </div>
    </div> );
}
 
export default Checkout;