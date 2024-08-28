"use client"

import { useRouter } from "next/navigation";


const Header: React.FC<{ handleClick: () => void; handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void }> = ({handleSortChange }) => {
    const router = useRouter();
    const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
      router.push('jobs/bookmarks')
    

    }

    return (
        <div className="  ">
        <div className="">
          <div>
            <h1 className="ml-5 flex font-extrabold text-4xl mt-3 md:text-6xl">
              Opportunities
              <button
                onClick={()=>{router.push('jobs/bookmarks')}}
                className="hidden md:flex md:mt-5 md:pt-1 relative pb-2 mx-10 mb-5 mt-0 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
                My bookmarks
              </button>
            </h1>
          </div>
          <button
            onClick={()=>handleClick}
            className="md:hidden  md:pt-1 relative pb-2 mx-10 mt-0 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
          >
            My bookmark
          </button>
          <div className="flex justify-between items-center mt-3">
            <div className="text-left">
              <p className="text-[20px] ml-10 mt-2 font-light">
                showing 10 results
              </p>
            </div>

            <div className="flex text-right">
              <div className="bg-[#fff] ">
                <select className="text rounded bg-white border-0 border-r-4 h-10 w-[180px] mr-5"
                 onChange={handleSortChange}>
                  <option value="all">sort by</option>
                  <option value="date">Date</option>
                  <option value="alphabet">Alphabetically</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header;