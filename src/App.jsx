import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import {AuthValue} from "./context/AuthProvider"
// import { getLocalStorage, setLocalStorage } from "./utilits/LocalStorage"

const App = () => {

  // add useState to check the user or admin is login or not
  const [user,setUser] = useState(null);
  const [loggedInUserData , setLoggedInUserData] = useState(null);

    const authdata = useContext(AuthValue)
    console.log(authdata)


    // To save the data into localStorage after Clear
  // useEffect(()=>{
  //   setLocalStorage()
  //   // getLocalStorage()
  // },[])


  useEffect(()=>{
    if(authdata){
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }

  },[authdata])




  // Create a function to check the login or not and also the the email and password parameter as props in login page.
// we setUser set the value according to the panel, i.e admin panel and user panel. To check the value with the setUser value and show the panel according to value.


  const loginHandle = (email,password)=>{
    if(authdata && authdata.admin.find((e) => email == e.email && e.password == password)){
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}));
    }
    else if (authdata){
      const employee = authdata.employees.find((e) => email == e.email && e.password == password);
      if(employee){
        setUser("employees")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}));
      }
    }
    else{
      alert("Invalid Login");
    }
  }
  return (
    <>
      {!user ? <Login loginHandle = {loginHandle}/> : " "} 
      {user == "admin" ? <AdminDashboard/> : (user == "employees" ? <EmployeeDashboard data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
