"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <DndProvider backend={HTML5Backend}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </DndProvider>
  );
}
