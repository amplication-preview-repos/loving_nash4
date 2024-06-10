import { ScrapingJobWhereInput } from "./ScrapingJobWhereInput";
import { ScrapingJobOrderByInput } from "./ScrapingJobOrderByInput";

export type ScrapingJobFindManyArgs = {
  where?: ScrapingJobWhereInput;
  orderBy?: Array<ScrapingJobOrderByInput>;
  skip?: number;
  take?: number;
};
