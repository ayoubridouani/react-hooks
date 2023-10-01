import { useState } from 'react'
import Products from './Components/Products'
import UserContext from './contexts/UserContext'
import ProductsContext from './Components/ProductsContext'
import ProductsReducer from './Components/ProductsReducer'

function App() {
  
  const [authWithoutHook, setAuthWithoutHook] = useState(false)
  const [type, setType] = useState(1)

  const reverseAuthWithoutHook = () => {
    setAuthWithoutHook(!authWithoutHook)
  }

  const [authWithHook, setAuthWithHook] = useState(false)

  const reverseAuthWithHook = () => {
    setAuthWithHook(!authWithHook)
  }

  return (
    <div className='container'>
      <h1 className='mb-5'>React Hooks</h1>
      <div className='row'>
        <div className='col-4'>
          <button className='btn btn-primary w-100' onClick={() => {setType(1)}}>Product</button>
        </div>
        <div className='col-4'>
          <button className='btn btn-primary w-100' onClick={() => {setType(2)}}>Product Context</button>
        </div>
        <div className='col-4 mb-5'>
          <button className='btn btn-primary w-100' onClick={() => {setType(3)}}>Product Reducer</button>
        </div>
        {
          type === 1 ? (<Products />) : 
          type === 2 ? (<UserContext.Provider value = {{authWithoutHook, reverseAuthWithoutHook, authWithHook, reverseAuthWithHook}}> <ProductsContext /> </UserContext.Provider>) : 
          type === 3 ? (<ProductsReducer />) : ''
        }
      </div>
    </div>
  )
}

export default App