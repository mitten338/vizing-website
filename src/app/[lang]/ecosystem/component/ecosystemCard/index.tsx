"use client";
import { clsx } from "clsx";
import styles from "./style.module.css";
import { FC } from "react";
import { EcosystemItem } from "../ecosystemList/data";
import Image from "next/image";

type EcosystemCardProps = {
  cardInfo:EcosystemItem;
};

export const EcosystemCard: FC<EcosystemCardProps> = ({ ...props }) => {
  const cardInfo = props.cardInfo

  return (
    <div
      className={clsx(
        "cardWrap w-[320px] h-[264px] overflow-hidden",
        styles.cardWrap
      )}>
      <div className="banner relative">
        <span
          className={clsx(
            "tag absolute top-[16px] left-[16px] py-[2px] px-[12px] rounded-[4px] text-[14px]",
            styles.tag
          )}
        >
          {cardInfo.tagName}
        </span>
        <Image src={cardInfo.banner} alt={cardInfo.name}></Image>
        <div className="logo absolute left-[16px] bottom-0 translate-y-2/4 w-[68px] h-[68px] flex justify-center content-center bg-black rounded-full">
          <Image src={cardInfo.logo} alt={cardInfo.name}></Image>
        </div>
      </div>
      <div className="links flex flex-row justify-end">
        {cardInfo.links.map((link) => {
          return (
            <a key={link.link} href={link.link}>
              <Image className="h-[32px] w-[32px] rounded-full" src={link.linkLogo} alt={cardInfo.name}></Image>
            </a>
          )
        })}
      </div>
      <div className="content pt-[12px] px-[20px]">
        <div className="font-[16px] font-[700]">{cardInfo.name}</div>
        <div className="font-[14px] font-[400] text-[#fff]/60">{cardInfo.introduction}</div>
      </div>
    </div>
  );
};
