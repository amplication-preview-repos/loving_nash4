import * as graphql from "@nestjs/graphql";
import { ScrapingJobResolverBase } from "./base/scrapingJob.resolver.base";
import { ScrapingJob } from "./base/ScrapingJob";
import { ScrapingJobService } from "./scrapingJob.service";

@graphql.Resolver(() => ScrapingJob)
export class ScrapingJobResolver extends ScrapingJobResolverBase {
  constructor(protected readonly service: ScrapingJobService) {
    super(service);
  }
}
