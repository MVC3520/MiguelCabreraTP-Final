export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export interface ApiResponse {
  results: Character[];
}

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}