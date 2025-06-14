export const service = {
  getPosts: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Data")
    }
    const data = await response.json();
    return data;
  },
};
