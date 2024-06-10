import { Website as TWebsite } from "../api/website/Website";

export const WEBSITE_TITLE_FIELD = "id";

export const WebsiteTitle = (record: TWebsite): string => {
  return record.id?.toString() || String(record.id);
};
