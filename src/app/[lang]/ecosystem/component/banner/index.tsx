"use client";
import { clsx } from "clsx";
import styles from "./style.module.css";
import React from "react";

export default function Banner() {
  const handleButtonClick = () => {
    const vizingEcosystemPartnerApplication = 'https://forms.gle/MS6h2JUUS7PXuKsq8';
    window.open(vizingEcosystemPartnerApplication)
  }

  return (
    <div
      className={clsx(
        "relative pt-[64px] pb-[44px] mb-[32px]",
        styles.bannerWrap
      )}
    >
      <h1 className="text-[48px] leading-[56px] font-[500] mb-[24px]">Ecosystem</h1>
      <div className="text-[16px] font-[400] text-[#fff]/60">
        <p>Step into the Vizing ecosystem and embark on a unique journey of discovery and exploration.</p>
      </div>
      <button
        className={clsx(
          "absolute right-[0px] bottom-[44px] py-[16px] px-[30px] rounded-[30px] text-[20px]",
          styles.addButton
        )}
        onClick={handleButtonClick}
      >
        Submit Your Project
      </button>
    </div>
  );
}
