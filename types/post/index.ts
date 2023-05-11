export type Location = {
  x: number | null;
  y: number | null;
};

export interface PostForm {
  name: string;
  rating: number;
  desc: string;
  type: string;
  location: Location;
}

export interface PostData extends PostForm {
  createdDate: string;
  _id: string;
}
