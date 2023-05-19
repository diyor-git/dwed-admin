import axios from "axios";

function axiosBaseQuery({ Authorization }: any) {
  return async ({ url, method, data, params, headers }: any) => {
    const axiosInstance = axios.create({
      baseURL: "http://89.236.219.215:4000/",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization,
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
