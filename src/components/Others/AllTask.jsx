const AllTask = () => {
  return (
    <div className="flex flex-col gap-4 w-1/2 mt-5">
      <h2 className="text-5xl uppercase font-bold mb-3">All Task List</h2>
      <div className="flex flex-col gap-4 overflow-y-auto h-[700px] pr-5" id="AllTask">
        <div className="items bg-blue-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Vikash</h3>
          <h6 className="text-2xl font-medium">Designing</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
        <div className="items bg-red-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Vivek</h3>
          <h6 className="text-2xl font-medium">Development</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
        <div className="items bg-purple-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Naresh</h3>
          <h6 className="text-2xl font-medium">Development</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
        <div className="items bg-orange-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Ramswarup</h3>
          <h6 className="text-2xl font-medium">Development</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
        <div className="items bg-green-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Pankaj</h3>
          <h6 className="text-2xl font-medium">Development</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
        <div className="items bg-sky-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Hardik</h3>
          <h6 className="text-2xl font-medium">Ceo</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
        <div className="items bg-yellow-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Vijay</h3>
          <h6 className="text-2xl font-medium">Bussiness</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
        <div className="items bg-gray-400 p-10 flex items-center justify-between gap-3 rounded-md">
          <h3 className="text-2xl font-semibold">Karuna</h3>
          <h6 className="text-2xl font-medium">Development</h6>
          <p className="text-2xl font-medium">Status*</p>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
