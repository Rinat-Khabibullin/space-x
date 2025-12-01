import { createPortal } from "react-dom";
import type { ReactNode } from "react";

interface MyPortalProps {
  children: ReactNode;
}
export function Portal({ children }: MyPortalProps ) {
  const root = document.getElementById("modal-root");
  return createPortal(children, root!);
}
