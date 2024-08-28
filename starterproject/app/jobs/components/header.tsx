"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header: React.FC<{
  handleClick: () => void;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ handleSortChange }) => {
  const router = useRouter();
  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push("jobs/bookmarks");
  };
  const handleSignOut = () => {
    signOut()
        .then(() => {
            // Redirect to the callback URL
            window.location.href = '/';
        })
        .catch((error) => {
            console.error('Sign out error:', error);
        });
};

  return (
    <div className="  ">
      <div className="">
        <div>
          <h1 className="ml-5 flex font-extrabold text-2xl mt-3 md:text-6xl">
            Opportunities
            <button
              onClick={() => {
                router.push("jobs/bookmarks");
              }}
              className="hidden md:flex md:mt-5 md:pt-1 relative pb-2 mx-10 mb-5 mt-0 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              My bookmarks
            </button>
            <button
            className="max-sm:hidden ml-10 w-[25px] h-[25 px]"
            onClick={handleSignOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 29.5 42 C 32.519774 42 35 39.519774 35 36.5 A 1.50015 1.50015 0 1 0 32 36.5 C 32 37.898226 30.898226 39 29.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 29.5 9 C 30.898226 9 32 10.101774 32 11.5 A 1.50015 1.50015 0 1 0 35 11.5 C 35 8.4802259 32.519774 6 29.5 6 L 11.5 6 z M 33.484375 15.484375 A 1.50015 1.50015 0 0 0 32.439453 18.060547 L 36.878906 22.5 L 15.5 22.5 A 1.50015 1.50015 0 1 0 15.5 25.5 L 36.878906 25.5 L 32.439453 29.939453 A 1.50015 1.50015 0 1 0 34.560547 32.060547 L 41.560547 25.060547 A 1.50015 1.50015 0 0 0 41.560547 22.939453 L 34.560547 15.939453 A 1.50015 1.50015 0 0 0 33.484375 15.484375 z"></path>
              </svg>
            </button>
            <button
              onClick={() => {
                router.push("jobs/bookmarks");
              }}
              className="md:hidden ml-10 w-[30px] h-[30px]"
            >
              <img src="/images/booke.png" alt="" />
            </button>
            <button
            className="md:hidden ml-10 w-[25px] h-[25 px]"
            onClick={handleSignOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 29.5 42 C 32.519774 42 35 39.519774 35 36.5 A 1.50015 1.50015 0 1 0 32 36.5 C 32 37.898226 30.898226 39 29.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 L 29.5 9 C 30.898226 9 32 10.101774 32 11.5 A 1.50015 1.50015 0 1 0 35 11.5 C 35 8.4802259 32.519774 6 29.5 6 L 11.5 6 z M 33.484375 15.484375 A 1.50015 1.50015 0 0 0 32.439453 18.060547 L 36.878906 22.5 L 15.5 22.5 A 1.50015 1.50015 0 1 0 15.5 25.5 L 36.878906 25.5 L 32.439453 29.939453 A 1.50015 1.50015 0 1 0 34.560547 32.060547 L 41.560547 25.060547 A 1.50015 1.50015 0 0 0 41.560547 22.939453 L 34.560547 15.939453 A 1.50015 1.50015 0 0 0 33.484375 15.484375 z"></path>
              </svg>
            </button>
          </h1>
        </div>

        <div className="flex justify-between items-center mt-3">
          <div className="text-left">
            <p className="text-sm md:text-[20px] ml-10 mt-2 font-light">
              showing 10 results
            </p>
          </div>

          <div className="flex text-right max-md:text-sm">
            <div className="bg-[#fff] ">
              <select
                className="text rounded bg-white border-0 border-r-4 h-10 w-[180px] mr-5"
                onChange={handleSortChange}
              >
                <option value="all">sort by</option>
                <option value="date">Date</option>
                <option value="alphabet">Alphabetically</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
