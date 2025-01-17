import { type PopulationCompositionPerYearRequest } from "@/types/PopulationCompositionPerYearRequest";
import { type PopulationCompositionPerYearResponse } from "@/types/PopulationCompositionPerYearResponse";
import { fetcher } from "../api";

export const getPopulationCompositionPerYear = async (
  params: PopulationCompositionPerYearRequest,
) => {
  const path = "api/v1/population/composition/perYear";

  return await fetcher<PopulationCompositionPerYearResponse>(path, params);
};
