import React, { useReducer } from 'react'
import AddProduct from './AddProduct'

const ProductsReducer = () => {

    // useReducer hook
    const initializeStateUseReducer = {
        products: [
            {id: 1, name: 'S22 r', price: 100},
            {id: 2, name: 'S22 Plus r', price: 101},
            {id: 3, name: 'S22 Ultra r', price: 102},
            {id: 4, name: 'S23 r', price: 103},
            {id: 5, name: 'S23 Plus r', price: 104},
            {id: 6, name: 'S23 Ultra r', price: 105},
            {id: 7, name: 'Iphone 14 r', price: 106}
        ],
        counter: 0
    }

    const reducer = (state, type) => {
        switch(type.action){
            case 'ADD_PRODUCT':
                type.payload.id = state.products.length + 1
                return {
                    ...state,
                    products: [...state.products, type.payload]
                }
            case 'INCREMENT':
                return {
                    ...state,
                    counter: state.counter+1
                }
            case 'DECREMENT':
                return {
                    ...state,
                    counter: state.counter-1
                }
            default:
                return state
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initializeStateUseReducer)

    const addProductToProducts = (product) => {
        dispatch({
            action: 'ADD_PRODUCT',
            payload: product
        })
    }

    const increment = () => {
        dispatch({
            action: 'INCREMENT'
        })
    }

    const decrement = () => {
        dispatch({
            action: 'DECREMENT'
        })
    }

    return (
        <>
            <h3>Counter +/-</h3>
            <div className='text-center mb-5'>
                <p className='text-center'> {state.counter} </p>
                <button type='button' className='btn btn-primary' onClick={increment}>Increment</button>
                <button type='button' className='btn btn-danger ms-2' onClick={decrement}>Decrement</button>
            </div>
            <hr />
            
            <AddProduct addProductToProducts={addProductToProducts} />
            <hr />
            
            <table className='table mt-2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {state.products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default ProductsReducer