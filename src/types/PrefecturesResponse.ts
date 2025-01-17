export type PrefecturesResponse = {
  message: string | null;
  result: PrefecturesItem[];
};

type PrefecturesItem = {
  prefCode: number;
  prefName: string;
};
