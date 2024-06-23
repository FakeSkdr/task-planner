import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { getLocale } from "@/utils/i18n.utils";

import { LayoutHeader } from "./layout-header";
import { LayoutFooter } from "./layout-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "flex h-screen min-h-screen flex-col bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <LayoutHeader />
            <div className="flex flex-1 flex-col">{children}</div>
            <LayoutFooter />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
