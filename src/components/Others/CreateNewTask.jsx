const CreateNewTask = () => {
  return (
    <div className="flex flex-col gap-2 w-[30%] mt-5">
    <h2 className="text-4xl uppercase font-bold mb-1">Create New Task</h2>
    <div className="form bg-[#1c1c1c] p-10 mt-5 rounded-lg ">
      <form className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Task-title"
            className="text-white font-semibold text-lg"
          >
            Task Title
          </label>
          <input
            type="text"
            className="bg-transparent border border-gray-100 rounded-md py-2 px-3"
            placeholder="Add your Title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-white font-semibold text-lg">
            Task Date
          </label>
          <input
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
            className="bg-[#1c1c1c] border border-gray-100 rounded-md py-2 px-3"
          >
            <option value="Select Category">Select Category</option>
            <option value="Select Category">Design</option>
            <option value="Select Category">Development</option>
            <option value="Select Category">Bussiness & Marketing</option>
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
