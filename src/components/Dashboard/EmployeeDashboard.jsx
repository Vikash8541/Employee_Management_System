import Header from "../Others/Header"
import TaskListNumber from "../Others/TaskListNumber"
import Tasklist from "../TaskList/Tasklist"

const EmployeeDashboard = () => {
  return (
    <>
    <div className=" p-10 h-screen w-full bg-[#1c1c1c]">
      <Header/>
      <TaskListNumber/>
      <Tasklist/>
    </div>
    </>
  )
}

export default EmployeeDashboard
