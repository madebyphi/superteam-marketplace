"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to the Superteam Marketplace
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <WalletMultiButton />
        </div>

        {publicKey && (
          <p className="mt-3 text-2xl">Connected: {publicKey.toBase58()}</p>
        )}
      </main>
    </div>
  );
}
