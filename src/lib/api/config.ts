import "server-only";

const baseURL = "https://yumemi-frontend-engineer-codecheck-api.vercel.app";

const defaultHeaders = {
  "X-API-KEY": process.env.API_KEY!,
};

export const config = {
  baseURL,
  defaultHeaders,
};
