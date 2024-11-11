'use client';

import { ThemeProvider } from "@mui/material/styles";
import { theme } from '@monorepo/ui';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}