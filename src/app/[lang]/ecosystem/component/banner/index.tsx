"use client";
import { clsx } from "clsx";
import styles from "./style.module.css";
import React from "react";

export default function Banner() {
  const handleButtonClick = () => {
    console.log('add your app')
  }

  return (
    <div
      className={clsx(
        "relative pt-[64px] pb-[44px] h-[244px] mb-[32px]",
        styles.bannerWrap
      )}
    >
      <h1 className="text-[48px] leading-[56px] font-[500] mb-[24px]">Ecosystem</h1>
      <div className="text-[16px] font-[400] text-[#fff]/60">
        <p>Enjoy all your favorite dapps from DeFi, NFT&apos;s Gaming, to DAOs and join the web3</p>
        <p>revolution. To submit your dapp, join Linea&apos;s Discord and go to #submit-project channel.</p>
      </div>
      <button
        className={clsx(
          "absolute right-[0px] bottom-[44px] h-[48px] w-[151px] rounded-[24px]",
          styles.addButton
        )}
        onClick={handleButtonClick}
      >
        add your app
      </button>
    </div>
  );
}
