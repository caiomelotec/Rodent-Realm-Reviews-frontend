export type Game = {
  id: number;
  name: string;
  released: string;
  background_image: string;
  genres: { id: number; name: string }[] | undefined;
};

export type GameDetail = {
  description: string;
  platforms: { platform: { id: number; name: string } }[];
  publishers: { id: number; name: string }[];
  website: string;
} & Game;
