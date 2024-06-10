import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScrapingJobService } from "./scrapingJob.service";
import { ScrapingJobControllerBase } from "./base/scrapingJob.controller.base";

@swagger.ApiTags("scrapingJobs")
@common.Controller("scrapingJobs")
export class ScrapingJobController extends ScrapingJobControllerBase {
  constructor(protected readonly service: ScrapingJobService) {
    super(service);
  }
}
