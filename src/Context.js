import React, { createContext } from 'react'
import {useState} from 'react'
export const  MainContext = createContext();
function Context({children}) {
  const [content, setContent] = useState([])
  return (
    <MainContext.Provider value={{content , setContent}}>{children}</MainContext.Provider>
  )
}

export default Context