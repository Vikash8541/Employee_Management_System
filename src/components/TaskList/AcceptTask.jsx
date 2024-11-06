const AcceptTask = () => {
  return (
    <div>
      <div className="items cursor-default flex-shrink-0 bg-purple-600 p-5 h-full w-[400px] rounded-lg">
        <div className="flex items-center justify-between w-full">
          <h4 className="text-white font-medium bg-red-600 rounded-md py-2 px-4 text-sm">
            High
          </h4>
          <h6 className="text-sm text-white font-medium">20 Feb 2024</h6>
        </div>
        <h2 className="my-5 text-3xl text-white font-semibold">
          Make a Youtube Video
        </h2>
        <p>
          Lorem ipsum, dolor sit Lorem ipsum dolor sit amet. amet consectetur
          adipisicing elit. Dolore, soluta.
        </p>

        <div className="button flex items-center justify-between w-full mt-4">
          <button className="text-sm bg-green-600 text-white px-6 py-2 rounded-md">
            In Progress
          </button>
          <button className="text-sm bg-red-600 text-white px-6 py-2 rounded-md">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
