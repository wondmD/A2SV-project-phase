'use client';

import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Bookmark({ id, bookmarked }: { id: string; bookmarked: boolean }) {
    const router = useRouter();
    const { data: session } = useSession()

    const handleClick = async () => {
        // if (!session?.user.data) {
        //     router.push('/api/auth/signin?callbackUrl=/opportunities');
        //     return;
        // }

        try {
            let response;
            if (!bookmarked) {
                response = await axios.post(
                    `https://akil-backend.onrender.com/bookmarks/${id}`,
                    {},
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${session?.user.data.accessToken}`,
                        },
                    },
                );
            } else {

                response = await axios.delete(`https://akil-backend.onrender.com/bookmarks/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.user.data.accessToken}`,
                    },
                });

            }

            router.refresh();
        } catch (err) {
            alert(bookmarked);
        }
    };

    return (
        <>
            {!bookmarked ? (
                <button onClick={handleClick}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 384 512'
                        className='w-5 h-6 text-slate-800 z-50 cursor-pointer'
                        fill='currentcolor'
                    >
                        <path d='M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z' />
                    </svg>
                </button>
            ) : (
                <button onClick={handleClick}>
                    bookmarked
                </button>
            )}
        </>
    );
}