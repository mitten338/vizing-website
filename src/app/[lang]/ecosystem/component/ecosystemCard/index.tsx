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
  const cardInfo = props.cardInfo;
  const socialLinkId = 'social-link';

  const handleCardClick = (e:React.MouseEvent<HTMLDivElement>, link:string) => {
    const elementId = (e.target as HTMLElement).id
    if(elementId !== socialLinkId) {
      window.open(link);
    }
  }

  return (
    <div
        className={clsx(
          "cardWrap w-[320px] h-[264px] overflow-hidden",
          styles.cardWrap
        )}
        onClick={(e) => handleCardClick(e, cardInfo.homepage)}
    >
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
        <div className="links flex flex-row justify-end pr-[13px]">
          {cardInfo.links.map((link) => {
            return (
              <a key={link.link} href={link.link} target="_blank">
                <Image id={socialLinkId} className="h-[32px] w-[32px] rounded-full" src={link.linkLogo} alt={cardInfo.name}></Image>
              </a>
            )
          })}
        </div>
        <div className="content pt-[12px] px-[20px]">
          <div className="text-[16px] font-[700]">{cardInfo.name}</div>
          <div
            className={clsx(
              "w-[280px] h-[60px] text-[14px] font-[400] text-[#fff]/60",
              styles.textEllipsis
            )}
          >
            {cardInfo.introduction}
          </div>
        </div>
      </div>
  );
};
