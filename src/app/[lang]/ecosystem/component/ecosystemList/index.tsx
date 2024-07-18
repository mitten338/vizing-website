"use client";
import { clsx } from "clsx";
import styles from "./style.module.css";
import React, { useState } from "react";
import { EcosystemCard } from "../ecosystemCard";
import { ecosystemList, EcosystemItem } from "./data"

type EcosystemListKeys = keyof typeof ecosystemList;

const ecosystemContentAreaScrollHeight = 316;

export default function EcosystemList() {
  const initialData: EcosystemItem[] = Object.values(ecosystemList).flatMap(category => category.list);

  const sidebarList: (EcosystemListKeys | 'All')[] = ['All', ...Object.keys(ecosystemList) as Array<EcosystemListKeys>];

  const [categoryData, setCategoryData] = useState<EcosystemItem[]>(initialData)
  const [currentCategory, setCurrentCategory] = useState('All')

  const handleCategoryClick = (category:EcosystemListKeys | 'All') => {
    setCurrentCategory(category as string);
    if(category === 'All') {
      setCategoryData(initialData);
    } else {
      const currentCategoryList = ecosystemList[category]
      setCategoryData(ecosystemList[category].list);
    }
    smoothScroll()
  }

  const smoothScroll = () => {
    if(window.scrollY > ecosystemContentAreaScrollHeight) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="w-full flex">
      <div
        className={clsx(
          "self-start w-[240px] py-[32px]",
          styles.sidebarWrap
        )}
      >
        <ul id="target">
          {sidebarList.map((sidebarItem) => {
            return (
              <li
                key={sidebarItem}
                onClick={() => handleCategoryClick(sidebarItem)}
                className={clsx(
                  "sidebarItem h-[28px] px-[16px] text-[16px] leading-[28px] mb-[24px] text-[#fff]/60 hover:cursor-pointer",
                  currentCategory === sidebarItem ? styles.selectedItem : '',
                )}
              >
                {ecosystemList[sidebarItem] ? ecosystemList[sidebarItem].categoryName : 'All'}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="w-[1060px]">
        <div className="flex flex-wrap mx-[-12px]">
          {categoryData && categoryData.map((item) => {
            return (
              <div className="mx-[12px] mb-[24px]" key={item.name}>
                <EcosystemCard
                  cardInfo={item}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
