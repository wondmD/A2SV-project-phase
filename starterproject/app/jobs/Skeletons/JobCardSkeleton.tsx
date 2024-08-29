const JobCardSkeleton = () => {
  return (
   
    <div className="font-thin font-poppins shadow-lg hover:shadow-2xl p-6 m-4 border rounded-[30px] border-solid border-[#eee] md:text-l animate-pulse">
    <div className="">
      <div className="grid grid-cols-[1fr_6fr] mb-2 sm:flex border-b-2 shadow-sm border-[#eee] md:border-none md:shadow-none">
       
        <div>
          <div className="m-1 mt-2 w-[50px] md:w-[80px] md:h-[80px] h-[50px] bg-gray-200 rounded-full border border-solid border-[#eee] p-1"></div>
        </div>
        <div className="ml-2 w-[200px]">
          <div className="mt-1 mx-2 h-6 md:h-10 bg-gray-200 rounde mb-2 w-[200px]"></div>
          <div>
            <div className="flex text-[17px] w-[200px]">
              <div className="h-4 bg-gray-200 rounded w-[100px] mx-2"></div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden">
        <div className="h-4 w-4 m-1 bg-gray-200 rounded-full"></div>
        <span className="h-4 bg-gray-200 rounded w-1/4 ml-2"></span>
        <div className="w-[18px] h-[18px] ml-4 m-1 bg-gray-200 rounded-full"></div>
        <span className="h-4 bg-gray-200 rounded w-1/4 ml-2"></span>
        <div className="w-[15px] h-[15px] flex flex-row">
          <div className="w-[15px] h-[15px] bg-gray-200 rounded mr-1"></div>
          <p className="flex h-4 w-16 bg-gray-200 rounded"></p>
        </div>
      </div>

      <div className="h-4 bg-gray-200 rounded w-3/4 md:w-full mb-4"></div>
      <div className="m-2">
        <p className="h-4 bg-gray-200 rounded w-1/4"></p>
      </div>

      <div className="flex m-2">
        <div className="mx-2 h-8 bg-gray-200 rounded-full w-1/4"></div>
        <div className="flex m-3">
          
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default JobCardSkeleton;