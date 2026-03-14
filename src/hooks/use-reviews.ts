import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Review, ReviewInput } from "@/types";

const REVIEWS_KEY = "schp_reviews";

// Helper to simulate network delay for more realistic UX
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getStoredReviews = (): Review[] => {
  const data = localStorage.getItem(REVIEWS_KEY);
  if (!data) {
    // Seed initial data if empty
    const initialReviews: Review[] = [
      {
        id: "1",
        name: "Sarah Jenkins",
        rating: 5,
        text: "SCHP Technologies delivered our MVP perfectly on time. The AI integration was flawless and the codebase is incredibly clean.",
        date: new Date(Date.now() - 86400000 * 5).toISOString(),
        approved: true
      },
      {
        id: "2",
        name: "Marcus Thorne",
        rating: 5,
        text: "Outstanding custom software development. They understood our complex enterprise needs and built a robust management system.",
        date: new Date(Date.now() - 86400000 * 12).toISOString(),
        approved: true
      }
    ];
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(initialReviews));
    return initialReviews;
  }
  return JSON.parse(data);
};

export function useReviews() {
  return useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      await delay(400); // Fake network latency
      return getStoredReviews();
    }
  });
}

export function useApprovedReviews() {
  return useQuery({
    queryKey: ["reviews", "approved"],
    queryFn: async () => {
      await delay(400);
      return getStoredReviews().filter(r => r.approved);
    }
  });
}

export function useCreateReview() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: ReviewInput) => {
      await delay(600);
      const reviews = getStoredReviews();
      const newReview: Review = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        name: data.name,
        rating: data.rating,
        text: data.text,
        date: new Date().toISOString(),
        approved: true // Auto-approve for demo, usually false in real apps
      };
      
      localStorage.setItem(REVIEWS_KEY, JSON.stringify([newReview, ...reviews]));
      return newReview;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    }
  });
}

export function useUpdateReview() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Review> & { id: string }) => {
      await delay(300);
      const reviews = getStoredReviews();
      const updatedReviews = reviews.map(r => 
        r.id === id ? { ...r, ...updates } : r
      );
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(updatedReviews));
      return updatedReviews.find(r => r.id === id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    }
  });
}

export function useDeleteReview() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      await delay(300);
      const reviews = getStoredReviews();
      const filtered = reviews.filter(r => r.id !== id);
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(filtered));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    }
  });
}
