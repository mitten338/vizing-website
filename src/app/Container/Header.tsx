'use client'

import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/footerLogo.svg";
import { cn } from "@/lib/utils";
import styles from './style.module.css'
import { useTranslation } from "@/hooks/i18n/server/useTranslation";
import headerX from "images/headerX.svg";
import headerMedium from "images/headerMedium.svg";
import headerDisc from "images/headerDisc.svg";
import { externalURLs } from "@/utils/constant";
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function openLink(url: string | undefined, currentSitePath?: string) {
  window.open(url)
}

const Header = ({ lang }: ConLangParams) => {
  const pathname = usePathname()
  const [t, setT] = useState<Function | null>(null);
  useEffect(() => {
    const LoadTranslation = async () => {
      const { t } = await useTranslation(lang);
      setT(() => t);
    };
    LoadTranslation();
  }, [lang]);

  if (!t) {
    return null;
  }

  const arr = [
    {
      text: t("Home"),
      jumpLink: '/',
      isCurrentSite: true
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
      text: t("Ecosystem"),
      jumpLink: '/ecosystem',
      isCurrentSite: true
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
              className={cn("relative cursor-pointer", pathname === item.jumpLink ? styles.textSelected : '')}
            >
              {
                item.isCurrentSite ?
                  <Link href={item.jumpLink}>{item.text}</Link> :
                  <span onClick={() => openLink(item.jumpLink)}>{item.text}</span>
              }
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
