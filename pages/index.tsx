'use client'

import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import { BrowserWallet } from '@meshsdk/core';
import { useEffect } from 'react';
import { MeshProvider } from "@meshsdk/react";
import { useWalletList } from '@meshsdk/react';

function MyComponent() {
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
     <CardanoWallet />
    </>
  );
}

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link
          rel="icon"
          href="https://meshjs.dev/favicon/favicon-32x32.png"
        />
        <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <h1 className="title"> JAda en tittel </h1>
   
        <MyComponent/>


      </main>
    </div>
  );
}
