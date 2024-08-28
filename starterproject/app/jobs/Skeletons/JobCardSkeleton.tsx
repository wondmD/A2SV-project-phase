const JobCardSkeleton = () => {
  return (
   
      <div className="animate-pulse font-thin font-poppins shadow-lg p-6 m-4 border rounded-[30px] border-solid border-[#eee] md:text-l">
        <div className="">
          <div className="grid grid-cols-[1fr_6fr] mb-2 sm:flex border-b-2 shadow-sm border-[#eee] md:border-none md:shadow-none">
            <div>
              <div className="m-1 mt-2 w-[50px] md:w-[80px] md:h-[80px] h-[50px] bg-gray-300 rounded-[50%]"></div>
            </div>
            <div className="ml-2">
              <div className="mt-1 mx-2 h-8 w-[70%] md:w-[50%] bg-gray-300 rounded"></div>

              <div className="mt-2">
                <div className="flex text-[17px]">
                  <div className="h-6 w-[50%] bg-gray-300 rounded"></div>
                  <span className="hidden md:flex ml-2">
                    <span className="mx-2 text-m">•</span>
                    <div className="h-6 w-[50%] bg-gray-300 rounded"></div>
                    <div className="w-[20px] h-[20px] ml-4 mt-2 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-[50%] bg-gray-300 rounded ml-2"></div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex md:hidden">
              <div className="h-4 w-4 m-1 bg-gray-300 rounded"></div>
              <div className="h-6 w-[30%] bg-gray-300 rounded ml-2"></div>
              <div className="w-[18px] h-[18px] ml-4 m-1 bg-gray-300 rounded-full"></div>
              <div className="h-6 w-[50%] bg-gray-300 rounded ml-2"></div>
              <div className="flex flex-row items-center ml-4">
                <div className="w-[15px] h-[15px] bg-gray-300 rounded"></div>
                <div className="h-6 w-[50%] bg-gray-300 rounded ml-2"></div>
              </div>
            </div>

            <div className="mt-2 h-6 w-full md:w-[80%] bg-gray-300 rounded"></div>
            <div className="m-2 h-6 w-[50%] bg-gray-300 rounded"></div>
            <div className="flex m-2">
              <div className="mx-2 h-8 w-[30%] bg-gray-300 rounded-full"></div>

              <div className="flex m-3">
                <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                <div className="h-6 w-[30px] bg-gray-300 rounded ml-2"></div>
                <div className="flex ml-3">
                  <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-[30px] bg-gray-300 rounded ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default JobCardSkeleton;