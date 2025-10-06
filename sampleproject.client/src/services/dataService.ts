import type { AxiosRequestConfig } from "axios";
import { api } from "../configs/api";

const buildQueryString = (params?: Record<string, any>): string => {
  if (!params) return "";
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });
  return query.toString() ? `?${query.toString()}` : "";
};

// ---- Overloads ----
function get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
function get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<T>;

// ---- Implementation ----
async function get<T>(
  url: string,
  second?: Record<string, any> | AxiosRequestConfig,
  third?: AxiosRequestConfig
): Promise<T> {
  let params: Record<string, any> | undefined;
  let config: AxiosRequestConfig | undefined;

  if (second && "headers" in second) {
    // case: get(url, config)
    config = second as AxiosRequestConfig;
  } else {
    // case: get(url, params, config?)
    params = second as Record<string, any>;
    config = third;
  }

  const queryString = buildQueryString(params);
  const response = await api.get<T>(`${url}${queryString}`, config);
  return response.data;
}

export const dataService = {
  get,
  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.post<T>(url, data, config);
    return response.data;
  },
  put: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.put<T>(url, data, config);
    return response.data;
  },
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await api.delete<T>(url, config);
    return response.data;
  },
};
