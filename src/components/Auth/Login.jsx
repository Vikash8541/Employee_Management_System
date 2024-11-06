import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Login = ({loginHandle}) => {

// Now save the data of input value and password on submit , so we use useState and onchange in an input field.

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



// Stop the by default feature of form 
 const submitHandler =(e) =>{
    e.preventDefault();

    loginHandle(email,password);

    setEmail("")
    setPassword("")
 }


  return (
    <>
     <div className="h-screen w-full flex items-center justify-center flex-col gap-5">
        <h1 className="text-5xl text-white text-center font-bold mb-4 capitalize">Login Here</h1>
        <div className="loginbox text-white border w-1/3 border-gray-100 rounded-md p-10 ">
            <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-start justify-center gap-8 w-full h-auto">
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="text-black font-medium border outline-none w-full border-gray-100 placeholder:text-black rounded-md p-3" type="email" required placeholder="Enter your Email" />
                <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="text-black font-medium outline-none placeholder:text-black border w-full border-gray-100 rounded-md p-3" type="password" required placeholder="Enter your Password" />
                <button  type="submit" className="bg-gray-950 w-full text-white text-center rounded-md p-4">Submit</button>
            </form>
        </div>    
    </div> 
    </>
  )
}

export default Login
