"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
// import Router from "next/router";

export default function Bookmark({
  id,
  bookmarked,
}: {
  id: string;
  bookmarked: boolean;
}) {
  const router = useRouter();
  const { data: session } = useSession();
  const [bookmarkedState, setBookmarkedState] = useState<boolean>(bookmarked);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    setBookmarkedState(bookmarked);
  }, [bookmarked]);
  // console.log(bookmarked, bookmarkedState)
  const handleClickbook = async () => {
    setLoading(true);
    if (!session){
      router.push('/auth/signin')
    }

    try {
      if (!bookmarkedState) {
        await axios.post(
          `https://akil-backend.onrender.com/bookmarks/${id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.data?.accessToken}`,
            },
          }
        );
        setBookmarkedState(true);
      } else {
        await axios.delete(
          `https://akil-backend.onrender.com/bookmarks/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.data?.accessToken}`,
            },
          }
        );
        setBookmarkedState(false);
      }

      // Optional: Refresh or navigate if necessary
      // router.refresh();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Error handling bookmark:", err.response?.data || err);
        alert(`Error: ${err.response?.data?.message || "Something went wrong"}`);
      } else {
        console.error("Unexpected error:", err);
        alert("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {session?.user?.data?.accessToken ? (
        loading ? (
          <div className="">
            <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-yellow-500"></div>
          </div>
        ) : (
          <button onClick={handleClickbook}>
            <Image
              src={bookmarkedState ? "/images/bookf.png" : "/images/booke.png"}
              width={20}
              height={20}
              alt={bookmarkedState ? "Bookmarked" : "Not bookmarked"}
            />
          </button>
        )
      ) : (
        <Link href={"/auth/signin"}>
          <button>
            <Image
              src={bookmarkedState ? "/images/bookf.png" : "/images/booke.png"}
              width={20}
              height={20}
              alt={bookmarkedState ? "Bookmarked" : "Not bookmarked"}
            />
          </button>
        </Link>
      )}
    </>
  );
}
