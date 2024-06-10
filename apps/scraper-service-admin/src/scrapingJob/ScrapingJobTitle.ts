import { ScrapingJob as TScrapingJob } from "../api/scrapingJob/ScrapingJob";

export const SCRAPINGJOB_TITLE_FIELD = "id";

export const ScrapingJobTitle = (record: TScrapingJob): string => {
  return record.id?.toString() || String(record.id);
};
