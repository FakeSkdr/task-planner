import Link from "next/link";

import { Home } from "lucide-react";

import { ModeToggle } from "../components/mode-toggle";
import { LocaleToggle } from "../components/locale-toggle";

export function LayoutHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-muted px-6">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">
          <Home className="text-muted-foreground hover:text-foreground"></Home>
        </span>
      </Link>

      <div className="flex flex-row gap-4">
        <ModeToggle />
        <LocaleToggle />
      </div>
    </header>
  );
}
