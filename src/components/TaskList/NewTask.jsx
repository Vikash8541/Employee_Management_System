const NewTask = ({data}) => {
  return (
 
         <div className="New-Task items cursor-default flex flex-col justify-between flex-shrink-0 bg-blue-500 p-5 h-full w-[400px] min-h-[280px] rounded-lg">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-white font-medium bg-red-500 rounded-md py-2 px-4 text-sm">
          {data.category}
          </h4>
          <h6 className="text-sm text-white font-medium bg-cyan-600 rounded-md py-2 px-4">{data.taskDate}</h6>
        </div>
        <h2 className="my-5 text-3xl text-white font-semibold">
        {data.taskTitle}
        </h2>
        <p>
        {data.taskDescription}
        </p>

        <div className="button flex items-center justify-between w-full mt-4">
          <button className="text-sm bg-green-600 text-white px-6 py-2 rounded-md">
            Accept
          </button>
          <button className="text-sm bg-red-600 text-white px-6 py-2 rounded-md">
            Reject
          </button>
        </div>
      </div>
    
  )
}

export default NewTask
