import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrapingJobServiceBase } from "./base/scrapingJob.service.base";

@Injectable()
export class ScrapingJobService extends ScrapingJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
