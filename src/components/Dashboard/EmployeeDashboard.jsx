import Header from "../Others/Header"
import TaskListNumber from "../Others/TaskListNumber"
import Tasklist from "../TaskList/Tasklist"

// eslint-disable-next-line react/prop-types
const EmployeeDashboard = ({data}) => {
  return (
    <>

    <div className=" p-10 h-auto w-full bg-[#1c1c1c]">
      <Header data = {data}/>
      <TaskListNumber data = {data}/>
      <Tasklist data = {data}/>
    </div>
    </>
  )
}

export default EmployeeDashboard
