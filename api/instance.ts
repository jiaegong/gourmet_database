import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,
});

// 파라미터 직렬화
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

export default AxiosInstance;
