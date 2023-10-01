import React, { useState } from 'react'

const AddProduct = (props) => {

    const [product, setProduct] = useState({name: '', price: ''})

    const handleForm = e => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const saveProduct = e => {
        e.preventDefault()
        props.addProductToProducts(product)
        //setProduct({name: '', price: ''})
    }

    return (
        <div className='create-product'>
            <h3>Create a product</h3>
            <form onSubmit={saveProduct}>
                <div className='form-group'>
                    <label htmlFor='name'></label>
                    <input type='text' className='form-control' name='name' id='name' value={product.name} placeholder='Name' onChange={handleForm} />
                </div>
                <div className='form-group'>
                    <label htmlFor='price'></label>
                    <input type='number' className='form-control' name='price' id='price' value={product.price} placeholder='Price' onChange={handleForm} />
                </div>
                <button type='submit' className='btn btn-primary mt-2 w-100'>Submit</button>
            </form>
            {JSON.stringify(product)}
        </div>
    )
}

export default AddProduct