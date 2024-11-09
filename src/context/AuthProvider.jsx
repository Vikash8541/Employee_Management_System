import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utilits/LocalStorage";



export const AuthValue = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  // To do dynamic pass the value of authValue by useData
  const [useData , setUseData] =useState(null)


  // To run side way so we use UseEffect
// To seperate the employees data and admin data from getLocalStorage

  useEffect(()=>{
     const {employees,admin} = getLocalStorage()
      setUseData({employees,admin})
  },[])

  return (
    <div>
        <AuthValue.Provider value={useData}>
            {children}
        </AuthValue.Provider>
    </div>
  )
}

export default AuthProvider
