const TaskListNumber = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full mt-10 gap-6">
        <div className="taskNumber bg-red-400 py-10 px-5 rounded-lg w-[45%]">
          <h4 className="text-2xl text-white font-semibold">1</h4>
          <h2 className="text-2xl text-white font-semibold">New Task</h2>
        </div>
        <div className="taskNumber bg-green-400 py-10 px-5 rounded-lg w-[45%]">
          <h4 className="text-2xl text-white font-semibold">3</h4>
          <h2 className="text-2xl text-white font-semibold">Completed Task</h2>
        </div>
        <div className="taskNumber bg-yellow-400 py-10 px-5 rounded-lg w-[45%]">
          <h4 className="text-2xl text-white font-semibold">0</h4>
          <h2 className="text-2xl text-white font-semibold">Accepted Task</h2>
        </div>
        <div className="taskNumber bg-blue-400 py-10 px-5 rounded-lg w-[45%]">
          <h4 className="text-2xl text-white font-semibold">0</h4>
          <h2 className="text-2xl text-white font-semibold">Failed Task</h2>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
