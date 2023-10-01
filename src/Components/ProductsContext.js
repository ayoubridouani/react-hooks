import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const ProductsContext = () => {

    // useContext hook
    const context = useContext(UserContext)

    const userSignInSignOutWithoutHook = (value) => {
        value.reverseAuthWithoutHook()
    }

    const userSignInSignOutWithHook = (value) => {
        value.reverseAuthWithHook()
    }

    return (
        <>
            <h3>Context API (without hooks)</h3>
            <UserContext.Consumer>
                {value => (
                    <>
                        <mark>---&gt; {value.authWithoutHook ? 'You are logged in' : 'You are logged out'}</mark>
                        <button className='btn btn-danger float-end' onClick={userSignInSignOutWithoutHook.bind(this, value)}>{value.authWithoutHook ? 'sign out' : 'sign in'}</button>
                        <hr />
                    </>
                )}
            </UserContext.Consumer>

            <h3>Context API (with hooks)</h3>
            <mark>---&gt; {context.authWithHook ? 'You are logged in' : 'You are logged out'}</mark>
            <button className='btn btn-danger float-end' onClick={userSignInSignOutWithHook.bind(this, context)}>{context.authWithHook ? 'sign out' : 'sign in'}</button>
            <hr />
        </>
    )
}

export default ProductsContext