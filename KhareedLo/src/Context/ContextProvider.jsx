import React, { Children, createContext, useState } from 'react'

export const Logincontext = createContext(null)

function ContextProvider({children}) {

    const [account, setAccount]= useState()
  return (
    <>
      <Logincontext.Provider value={{account, setAccount}}>
        {children}
      </Logincontext.Provider>
    </>
  )
}

export default ContextProvider
