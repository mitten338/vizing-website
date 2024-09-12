"use client";
// import { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";
import styles from "./style.module.css";
import React from "react";
import Banner from "./component/banner";
import EcosystemList from "./component/ecosystemList";

export default function Ecosystem() {

  return (
    <div
      className={clsx(
        "px-[80px] w-[1400px] mx-0",
        styles.ecosystemWrap
      )}
    >
      <Banner />
      <EcosystemList />
    </div>
  );
}
