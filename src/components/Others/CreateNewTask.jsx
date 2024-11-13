import { useContext, useEffect, useState } from "react";
import { AuthValue } from "../../context/AuthProvider";

const CreateNewTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const formHandle = (e) => {
    e.preventDefault();

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");

    console.log(taskTitle, taskDate, assignTo, category, description);
  };

  const authData = useContext(AuthValue);
 

  useEffect(() => {
    // Extract unique categories from tasks
    const allCategories = authData.employees.flatMap((emp) =>
      emp.tasks.map((task) => task.category)
    );
    const uniqueCategories = Array.from(new Set(allCategories));
    setCategories(uniqueCategories);
  }, [authData.employees]);

  return (
    <div className="flex flex-col gap-2 w-[30%] mt-5">
      <h2 className="text-4xl uppercase font-bold mb-1">Create New Task</h2>
      <div className="form bg-[#1c1c1c] p-10 mt-5 rounded-lg ">
        <form
          onSubmit={(e) => formHandle(e)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Task-title"
              className="text-white font-semibold text-lg"
            >
              Task Title
            </label>
            <input
              value={taskTitle}
              required
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              className="bg-transparent border border-gray-100 rounded-md py-2 px-3"
              placeholder="Add your Title"
            />
          </div>
          <div id="date-calender" className="flex flex-col gap-2">
            <label htmlFor="date" className="text-white font-semibold text-lg">
              Task Date
            </label>
            <input
              value={taskDate}
              required
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="bg-transparent border border-gray-100 rounded-md py-2 px-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Assign to"
              className="text-white font-semibold text-lg"
            >
              Assign To
            </label>
            <input
              value={assignTo}
              required
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              className="bg-transparent border border-gray-100 rounded-md py-2 px-3"
              placeholder="Employer Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Category"
              className="text-white font-semibold text-lg"
            >
              Category
            </label>
            <select
              name="Select Category"
              id="Select_Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#1c1c1c] border border-gray-100 rounded-md py-2 px-3"
              required
            >
              <option value=""  >Select Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="text-white font-semibold text-lg"
            >
              Description
            </label>
            <textarea
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              name=""
              id=""
              className="bg-transparent border border-gray-100 rounded-md py-2 px-3"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="bg-purple-800 text-white font-medium text-md py-2 px-6 rounded-md w-max my-2 mx-auto">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
