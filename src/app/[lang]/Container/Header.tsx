"use client";

import React, { useEffect, useState, useMemo } from "react";
import Logo from "@/assets/images/footerLogo.svg";
import { cn } from "@/lib/utils";
import styles from "./header.style.module.css";
import { useTranslation } from "@/hooks/i18n/server/useTranslation";
import { externalURLs } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PopoverComponent } from "@/components/ui/popover";
// assets
import IconCaretDown from "@/assets/images/icon/avatar-caret-down.svg";
import IconLogout from "@/assets/images/icon/logout.svg";
import IconLink from "@/assets/images/icon/link.svg";
import clsx from "clsx";

export enum HeaderItemType {
  INTERNALLINK = "internalLink",
  EXTERNALLINK = "externalLink",
  CATEGORY = "category",
}

export enum HeaderItemKey {
  HOME = "home",
  BOUNDLESSTRAVEL = "boundlessTravel",
  BRIDGE = "bridge",
  DEVELOPER = "developer",
  ECOSYSTEM = "ecosystem",
  COMMUNITY = "community",
}

interface HeaderItem {
  id: HeaderItemKey;
  type: HeaderItemType;
  text: string;
  jumpLink: string;
  isCurrentSite?: boolean;
  children?: Omit<HeaderItem, "id">[];
}

function openLink(url: string | undefined, currentSitePath?: string) {
  window.open(url);
}

const Header = ({ lang }: ConLangParams) => {
  const pathname = usePathname();

  const [t, setT] = useState<Function | null>(null);

  useEffect(() => {
    const LoadTranslation = async () => {
      const { t } = await useTranslation(lang);
      setT(() => t);
    };
    LoadTranslation();
  }, [lang]);

  const headerItemArray: HeaderItem[] = useMemo(() => {
    return [
      // {
      //   id: HeaderItemKey.HOME,
      //   type: HeaderItemType.INTERNALLINK,
      //   text: "Home",
      //   jumpLink: "/",
      //   isCurrentSite: true,
      // },
      // {
      //   id: HeaderItemKey.BOUNDLESSTRAVEL,
      //   type: HeaderItemType.INTERNALLINK,
      //   text: "Boundless Travel",
      //   jumpLink: "/boundless-travel",
      //   isCurrentSite: true,
      // },
      {
        id: HeaderItemKey.BRIDGE,
        type: HeaderItemType.EXTERNALLINK,
        text: "Bridge",
        isCurrentSite: false,
        jumpLink: externalURLs.bridge,
      },
      {
        id: HeaderItemKey.DEVELOPER,
        type: HeaderItemType.CATEGORY,
        text: "Developer",
        jumpLink: "",
        children: [
          {
            type: HeaderItemType.EXTERNALLINK,
            text: "Developer Docs",
            jumpLink: externalURLs.developerDocs,
            isCurrentSite: false,
          },
          {
            type: HeaderItemType.EXTERNALLINK,
            text: "Explorer",
            jumpLink: externalURLs.explorer,
            isCurrentSite: false,
          },
          {
            type: HeaderItemType.EXTERNALLINK,
            text: "VizingScan",
            jumpLink: externalURLs.vizingScan,
            isCurrentSite: false,
          },
          {
            type: HeaderItemType.EXTERNALLINK,
            text: "Github",
            jumpLink: externalURLs.github,
            isCurrentSite: false,
          },
        ],
      },
      {
        id: HeaderItemKey.ECOSYSTEM,
        type: HeaderItemType.INTERNALLINK,
        text: "Ecosystem",
        jumpLink: "/ecosystem",
        isCurrentSite: true,
      },
      {
        id: HeaderItemKey.COMMUNITY,
        type: HeaderItemType.CATEGORY,
        text: "Community",
        jumpLink: "",
        children: [
          {
            type: HeaderItemType.EXTERNALLINK,
            text: "Blog",
            jumpLink: externalURLs.medium,
            isCurrentSite: false,
          },
          {
            type: HeaderItemType.EXTERNALLINK,
            text: "Brand Kit",
            jumpLink: externalURLs.brandKit,
            isCurrentSite: false,
          },
          {
            type: HeaderItemType.EXTERNALLINK,
            text: "Twitter",
            jumpLink: externalURLs.twitter,
            isCurrentSite: false,
          },
        ],
      },
    ];
  }, []);

  const renderHeaderItem = (item: HeaderItem) => {
    switch (item.type) {
      case HeaderItemType.INTERNALLINK:
        return (
          <Link href={item.jumpLink}>
            {item.text}
          </Link>
        );
        break;
      case HeaderItemType.EXTERNALLINK:
        return <span onClick={() => openLink(item.jumpLink)}>{item.text}</span>;
        break;
      case HeaderItemType.CATEGORY:
        return (
          <PopoverComponent trigger={item.text} sideOffset={20}>
            <div className="flex flex-col px-[24px] py-[16px]">
              {item.children?.map((item) => {
                return (
                  <span
                    className="text-[rgba(255,255,255,0.55)] my-[8px] hover:cursor-pointer hover:text-[#FFFFFF] duration-300"
                    key={item.text}
                    onClick={() => openLink(item.jumpLink)}
                  >
                    {item.text}
                  </span>
                );
              })}
            </div>
          </PopoverComponent>
        );
        break;
      default:
        break;
    }
  };

  return (
    <header className="relative h-20 flex items-center justify-center relative z-[1]">
      <Link href={'/'}>
        <Logo className="absolute left-0 top-1/2 translate-y-[-50%] h-10 w-auto cursor-pointer" />
      </Link>
      <ul className="w-fit flex items-center justify-center text-[16px] gap-[24px] font-[400] text-[#fff]/80 lg:flex flex flex-row items-center">
        {headerItemArray.map((item, index) => {
          let isSelected = false
          if(item.jumpLink && item.isCurrentSite) {
            isSelected = pathname.indexOf(item.jumpLink) >= 0
          }
          return (
            <li
              key={index}
              className={cn(
                "relative cursor-pointer",
                isSelected ? styles.textSelected : "",
              )}
            >
              {renderHeaderItem(item)}
            </li>
          );
        })}
      </ul>
      {/* <div className="flex">
        {iconList.map((item, index) => (
          <div key={index} className="ml-[20px] cursor-pointer" onClick={() => openLink(item.jumpLink)}>
            <item.icon />
          </div>
        ))}
      </div> */}
    </header>
  );
};

export default Header;