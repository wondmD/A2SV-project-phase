

const BookmarkSkeleton = () => {
    return (
        <div className="w-[90%] ml-[5%] md:w-[60%] md:ml-[20%] text-black">
        <h1 className="text-2xl m-3 md:text-5xl font-extrabold">Bookmarked Opportunities</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, index) => (
            <li
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-pulse"
            >
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-gray-300 rounded-full"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-5 w-[70%] bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-[50%] bg-gray-300 rounded mb-1"></div>
                    <div className="mt-1 flex items-center text-gray-500 text-sm">
                      <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                      <div className="ml-2 h-4 w-[30%] bg-gray-300 rounded"></div>
                      <span className="mx-2">•</span>
                      <div className="h-4 w-[30%] bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="h-4 w-[40%] bg-gray-300 rounded mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 w-[30%] bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-[20%] bg-gray-300 rounded"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
    )
}

export default BookmarkSkeleton;