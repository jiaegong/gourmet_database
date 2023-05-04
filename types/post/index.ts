export interface PostForm {
  name: string;
  rating: number;
  desc: string;
  type: string;
  location: string;
}

export interface PostData {
  name: string;
  rating: number;
  desc: string;
  type: string;
  location: string;
  createdDate: string;
  _id: string;
}
