import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import jobtype from './dataInterface';

const fetchJobsun = async (): Promise<jobtype[]> => {
  try {
    const response = await fetch('https://akil-backend.onrender.com/opportunities/search');
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

const useFetchJobs = () => {
  const { data: session, status } = useSession();
  const [jobs, setJobs] = useState<jobtype[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);

      // Log session for debugging
      console.log('Session object:', session);

      try {
        if (status === 'authenticated' && session?.user.data.accessToken) {
          const response = await fetch('https://akil-backend.onrender.com/opportunities/search', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${session.user.data.accessToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const json = await response.json();
            setJobs(json.data);
          } else {
            console.error('Failed to fetch jobs:', response.statusText);
          }
        } else {
          // Fetch jobs without authentication as a fallback
          console.log('No access token found, fetching fallback jobs.');
          const fallbackJobs = await fetchJobsun();
          setJobs(fallbackJobs);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [session, status]);

  return { jobs, loading };
};

export default useFetchJobs;
