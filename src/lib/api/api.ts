import "server-only";
import { config } from "./config";
import { FetchError } from "./errors";

const createSearchParams = (params?: Record<string, string | undefined>) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, value]) => value !== undefined),
  ) as Record<string, string>;

  return new URLSearchParams(filteredParams).toString();
};

const createHeaders = (init?: RequestInit) => {
  const headers = init?.headers ?? {};
  const mergeHeaders = {
    ...config.defaultHeaders,
    ...headers,
  };

  return new Headers(mergeHeaders);
};

export const fetcher = async <T>(
  path: string,
  params?: Record<string, string | undefined>,
  init?: RequestInit,
): Promise<T | FetchError> => {
  const headers = createHeaders(init);
  const _init = {
    ...init,
    headers,
  };
  const _params = createSearchParams(params);
  const url = `${config.baseURL}/${path}`;
  const res = await fetch(`${url}?${_params}`, _init);

  if (!res.ok) {
    return new FetchError("サーバーからの応答が異常です", res.status);
  }

  return (await res.json()) as T;
};
