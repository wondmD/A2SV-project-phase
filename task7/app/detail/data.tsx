
import { title } from "process"
export interface jobtype {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  orgWebsite: string;
  average_rating: number;
  total_reviews: number;
}
const sort = async () => {
  const handleSortChange = async (sortOption: string) => {
    ////////////////////////////////////////////////////////////////////////
    const [sortedJobs, setSortedJobs] = useState<jobtype[]>(await Jobs);
    const countjobs = [...await Jobs].length;
    const handleSortChange = async (sortOption: string) => {
        let sortedArray = [...await Jobs];
        if (sortOption === 'date') {
            sortedArray.sort((a, b) => new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime());
        } else if (sortOption === 'alphabet') {
            sortedArray.sort((a, b) => a.title.localeCompare(b.title));
        }
        setSortedJobs(sortedArray);
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////

    let sortedArray = [...await Jobs];
    if (sortOption === 'date') {
        sortedArray.sort((a, b) => new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime());
    } else if (sortOption === 'alphabet') {
        sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    }
    setSortedJobs(sortedArray);
};


}
const fetchJobs = async (): Promise<jobtype[]> => {
  try {
    const Data = await fetch('https://akil-backend.onrender.com/opportunities/search');
    const JsonJobs = await Data.json();
    const response = JsonJobs.data;
    return response;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};


const Jobs = fetchJobs();

export default Jobs;

