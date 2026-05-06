const API_BASE = "/api/v1";

export async function api<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || res.statusText);
  }
  return res.json() as Promise<T>;
}

export type Endpoint = {
  id: string;
  url: string;
  method: string;
  status_code: number;
  response_time_ms: number;
  schema_valid: boolean;
  created_at: string;
};
