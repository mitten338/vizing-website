import acceptLanguage from "accept-language";
import { fallbackLng, languageArr, languageCookieName } from "@/utils/constant";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

acceptLanguage.languages(languageArr);

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const pathnameHasLocale = languageArr.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return;
  }
  let lng;
  if (request.cookies.has(languageCookieName)) {
    // @ts-ignore
    lng = acceptLanguage.get(request.cookies.get(languageCookieName).value);
  }
  if (!lng) lng = acceptLanguage.get(request.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  request.nextUrl.pathname = `/${lng}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}
