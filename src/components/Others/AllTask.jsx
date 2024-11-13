import { useContext } from "react";
import { AuthValue } from "../../context/AuthProvider";

const AllTask = () => {

  const authData = useContext(AuthValue)


  return (
    <div className="flex flex-col gap-4 w-[65%] mt-5">
      <h2 className="text-4xl uppercase font-bold mb-3">All Task List</h2>
      <div className="flex flex-col gap-4 overflow-y-auto h-[625px] pr-5" id="AllTask">
        <div className="items bg-gray-900 py-10 px-8 flex items-start w-full flex-col justify-between gap-8 rounded-md">
          {authData.employees.map((emp)=>{
            return(
              <div className="tables w-full" key={emp.id}>
                <h2 className="text-2xl font-bold mb-4">Employee No : {emp.id}</h2>
              <table className="w-full border border-gray-200 rounded-md">
              <thead className="w-full">
                <tr className="w-full flex items-center justify-between text-lg font-medium bg-gray-200 text-black py-2">
                  <th className="w-1/5 text-left pl-4">Details</th>
                  <th className="w-1/5">New Task</th>
                  <th className="w-1/5">Active Task</th>
                  <th className="w-1/5">Completed Task</th>
                  <th className="w-1/5">Failed Task</th>
                </tr>
              </thead>
              <tbody className="flex items-center justify-between w-full">
                <tr className="w-1/5 text-center flex items-start justify-start">
                  <td className="flex pl-4 flex-col items-start justify-start text-left gap-2 mt-4 font-medium mb-4">
                    <h3 className="font-bold">Name : <span className="font-semibold">{emp.firstName}</span></h3>
                    <h4 className="font-bold">Email : <span className="font-semibold">{emp.email}</span></h4>
                    <p className="font-bold">Password : <span className="font-semibold">{emp.password}</span></p>
                  </td>
                </tr>
                <tr className="w-1/5 font-bold text-center flex items-center justify-center" >
                  <td>{emp.taskCounts.newTask}</td>
                </tr>
                <tr className="w-1/5 font-bold text-center flex items-center justify-center">
                  <td>{emp.taskCounts.accepted}</td>
                </tr>
                <tr className="w-1/5 font-bold text-center flex items-center justify-center">
                  <td>{emp.taskCounts.completed}</td>
                </tr>
                <tr className="w-1/5 font-bold text-center flex items-center justify-center">
                  <td>{emp.taskCounts.failed}</td>
                </tr>
              </tbody>
            </table>
            </div>
            )
          })}


            
        </div>
        
      </div>
    </div>
  );
};

export default AllTask;
