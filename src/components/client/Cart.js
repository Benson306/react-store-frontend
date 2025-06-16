import useCart from "../../utils/CartContext";
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const Cart = () => {
    const { products, total, removeFromCart } = useCart();

    const handleRemoveFromCart = (product) => {
        removeFromCart(product)
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="flex-1">
                {products.length > 0 ?
                    <div>
                        <div className="text-center font-semibold font-mono mt-16 lg:ml-8">Your Cart</div>
                        <div className="text-center mt-1 text-gray-500 lg:ml-8 mb-10">{products.length} item(s)</div>

                        {products.map(product => (
                            <div key={product._id || product.title} className="flex justify-center lg:justify-around mx-5 lg:mx-80 mb-5 lg:mb-3 gap-1">
                                <img src={`${process.env.REACT_APP_API_URL}/uploads/${product.image || product.thumbnail}`} className="w-20 h-20 lg:w-44 lg:h-auto" alt="product" />
                                <div className="block lg:flex lg:gap-5 lg:justify-around text-sm lg:text-base ">
                                    <div className="flex items-center text-xs lg:text-base w-52 lg:w-64 font-bold lg:font-normal">{product.productName || product.title}</div>
                                    {product.type === "hoodie" || product.type === "tshirt" ?
                                        <div className="flex py-0 w-10 lg:w-28">
                                            <div className="text-gray-500 w-10 lg:w-10 flex items-center">Qty:</div>
                                            <div className="flex items-center">{product.quantity}</div>
                                        </div>
                                        :
                                        <div className="pb-2 lg:pb-4 flex gap-2 items-center text-sm mt-2 lg:mt-0">
                                            <img src={require('../../images/clock.png')} width={"15px"} alt="clock" />
                                            {product.hours > 0 ?
                                                <span className="text-sm capitalize">{product.hours} Hrs {product.minutes} Mins</span>
                                                :
                                                <span className="text-sm capitalize">{product.minutes} Mins</span>
                                            }
                                        </div>
                                    }
                                    {product.type === "hoodie" || product.type === "tshirt" ?
                                        <div className="flex items-center lg:w-24">Size: {product.size}</div>
                                        :
                                        <div className="flex items-center lg:w-24"></div>
                                    }
                                    <div className="flex items-center lg:w-20">Ksh {product.price}</div>
                                </div>
                                <div className="flex items-center m-0 lg:ml-10">
                                    <ClearIcon onClick={() => handleRemoveFromCart(product)} />
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-center gap-4 p-10 lg:gap-10 mt-5 lg:mt-1">
                            <div className="font-bold">Total:</div>
                            <div className="font-bold">Ksh.{total}</div>
                        </div>
                        <div className="flex justify-center px-10 ml-5 lg:mb-8">
                            <Link to={'/checkout'}>
                                <div className="collapse lg:visible w-48 flex justify-center p-1 border-2 border-black hover:bg-black hover:text-white">
                                    CHECKOUT
                                </div>
                            </Link>
                        </div>
                        <Link to={'/checkout'}>
                            <div className="visible lg:collapse fixed bottom-0 bg-blue-950 text-white text-center w-full lg:w-0 p-4 font-bold tracking-wider font-serif z-50">
                                CHECKOUT
                            </div>
                        </Link>
                    </div>
                    :
                    <div className="flex justify-center mt-10 lg:mt-20 tracking-widest text-gray-600">
                        Your <div className="mx-3"><ShoppingCartIcon /></div> is empty
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;