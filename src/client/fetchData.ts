import { APIResponse } from "./types";

export const fetchData = async <T>(url: string): Promise<APIResponse<T>> => {
  const response = await fetch(url);
  const data = await response.json()
  return data as APIResponse<T>;
}