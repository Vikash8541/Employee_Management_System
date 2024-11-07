// eslint-disable-next-line react/prop-types
const TaskListNumber = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { taskCounts } = data;

  // Log the incoming taskCounts object for debugging
  console.log(taskCounts);

  // Define the task types and their default values, if some are missing
  const taskMapping = {
    newTask: "New Task",
    completed: "Completed Task",
    accepted: "Accepted Task",
    failed: "Failed Task",
  };

  const bgBackground = {
    newTask: "bg-blue-400",
    completed: "bg-green-400",
    accepted: "bg-yellow-400",
    failed: "bg-red-400",
  };

  return (
    <div className="flex items-center justify-between w-full mt-10 gap-6">
      {Object.keys(taskMapping).map((key, idx) => (
        <div
          key={idx}
          className={`${bgBackground[key]} py-10 px-5 rounded-lg w-[45%]`}
        >
          <h4 className="text-2xl text-white font-semibold">
            {taskCounts[key] !== undefined ? taskCounts[key] : 0}
          </h4>
          <h2 className="text-2xl text-white font-semibold">{taskMapping[key]}</h2>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumber;
