'use client'

import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import { BrowserWallet } from '@meshsdk/core';
import { useEffect } from 'react';
import { useWalletList } from '@meshsdk/react';


export default function Home() {


  const wallets = useWalletList();
  console.log(wallets);
  //.................

  // useEffect & await: https://dev.to/stlnick/useeffect-and-async-4da8
  useEffect(() => {
    (async () => {
      console.log("In useEffect..")


      // const wallets = BrowserWallet.getInstalledWallets();
      // console.log(wallets)

      // const wallet =   {
      //   "name": "yoroi",
      //   "icon": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA3MiA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExODRfODQyNDApIj4KPHBhdGggZD0iTTU1LjYyNzEgNDguOTEzNkw0OS45MjEgNTIuODcxMkw3LjkwMjMyIDIzLjg2MjNDNy45MDIzMiAyMy44MDU2IDcuOTAyMzIgMjMuNzQ4OCA3Ljg4NTYgMjMuNjkyVjIxLjEwMzdDNy44ODU2IDIwLjI2NDMgNy44ODU2IDE5LjQyNjEgNy44ODU2IDE4LjU4ODlWMTUuOTUzOUw1NS42MjcxIDQ4LjkxMzZaTTQzLjkwMDYgMTEuNDc1M0M0MS4zNjM1IDEzLjIxMTkgMzguODAyOSAxNC45MTUyIDM2LjI2NTggMTYuNjUxOUMzNi4xMzk2IDE2Ljc2NjYgMzUuOTc1MSAxNi44MzAyIDM1LjgwNDQgMTYuODMwMkMzNS42MzM4IDE2LjgzMDIgMzUuNDY5MyAxNi43NjY2IDM1LjM0MzEgMTYuNjUxOUMzMi4yMDc2IDE0LjQ3MSAyOS4wNTU0IDEyLjMxMDIgMjUuOTE2NSAxMC4xNDYxQzIyLjYxMzkgNy44NTUwMyAxOS4zMTM0IDUuNTU3MyAxNi4wMTUyIDMuMjUyODlMMTEuMzMyIDBIMEMwLjYwMTY5OSAwLjQyMDgwNSAxLjA5NjQzIDAuNzc0ODE2IDEuNTk0NSAxLjExODgxTDEwLjQ3NjMgNy4yNzA1OEMxMy40MDQ1IDkuMzA1NTkgMTYuMzMxNyAxMS4zNDA2IDE5LjI1NzcgMTMuMzc1NkMyMi4wMTIyIDE1LjI4OTMgMjQuNzU5OSAxNy4yMTI5IDI3LjUxNzcgMTkuMTIzM0MzMC4xMzUxIDIwLjkzNjcgMzIuNzU5MiAyMi43MzAyIDM1LjM3NjYgMjQuNTQ3QzM1LjQ4MjMgMjQuNjQyNyAzNS42MTk5IDI0LjY5NTggMzUuNzYyNyAyNC42OTU4QzM1LjkwNTQgMjQuNjk1OCAzNi4wNDMgMjQuNjQyNyAzNi4xNDg4IDI0LjU0N0MzOC4yNjE0IDIzLjEwMDkgNDAuMzk3NCAyMS42NzgyIDQyLjUgMjAuMjMyMUM0Ny43MzI2IDE2LjY0OTYgNTIuOTYwNyAxMy4wNjE3IDU4LjE4NDMgOS40NjgxMkw2OS42MDMyIDEuNjY5ODZDNzAuMzkyMSAxLjEzMjE3IDcxLjE3NzcgMC41ODQ0NTIgNzIgMEg2MC42MzQ2QzU1LjA1NDQgMy44MjI4NyA0OS40NzY0IDcuNjQ3OTcgNDMuOTAwNiAxMS40NzUzWk03Ljk0NTc3IDM1LjI0NzRDNy45MjA5NyAzNS4yOTU1IDcuOTAwODIgMzUuMzQ1OCA3Ljg4NTYgMzUuMzk3N1Y0MC4xNTM1QzcuODg1NiA0MS4xMDIgNy44ODU2IDQyLjA1MDUgNy44ODU2IDQyLjk5NTZDNy44ODgxNCA0My4wNTMzIDcuOTAxNzYgNDMuMTEgNy45MjU3MiA0My4xNjI2TDM1Ljk3MTYgNjIuNTMzSDM1Ljk5ODNMNDEuNzA0NCA1OC41Nzg4TDcuOTQ1NzcgMzUuMjQ3NFpNNjMuOTc0IDE1Ljk3MDZMNDMuMTAxNyAzMC4zOTE1QzQzLjE2NzYgMzAuNDgwNCA0My4yNDE1IDMwLjU2MzEgNDMuMzIyMyAzMC42Mzg2QzQ1LjA4NzMgMzEuODg3NyA0Ni44NTM0IDMzLjEzMTIgNDguNjIwNiAzNC4zNjkxQzQ4LjY3ODkgMzQuNDAwNCA0OC43NDU3IDM0LjQxMjEgNDguODExMiAzNC40MDI1TDYzLjkyMzkgMjMuOTQ5MkM2My45NDY2IDIzLjkwNDggNjMuOTYzNCAyMy44NTc2IDYzLjk3NCAyMy44MDg5VjE1Ljk3MDZaTTYzLjk5MDcgMzUuNTUxNEM2MS42MjA3IDM3LjE4NDUgNTkuMzM0MiAzOC43NjQyIDU3LjAyMSA0MC4zNjM5TDYyLjQ0MyA0NC4yMDQ2TDYzLjk5MDcgNDMuMTMyNVYzNS41NTE0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzExODRfODQyNDApIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMTg0Xzg0MjQwIiB4MT0iOS4xNTU4NiIgeTE9IjQ0LjM4NDkiIHgyPSI2Mi43NDE3IiB5Mj0iLTkuMjQ5ODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFBNDRCNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NzYwRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTg0Xzg0MjQwIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjYyLjUyNjMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
      //   "version": "0.3.0"
      // };
      // console.log(wallet)

        //const wallet = await BrowserWallet.enable('yoroi');
      //const wallet = await BrowserWallet.enable('eternl');
      //console.log(wallet)

      // get assets in wallet
      // const assets = await wallet.getAssets();
      // console.log("assets", assets)
    })()
  }, [])

  // return (
  //   <>
  //     {wallets.map((wallet, i) => {
  //       return (
  //         <p key={i}>
  //           <img src={wallet.icon} style={{ width: '48px' }} />
  //           <b>{wallet.name}</b>
  //         </p>
  //       );
  //     })}
  //   </>
  // );

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
        <h1 className="title">
          <a href="https://meshjs.dev/">Mesh</a> Next.js
        </h1>

        <div className="demo">
          <CardanoWallet />
        </div>

        <div className="grid">
          <a href="https://meshjs.dev/apis" className="card">
            <h2>Documentation</h2>
            <p>
              Our documentation provide live demos and code samples; great
              educational tool for learning how Cardano works.
            </p>
          </a>

          <a href="https://meshjs.dev/guides" className="card">
            <h2>Guides</h2>
            <p>
              Whether you are launching a new NFT project or ecommerce store,
              these guides will help you get started.
            </p>
          </a>

          <a href="https://meshjs.dev/react" className="card">
            <h2>React components</h2>
            <p>
              Useful React UI components and hooks, seamlessly integrate them
              into your app, and bring the user interface to life.
            </p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
