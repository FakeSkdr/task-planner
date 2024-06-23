import { getRequestConfig } from "next-intl/server";
import { getLocale } from "./utils/i18n.utils";

const locales = ["en", "fr"];

export default getRequestConfig(async () => {
  let locale = await getLocale();

  if (!locales.includes(locale as any)) {
    locale = "fr";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
