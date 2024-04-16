"use client";
import { useEffect, useMemo, useState } from "react";
import { clsx } from "clsx";
import styles from "./home.module.css";
import Card from "@/app/[lang]/component/Card";
import BoxCenter from "@/components/BoxCenter";
import swiper_banner1_dark from "images/swiper_banner1_dark.png";
import swiper_banner2_dark from "images/swiper_banner2_dark.png";
import React from "react";
import Roll from "@/app/[lang]/component/Roll";
import Image from "next/image";
import sec from "images/sec.png";
import hl from "images/hl.png";
import hl2 from "images/hl2.png";
import etherum from "images/etherum.png";
import attain2 from "images/attain2.png";
import attain3 from "images/attain3.png";
import app from "images/app.svg";
import api from "images/api.svg";
import mc from "images/mc.svg";
import discord from "images/discord.svg";
import twitter from "images/twitter.svg";
import Frame from "images/Frame.svg";
import Medium from "images/Medium.svg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Spline from "@splinetool/react-spline";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { externalURLs, openExternalURLs } from "@/utils/constant";
import { Application } from "@splinetool/runtime";

export default function Home() {
  const arr2 = [
    {
      title: "Security",
      src: sec,
      context:
        "User transactions are recorded on Ethereum L1 using zk technology, with data availability from Layer 2s verifiable on L1. Strict arbitration ensuring the security of cross-chain messages.",
    },
    {
      title: "Efficiency",
      src: hl,
      context:
        "Optimistically transmit messages to minimize performance loss and reserve time blocks to ensure message delivery security, while reducing arbitration costs through zero-knowledge proofs.",
    },
    {
      title: "Decentralization",
      src: hl2,
      context:
        "In the Vizing omni-chain environment, users have the ability to choose between Relayer and Validator to transmit messages. Simultaneously, any developer can easily integrate omni-chain communication functionality through our provided development documentation.",
    },
  ];
  const arr3 = [
    {
      url: swiper_banner1_dark,
    },
    {
      url: swiper_banner2_dark,
    },
  ];
  const securityArr = [
    {
      title: "Omni Account Abstraction",
      src: attain3,
      srcSize:
        "absolute w-[45vmin] lg:w-[540px] lg:h-[558px] right-[-49px] top-[-10vmin] lg:top-[-181px]",
      context: `Omni account abstraction is fully compatible with the ERC4337 protocol. It possesses the ability to seamlessly roam between various Layer2 solutions, effectively eliminating the sense of fragmentation among different Layer2s.`,
    },
    {
      title: "Aggregate zk-proofs",
      src: attain2,
      srcSize:
        "absolute w-[45vmin] lg:w-[465px] lg:h-[418px] right-[-75px] top-[-10vmin] top-[-96px]",
      context: `Aggregate zk-proofs integrate a variety of heterogeneous Layer2/Layer3 Zero-Knowledge Proof, effectively reducing their verification costs on Ethereum L1.`,
    },
  ];

  const menuArr = [
    {
      title: "Mobile Apps",
      src: app,
      context: `Carry Nexus in your pocket, staying connected to 
      real-time insights and collaborative tools on the 
      go.`,
    },
    {
      title: "API",
      src: api,
      context: `Seamlessly weave Chatsonic's capabilities into 
      your applications, enriching them with real-time 
      data and creative assets.`,
    },
    {
      title: "Multilingual Capabilities",
      src: mc,
      context: `Break language barriers and engage with global 
      audiences effortlessly, courtesy of Chatsonic's 
      multilingual prowess.`,
    },
  ];

  const [init, setInit] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const splineStyle = useMemo(() => {
    return splineLoaded ? "lg:mt-[-400px]" : "";
  }, [splineLoaded]);

  const whatVizingStyle = useMemo(() => {
    return splineLoaded ? "lg:mt-0" : "lg:mt-[400px]";
  }, [splineLoaded]);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      background: {
        opacity: 0,
        color: {
          value: "#000",
          opacity: 0,
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "none",
            parallax: {
              enable: true,
              force: 10,
              smooth: 10,
            },
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        size: {
          value: 1,
        },
        color: {
          value: "#ffffff",
        },
        amount: 400,
        density: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        shape: {
          type: "circle",
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div className="px-4 lg:px-0">
      <div
        className={clsx(
          "flex flex-col items-center text-center bg-center bg-no-repeat bg-cover lg:bg-contain relative"
        )}
      >
        <div
          className={clsx(
            styles.circle,
            "absolute left-[50%] top-[-124px] translate-x-[-50%]"
          )}
        ></div>
        <Particles
          className="w-full h-[500px]"
          id="tsparticles"
          options={options}
        />
        <div
          className={clsx(
            "py-[8px] px-[10px] lg:px-[24px] text-[14px] font-[400] flex-center mb-4",
            "mt-[-400px]",
            styles.focus
          )}
        >
          Focus on improving Ethereum ecosystem interoperability
        </div>
        <div
          className={
            "text-[28px] lg:text-[56px] text-center font-[500] lg:max-w-[698px] mb-4"
          }
        >
          Welcome to the<br></br>{" "}
          <span className="text-[#E43B57]">Omni-Chain</span> environment
        </div>
        <div
          className={"text-[16px] font-[400] text-[#fff]/55 max-w-[520px] mb-8"}
        >
          Vizing, an omni interoperability environment built on advanced zk
          technology, provides a faster, more affordable, and safer Ethereum
          ecosystem roaming experience!
        </div>
        <div className={"max-w-[363px] flex gap-1"}>
          <div
            className={styles["bridge-button"]}
            onClick={() => openExternalURLs("bridge")}
          >
            Bridge to Vizing
          </div>
          <div
            className={styles["explore-button"]}
            onClick={() => openExternalURLs("explorer")}
          >
            Explorer
          </div>
        </div>
      </div>

      <div className={clsx("mb-24", splineStyle)}>
        <Spline
          scene="/scene.splinecode"
          onLoad={(e: Application) => {
            if (e?.data?.schema) {
              setSplineLoaded(true);
            }
          }}
          onStart={() => {
            setSplineLoaded(true);
          }}
        ></Spline>
      </div>
      <BoxCenter
        className={clsx(
          "text-[22px] lg:text-[44px] text-[#fff] mb-4",
          whatVizingStyle
        )}
      >
        What&apos;s Vizing
      </BoxCenter>
      <BoxCenter className={"mb-28"}>
        <div className="text-[16px] lg:text-[20px] max-w-[880px] text-[#fff]/60 relative">
          <div
            className={clsx(
              styles["take-circle"],
              "absolute top-0 left-[88px]"
            )}
          ></div>
          Vizing is named after mathematician Vadim Georgievich Vizing, who
          contributed to graph theory with Vizing&apos;s theorem. Graph theory
          forms the foundation of zero-knowledge proofs. Just as Vizing&apos;s
          theorem revolutionized graph theory, our vision is to revolutionized
          the roaming experience within the Ethereum ecosystem.
        </div>
      </BoxCenter>
      <BoxCenter className="mb-[120px]">
        <div className={"grid gap-6 lg:grid-rows-1 lg:grid-cols-3"}>
          {arr2.map((item, index) => (
            <Card key={index} {...item}>
              <Image src={item.src} alt={""} className={"w-full h-auto"} />
            </Card>
          ))}
        </div>
      </BoxCenter>
      <BoxCenter className="flex-center flex-col">
        <div
          className={clsx(
            "max-w-[880px] flex items-center flex-col pt-10 pb-[180px]",
            styles.networkBg,
            "lg:bg-cover"
          )}
        >
          <div className="max-w-[442px] text-[36px] lg:text-[48px] font-[500] text-center">
            Operational Model of
            <span className="text-[#E43B57]"> Vizing</span>
          </div>
          <div className="text-[16px] lg:text-[18px] text-center text-[#fff]/60">
            Based on Ethereum&apos;s security model, data generated in
            Vizing&apos;s omni-chain environment will ultimately be compressed
            to L1 using zk technology for verification and arbitration.
          </div>
        </div>
        <div className="mt-[-150px] mb-[200px]">
          <Image src={etherum} alt=""></Image>
        </div>
      </BoxCenter>
      <BoxCenter className={"mb-[183px]"}>
        <div
          className={"font-[400] text-[#fff]/55 text-[20px] text-center mb-5"}
        >
          Backed By
        </div>
        <div
          className={clsx(
            styles.mask,
            "overflow-hidden [--mask-w:80px] sm:[--mask-w:200px]"
          )}
        >
          <div className={"flex"}>
            <Roll className={clsx(styles.swiper1)}>
              {arr3.map(({ url }, index) => (
                <div key={index}>
                  <Image src={url} alt="" className="min-w-[2000px] h-[56px]" />
                </div>
              ))}
            </Roll>
          </div>
        </div>
      </BoxCenter>
      <div className="text-[28px] lg:text-[36px] lg:text-5xl font-[500] text-center mb-8 lg:mb-14">
        Endgame of omni-chain environment
      </div>
      <BoxCenter>
        <div
          className={clsx(
            "mb-[16px] py-[72px] px-[44px] relative overflow-hidden",
            styles["vizing-network"]
          )}
        >
          <div
            className={clsx(
              styles["network-circle"],
              "absolute top-[-231px] left-[-90px]"
            )}
          ></div>
          <div className="text-[28px] lg:text-[36px] mb-6">Vizing Station</div>
          <div className="max-w-[601px] text-[16px] lg:text-[20px] text-[#fff]/60 mb-11">
            Vizing Station is a Type-1 zkEVM operating environment based on zk
            technology, serving as the access point for full-chain Dapps and the
            aggregation entry point for zk-proofs in the Vizing omni-chain
            environment.
          </div>
          <div className="flex gap-[4px] lg:gap-[18px]">
            <div
              className={clsx(styles["network-button"])}
              onClick={() => openExternalURLs("bridge")}
            >
              Bridge to Vizing
            </div>
            <div
              className={clsx(styles["network-button"])}
              onClick={() => openExternalURLs("docs")}
            >
              Build On Vizing
            </div>
          </div>
        </div>
      </BoxCenter>
      <BoxCenter className={"mb-14"}>
        <div className={"grid gap-4 lg:grid-rows-1 lg:grid-cols-2"}>
          {securityArr.map((item, index) => (
            <div
              key={index + item.title}
              className={clsx(
                "pb-[60px] px-[44px] relative overflow-hidden",
                styles["security-card"]
              )}
            >
              <Image
                src={item.src}
                alt=""
                className={clsx(item.srcSize)}
              ></Image>
              <div className="mt-[127px] lg:mt-[254px] lg:max-w-[245px] max-w-[190px] font-[500] text-[28px] lg:text-[36px]">
                {item.title}
              </div>
              <div className="mt-6 text-[#fff]/60 text-[16px] lg:text-[20px] max-w-[380px]">
                {item.context}
              </div>
            </div>
          ))}
        </div>
      </BoxCenter>
      <BoxCenter className="flex mb-[125px] flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col lg:max-w-[560px]">
          <div className="text-[28px] lg:text-[36px] font-[500]">
            How to onboard onto the Vizing omni-chain environment
          </div>
          <div className="mt-[24px] text-[16px] lg:text-[20px] font-[400] text-[#fff]/60">
            Omni-chain Dapps can swiftly access omni-chain communication
            capabilities by simply integrating Vizing&apos;s smart contract SDK.
          </div>
          <div
            className={clsx(
              "mt-[16px] lg:mt-[44px] py-[8px] px-[32px] w-max mb-4 lg:mb-0",
              styles.buttons
            )}
            onClick={() => openExternalURLs("docs")}
          >
            Build Docs
          </div>
        </div>
        <div
          className={clsx(
            "max-w-[599px] py-[12.65px] px-[14.5px]",
            styles.codeWrap
          )}
        >
          <div
            className={clsx("p-5 h-full text-[14px] font-[400]", styles.code)}
          >
            <SyntaxHighlighter language="solidity" style={vscDarkPlus}>
              {`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {VizingOmni} from "@Vizing/contracts/Vizingomni.sol";

contract MyOmniChainDApp is VizingOmni {
  bytes1 public immutable dAppBridgeMode;
  address public immutable selectedRelayer;
  uint16 public immutable deployChainId;
  constructor(
    address _vizingPad;
    address _myRelayer;
    bytes1 defaultBridgeMode
  ) VizingOmni(_vizingPad) {
    dAppBridgeMode = _defaultBridgeMode;
    selectedRelayer = _myRelayer;
    deployChainId = LaunchPad.ChainId();
  }
}
`}
            </SyntaxHighlighter>
          </div>
        </div>
      </BoxCenter>
      {/* <BoxCenter className="mb-[165px]">
        <div className={"grid gap-[80px] lg:grid-rows-1 lg:grid-cols-3"}>
          {menuArr.map(({ title, src: Url, context }, index) => (
            <div key={index + title} className="flex max-w-[379px] flex-col">
              <Url />
              <div className="mt-[24px] text-[24px] font-[500]">{title}</div>
              <div className="mt-[8px] text-[16px] font-[400] text-[#fff]/55">
                {context}
              </div>
            </div>
          ))}
        </div>
      </BoxCenter> */}
      <BoxCenter className="flex-center">
        <div
          className={clsx(
            styles.concat,
            "lg:py-[128px] lg:pb-[272px] px-[19px] lg:px-[38px] lg:max-w-[632px] w-[87vw] lg:h-auto lg:mb-[94px] h-[87vw] relative"
          )}
        >
          <div className="text-[24px] text-center lg:text-[48px] font-[500] lg:mb-[88px] mt-[16vw] lg:mt-0">
            Social Media Integration
          </div>
          <div className="flex items-center lg:relative absolute top-[50%] w-full justify-between lg:translate-y-0 translate-y-[-50%] left-0">
            {[
              {
                url: discord,
                style: "p-[2vw] lg:p-4 lg:ml-[-80px] ml-[-4vw]",
                jumpLink: externalURLs.discord,
              },
              {
                url: twitter,
                style: "p-[3vw] lg:p-6 lg:ml-[48px] mr-[20vw] lg:mr-[296px]",
                jumpLink: externalURLs.twitter,
              },
              {
                url: Frame,
                style: "p-[3vw] lg:p-6 lg:mr-[48px]",
                jumpLink: externalURLs.github,
              },
              {
                url: Medium,
                style: "p-[2vw] lg:p-4 mr-[-4vw] lg:mr-0",
                jumpLink: externalURLs.medium,
              },
            ].map(({ style, url: Url, jumpLink }, index) => {
              return (
                <div
                  key={index}
                  className={clsx(
                    style,
                    styles["concat-logo"],
                    "cursor-pointer"
                  )}
                  onClick={() => {
                    jumpLink && window.open(jumpLink);
                  }}
                >
                  <Url></Url>
                </div>
              );
            })}
          </div>
        </div>
      </BoxCenter>
    </div>
  );
}
