import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthValue } from "./context/AuthProvider";
// import { setLocalStorage } from "./utilits/LocalStorage";

const App = () => {
  // State to store user role and data
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Access authentication data from context
  const authData = useContext(AuthValue);

  // Check for existing login data in localStorage when the component mounts
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser.data || null);
    }
  }, []);


  // To set the localStorage data in browser console after localStorage clear
  // useEffect(()=>{
  //   setLocalStorage();
  // })

  // Login handler function to set user and role in state and localStorage
  const loginHandle = (email, password) => {
    if (authData) {
      // Check if the login credentials match an admin
      const admin = authData.admin.find((e) => email === e.email && e.password === password);
      if (admin) {
        setUser("admin");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      } else {
        // Check if the login credentials match an employee
        const employee = authData.employees.find((e) => email === e.email && e.password === password);
        if (employee) {
          setUser("employee");
          setLoggedInUserData(employee);
          localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
        } else {
          alert("Invalid Login");
        }
      }
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <>
      <h1 className="text-center mt-10 mb-0 pb-10 text-6xl tracking-wider font-bold bg-gradient-to-r from-cyan-300 via-orange-300 to-yellow-300 text-transparent bg-clip-text">
        Employee Management System
      </h1>
      {!user ? (
        <Login loginHandle={loginHandle} />
      ) : (
        user === "admin" ? <AdminDashboard /> : <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
