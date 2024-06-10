import { Module } from "@nestjs/common";
import { ScrapingJobModuleBase } from "./base/scrapingJob.module.base";
import { ScrapingJobService } from "./scrapingJob.service";
import { ScrapingJobController } from "./scrapingJob.controller";
import { ScrapingJobResolver } from "./scrapingJob.resolver";

@Module({
  imports: [ScrapingJobModuleBase],
  controllers: [ScrapingJobController],
  providers: [ScrapingJobService, ScrapingJobResolver],
  exports: [ScrapingJobService],
})
export class ScrapingJobModule {}
