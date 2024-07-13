"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletContextProvider from "../components/WalletContextProvider";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <WalletContextProvider>{children}</WalletContextProvider>
    </QueryClientProvider>
  );
}
