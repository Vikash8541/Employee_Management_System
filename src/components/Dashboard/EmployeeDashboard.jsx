import Header from "../Others/Header"
import TaskListNumber from "../Others/TaskListNumber"
import Tasklist from "../TaskList/Tasklist"

// eslint-disable-next-line react/prop-types
const EmployeeDashboard = ({data}) => {
  return (
    <>

    <div className=" p-10 h-screen w-full bg-[#1c1c1c]">
      <h1>{data.id}</h1>
      <Header/>
      <TaskListNumber/>
      <Tasklist/>
    </div>
    </>
  )
}

export default EmployeeDashboard
