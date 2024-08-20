// hooks/useBookmarkedOpportunities.ts
import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useSession } from 'next-auth/react';

interface Opportunity {
  eventID: string;
  title: string;
  opType: string;
  orgName: string;
  datePosted: string;
  dateBookmarked: string;
  logoUrl: string;  
  location: string;
}

export const useBookmarkedOpportunities = () => {
  const [bookmarkedOpportunities, setBookmarkedOpportunities] = useState<Opportunity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();
  const authToken = session?.user.data.accessToken;

  useEffect(() => {
    const fetchBookmarkedOpportunities = async () => {
      try {
        const response = await fetch('https://akil-backend.onrender.com/bookmarks', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBookmarkedOpportunities(data.data);
        } else {
          const error = await response.text();
          console.error('Error:', error);
          setError('Failed to fetch bookmarked opportunities.');
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error fetching bookmarked opportunities:', error);
          setError(error.message);
        } else {
          console.error('Unexpected error:', error);
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    };

    if (authToken) {
      fetchBookmarkedOpportunities();
    }
  }, [authToken]);

  return { bookmarkedOpportunities, error };
};
