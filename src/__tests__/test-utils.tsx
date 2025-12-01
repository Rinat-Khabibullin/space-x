import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { render } from '@testing-library/react';

export function renderWithProvider(ui: ReactNode) {
  return render(
    <MantineProvider>
      {ui}
    </MantineProvider>
  )
}