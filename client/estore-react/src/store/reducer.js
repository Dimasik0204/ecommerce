
const initialState ={
    products: [],
    quantity: 0,
    isAuthenticated: false 
    
}

const reducer = (state= initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload 
            const exist = state.products.find((item) => item.id === newItem.id);
            if(exist) {
                exist.qty +=1 
                return {
                    ...state,
                    quantity: state.quantity +1

                }
                
            } else {
                newItem.qty = 1
                return{
                    ...state,
                    products: state.products.concat(newItem),
                    quantity: state.quantity +1
                }
            }
        case 'REDUCE_QUANTITY':
            return {
                ...state, 
                products: state.products.map(p => p.id === action.payload.id ? { ...p, qty: p.qty - 1}: p),
                quantity: state.quantity -1
            }
        case 'ADD_MORE':
            return {
                ...state, 
                products: state.products.map(p => p.id === action.payload.id ? { ...p, qty: p.qty + 1}: p),
                quantity: state.quantity +1
            }
        case 'DELETE_FROM_CART':
            return {
                ...state,
                products: state.products.filter((item) => item.id !== action.payload.id),
                quantity:  state.quantity - action.payload.qty
           }
        case 'ON_LOGIN':
            console.log(action.payload)
            return {
                ...state, 
                isAuthenticated: action.payload == null ? false: true 
            }
        case 'ON_SIGNOUT':
            return {
                ...state,
                isAuthenticated: false
            }

        default:
            return state
    }
}

export default reducer
//  const [cartItems, setCartItems] = useState([]);
//     const onAdd =(product) => {
//         const exist =cartItems.find((x) => x.id ===product.id);
//         if(exist){
//             setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty:exist.qty +1} : x))
//         } else {
//             setCartItems ([...cartItems, {...product,qty:1}])
//         }
//     } 

// case 'ADD_TO_CART':
//     const newItem = action.payload 
//     const exist = state.products.find((item) => item.id === newItem.id);
//     if(exist) {
//         exist.qty +=1 
//         return state
        
//     } else {
//         newItem.qty = 1
//         return{
//             ...state,
//             products: state.products.concat(newItem)
//         }
//     }

// case 'REDUCE_QUANTITY':
//             console.log(action.payload)
//             const reduceItem = action.payload 
//             const existing = state.products.find((item) => item.id === reduceItem.id);
//             if(existing) {
//                 existing.qty -=1
//                 return state    
//                     // items:state.items.concat(newItem)
//             } else {
//                 return state
//             }
