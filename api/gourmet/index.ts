import { PostData, PostForm } from '../../types/post';
import AxiosInstance from '../instance';

export const getGourmetList = async (params) => {
  const { data } = await AxiosInstance.get<PostData[]>('/gourmet', { params });

  return data;
};

export const getOneGourmet = async (id: string) => {
  const { data } = await AxiosInstance.get(`/gourmet/${id}`);

  return data;
};

export const createGourmet = async (form: PostForm) => {
  const { data } = await AxiosInstance.post('/gourmet', form);

  return data;
};

export const updateGourmet = async ({ id, form }) => {
  const { data } = await AxiosInstance.put(`/gourmet/${id}`, form);

  return data;
};

export const deleteGourmet = async (id: string) => {
  const { data } = await AxiosInstance.delete(`gourmet/${id}`);

  return data;
};
