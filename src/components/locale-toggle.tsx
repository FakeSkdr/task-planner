"use client";

import * as React from "react";
import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";

import FrenchFlag from "@/components/icons/flags/fr";
import EnglishFlag from "@/components/icons/flags/en";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setLocale } from "@/utils/i18n.utils";

const flags = {
  fr: <FrenchFlag />,
  en: <EnglishFlag />,
};

export function LocaleToggle() {
  const locale = useLocale();

  const flag = flags[locale as keyof typeof flags];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {flag}
          <span className="sr-only">Select Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-muted" align="end">
        <DropdownMenuItem
          className="gap-2 text-muted-foreground hover:text-foreground"
          onClick={() => setLocale("fr")}
        >
          <FrenchFlag /> Français
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2 text-muted-foreground hover:text-foreground"
          onClick={() => setLocale("en")}
        >
          <EnglishFlag /> English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
