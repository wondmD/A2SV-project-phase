

const BookmarkSkeleton = () => {
    return (
        <div className="w-[90%] ml-[5%] md:w-[60%] md:ml-[20%] text-black">
      <h1 className="text-2xl m-3 md:text-5xl font-extrabold">
        <div className="h-8 md:h-12 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((index) => (
          <li
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 animate-pulse"
          >
            <div className="flex items-center mb-4">
              <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-gray-200 rounded-full border border-solid border-[#eee] p-2"></div>
              <div className="ml-4 flex-1">
                <div className="h-6 md:h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="flex items-center mt-1 text-sm">
                  <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 ml-1"></div>
                  <div className="mx-2 h-4 bg-gray-200 w-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="flex justify-between items-center">
              <div className="px-4 py-2 h-8 bg-gray-200 rounded-full w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
      
    )
}

export default BookmarkSkeleton;