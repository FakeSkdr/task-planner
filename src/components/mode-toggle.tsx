"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const t = useTranslations("ModeToggle");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="size-5 rotate-0 scale-100 text-muted-foreground transition-all hover:text-foreground dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-5 rotate-90 scale-0 text-muted-foreground transition-all hover:text-foreground dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-muted" align="end">
        <DropdownMenuItem
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme("light")}
        >
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme("dark")}
        >
          {t("dark")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
