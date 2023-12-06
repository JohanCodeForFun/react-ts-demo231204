import { APIResponse } from "./types";

export const fetchData = async <T>(url: string): Promise<APIResponse<T>> => {
  const response = await fetch(url);
  const data: APIResponse<T> = await response.json()
  return data;
}