'use client'

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { useWalletList } from '@meshsdk/react';
import { CardanoWallet, MeshBadge } from "@meshsdk/react";

function MyHome() {
  const wallets = useWalletList();
  console.log("my wallets", wallets);

  return (
    <>
      {wallets.map((wallet, i) => {
        return (
          <p key={i}>
            <img src={wallet.icon} style={{ width: '48px' }} />
            <b>{wallet.name}</b>
          </p>
        );
      })}
    </>
  );


}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Component {...pageProps} />
      <MyHome  />
      <CardanoWallet />
    </MeshProvider>
  );
}
