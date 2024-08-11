import axios, { AxiosInstance, AxiosResponse } from 'axios';

class BookmarkClient {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://akil-backend.onrender.com',
    });
  }

  async getBookmarks(): Promise<Bookmark[]> {
    const response: AxiosResponse<Bookmark[]> = await this.http.get('/bookmarks');
    return response.data;
  }

  async createBookmark(eventId: string): Promise<Bookmark> {
    const response: AxiosResponse<Bookmark> = await this.http.post(`/bookmarks/${eventId}`, {});
    return response.data;
  }

  async deleteBookmark(eventId: string): Promise<void> {
    await this.http.delete(`/bookmarks/${eventId}`);
  }
}

interface Bookmark {
  id: string;
  title: string;
  description: string;
  // Add other relevant properties
}

async function main() {
  const bookmarkClient = new BookmarkClient();

  // Get bookmarks
  const bookmarks = await bookmarkClient.getBookmarks();
  console.log('Bookmarks:', bookmarks);

  // Create a new bookmark
  const newBookmark = await bookmarkClient.createBookmark('6641da139225ab034f769bc5');
  console.log('New bookmark:', newBookmark);

  // Delete a bookmark
  await bookmarkClient.deleteBookmark('6641da139225ab034f769bc5');
  console.log('Bookmark deleted');
}

main();