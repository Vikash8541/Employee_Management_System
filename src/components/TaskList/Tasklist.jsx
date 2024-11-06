import AcceptTask from "./AcceptTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";

// eslint-disable-next-line react/prop-types
const Tasklist = ({ data }) => {
  return (
    <>
      <div
        id="tasklist"
        className=" mt-10 rounded-lg flex items-center justify-between gap-5 flex-nowrap overflow-x-auto h-[55%] pb-10 w-full"
      >
        <NewTask data={data} />
        <AcceptTask data={data} />
        <CompleteTask data={data} />
        <FailedTask data={data} />
      </div>
    </>
  );
};

export default Tasklist;
