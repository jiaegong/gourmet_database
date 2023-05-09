import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: `https://dapi.kakao.com`,
  headers: { Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}` },
});

AxiosInstance.defaults.paramsSerializer = {
  serialize: (paramObj: { [key: string]: string }) => {
    const params = new URLSearchParams();

    Object.entries(paramObj).forEach(([key, value]) => {
      if (value === null) return;
      if (value) params.append(key, value);
    });

    return params.toString();
  },
};

const getAddressByCoord = async params => {
  const { data } = await AxiosInstance.get('/v2/local/geo/coord2address.json', { params });

  return data;
};

export const mapApi = {
  getAddressByCoord,
};
