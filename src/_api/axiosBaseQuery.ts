// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

interface AxiosType {
  url: string;
  method: string;
  data: any;
  params: string;
  headers: any;
}

function axiosBaseQuery({ baseUrl } = { baseUrl: "" }) {
  return async ({ url, method, data, params, headers }: AxiosType) => {
    const token = "";
    const axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    });

    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err: any = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
}

export default axiosBaseQuery;
