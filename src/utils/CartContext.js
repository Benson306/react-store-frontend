import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state , dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        const storedState = localStorage.getItem('state');

        if(storedState) {
            dispatch({type: 'SET_STATE', payload: JSON.parse(storedState)});
        }
    },[])

    const addToCart = (product) => {
        const itemIndex = state.products.findIndex(item => item.name === product.name);

        if(itemIndex >= 0){
            state.products[itemIndex].quantity += 1;

            updatedPrice(state.products);
        }else{
            let newProduct = {...product, quantity: 1}

            const updatedCart = state.products.concat(newProduct);

            updatedPrice(updatedCart)

            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    products: updatedCart
                }
            })
        }
    }


    const updatedPrice = (products) =>{
        let total = 0;

        products.forEach(product => total += (Number(product.price) * product.quantity))

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total: total
            }
        })
    }

    const value = {
        total: state.total,
        products: state.products,
        deliveryLocation: state.deliveryLocation,
        addToCart
    }

    return <CartContext.Provider value={value}>
        { children }
    </CartContext.Provider>
}

const  useCart = () => {
    const context = useContext(CartContext)

    if(context === 'undefined'){
        throw new Error("usecart must be used within CartContext")
    }
    return context;
}
 
export default useCart;