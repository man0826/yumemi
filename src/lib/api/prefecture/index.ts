import { type PrefecturesResponse } from "@/types/PrefecturesResponse";
import { fetcher } from "../api";

export const getPrefecture = async () => {
  const path = "api/v1/prefectures";

  return await fetcher<PrefecturesResponse>(path);
};
