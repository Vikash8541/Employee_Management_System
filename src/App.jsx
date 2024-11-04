import { useContext, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import {AuthValue} from "./context/AuthProvider"

const App = () => {

  // add useState to check the user or admin is login or not
  const [user,setUser] = useState(null);

    const authdata = useContext(AuthValue)



  // Create a function to check the login or not and also the the email and password parameter as props in login page.
// we setUser set the value according to the panel, i.e admin panel and user panel. To check the value with the setUser value and show the panel according to value.


  const loginHandle = (email,password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser("admin")
    }
    else if (authdata && authdata.employees.find((e) => email == e.email && e.password == password)){
      

      setUser("employees")
    }
    else{
      alert("Invalid Login");
    }
  }
  return (
    <>
      {!user ? <Login loginHandle = {loginHandle}/> : " "} 
      {user == "admin" ? <AdminDashboard/> : (user == "employees" ? <EmployeeDashboard/> : null)}
    </>
  )
}

export default App
