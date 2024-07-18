'use client'

import React from "react";
import Logo from "@/assets/images/footerLogo.svg";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/i18n/server/useTranslation";
import headerX from "images/headerX.svg";
import headerMedium from "images/headerMedium.svg";
import headerDisc from "images/headerDisc.svg";
import { externalURLs } from "@/utils/constant";


function openLink(url: string | undefined, currentSitePath?: string) {
  window.open(url)
}

const Header = async ({ lang }: ConLangParams) => {
  const { t } = await useTranslation(lang);
  const arr = [
    {
      text: t("Home"),
      jumpLink: '/en'
    },
    {
      text: t("Explorer"),
      jumpLink: externalURLs.explorer
    },
    {
      text: t("Build Docs"),
      jumpLink: externalURLs.docs
    },
    {
      text: t("Ecosystem (coming soon)"),
      jumpLink: '/en/ecosystem'
    },
  ];
  const iconList = [
    {
      icon: headerX,
      jumpLink: externalURLs.twitter
    },
    {
      icon: headerDisc,
      jumpLink: externalURLs.discord
    },
    {
      icon: headerMedium,
      jumpLink: externalURLs.medium
    },
  ];

  return (
    <header className={"h-20 flex items-center justify-between header-center relative z-[999999]"}>
      <Logo className={"h-10 w-auto cursor-pointer"} />
      <ul
        className={
          "text-[16px] gap-16 font-[400] text-[#fff]/80 lg:flex flex flex-row items-center"
        }
      >
        {arr.map((item, index) => (
          <li
            key={index}
            className={cn(
              arr.length - 1 === index ? "text-[12px] text-[#fff]/40" : "cursor-pointer"
            )}
            onClick={() => openLink(item.jumpLink)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div className="flex">
        {iconList.map((item, index) => (
          <div key={index} className="ml-[20px] cursor-pointer" onClick={() => openLink(item.jumpLink)}>
            <item.icon />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
