import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";

// eslint-disable-next-line react/prop-types
const Tasklist = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-10 mt-10">
        <h2 className="text-4xl font-semibold">Task Details</h2>
        <div id="taskDetails" className="task-items-details rounded-lg flex items-center justify-start gap-5 flex-nowrap overflow-x-auto h-[55%] pb-10 w-full">
          {data.tasks.map((task, idx) => {
            let saveInfo = [];

            if (task.accept) {
              saveInfo.push(<AcceptTask data = {task} />);
            }
            if (task.newTask) {
              saveInfo.push(<NewTask data = {task} key={`newTask-${idx}`} />);
            }
            if (task.completed) {
              saveInfo.push(<CompleteTask data = {task} key={`completed-${idx}`} />);
            }
            if (task.failed) {
              saveInfo.push(<FailedTask data = {task} key={`failed-${idx}`} />);
            }
            return saveInfo;
          })}
        </div>
      </div>
    </>
  );
};

export default Tasklist;
