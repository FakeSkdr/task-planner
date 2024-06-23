"use server";

import { cookies } from "next/headers";

export const setLocale = (locale: string) => {
  cookies().set("NEXT_LOCALE", locale);
};

export const getLocale = () => {
  return cookies().get("NEXT_LOCALE")?.value;
};
