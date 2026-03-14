export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  approved: boolean;
}

export interface ReviewInput {
  name: string;
  rating: number;
  text: string;
}
