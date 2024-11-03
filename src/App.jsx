import { useEffect } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage, setLocalStorage } from "./utilits/LocalStorage"

const App = () => {

  // Add useEffect to know the code LocalStorage code is working and also run parellel to use the localStorage.

  useEffect(()=>{
    setLocalStorage();
    // getLocalStorage();
  })


  return (
    <>
      <Login/>
      {/* <EmployeeDashboard/>
      <AdminDashboard/> */}
    </>
  )
}

export default App
