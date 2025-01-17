export type PopulationCompositionPerYearResponse = {
  message: string | null;
  result: PopulationCompositionPerYear;
};

type PopulationCompositionPerYear = {
  boundaryYear: number;
  data: {
    label: string;
    data: PopulationCompositionPerYearItem[];
  }[];
};

type PopulationCompositionPerYearItem = {
  year: number;
  value: number;
  rate?: number;
};
