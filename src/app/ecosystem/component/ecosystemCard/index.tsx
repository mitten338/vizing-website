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

  const handleCardClick = (e:React.MouseEvent<HTMLDivElement>, homepageLink:string) => {
    window.open(homepageLink);
  }
  
  const handleXlinkClick = (e:React.MouseEvent<HTMLSpanElement>, Xlink:string) => {
    window.open(Xlink);
    e.stopPropagation()
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
          <div className="logo absolute left-[16px] bottom-0 translate-y-2/4 w-[4.5rem] h-[4.5rem] flex justify-center items-center content-center bg-black rounded-full">
            <Image className="h-16 w-16" src={cardInfo.logo} alt={cardInfo.name}></Image>
          </div>
        </div>
        <div className="links flex flex-row justify-end pr-[13px]">
          {cardInfo.links.map((link) => {
            return (
                <span key={link.link} onClick={(e) => handleXlinkClick(e, link.link)}
                    className={clsx(
                      "h-[32px] w-[32px] mt-[4px] inline-flex items-center justify-center rounded-full",
                      styles.linkLogo
                    )}
                >
                  <link.linkLogo id={socialLinkId}/>
                </span>
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
