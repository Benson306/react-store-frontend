

export const initialState = {
    total:0,
    products: []
}


const reducer = (state, action) =>{
    const { type, payload } = action;

    switch(type){
        case "SET_STATE":
            return payload;
        case "ADD_TO_CART":
            let addState ={
                ...state,
                products: payload.products
            }
            localStorage.setItem('state', JSON.stringify(addState));
            return addState;
        case "REMOVE_FROM_CART":
            let newState = {
                ...state,
                products: payload.products
            }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        case "UPDATE_TOTAL":
            let updateState = {
                ...state,
                total: payload.total
            }
            localStorage.setItem('state', JSON.stringify(updateState));
            return updateState;
        default:
            throw new Error(`No case for type ${type} found in reducer`)
    }
}

export default reducer;