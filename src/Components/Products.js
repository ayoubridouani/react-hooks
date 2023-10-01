import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct'

const Products = () => {

    // useState hook
    const initializeState = {
        products: [
            {id: 1, name: 'S22', price: 100},
            {id: 2, name: 'S22 Plus', price: 101},
            {id: 3, name: 'S22 Ultra', price: 102},
            {id: 4, name: 'S23', price: 103},
            {id: 5, name: 'S23 Plus', price: 104},
            {id: 6, name: 'S23 Ultra', price: 105},
            {id: 7, name: 'Iphone 14', price: 106}
        ],
        counter: 0
    }
    const [listProducts, setListProduct] = useState(initializeState.products)
    const [counter, setCounter] = useState(initializeState.counter)

    // useEffect hook
    useEffect(() => {
        console.log('Hi from useEffect')
        console.log('Counter updated')
    }, [counter])

    const addProductToProducts = (product) => {
        if(product.name === '' || product.price === ''){
            alert('invalid data')
            return
        }
        setListProduct([...listProducts, {...product, id: listProducts.length + 1}])
    }

    const increment = () => {
        setCounter(counter+1)
    }

    const decrement = () => {
        setCounter(counter-1)
    }

    return (
        <>
            <h3>Counter +/-</h3>
            <div className='text-center mb-5'>
                <p className='text-center'> {counter} </p>
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
                    {listProducts.map(product => (
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

export default Products