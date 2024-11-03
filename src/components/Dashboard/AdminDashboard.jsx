import AllTask from "../Others/AllTask"
import CreateNewTask from "../Others/CreateNewTask"
import Header from "../Others/Header"

const AdminDashboard = () => {
  return (
    <>
      <div className="h-screen w-full p-10">
        <Header/>
        <div className=" flex items-start my-10 pb-10 gap-10 justify-between">
        <CreateNewTask/>
        <AllTask/>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
