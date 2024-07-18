import vizingBanner from 'images/ecosystem/banner_vizing.png'
import alienBanner from 'images/ecosystem/banner_alien.png'
import vizingLogo from 'images/ecosystem/logo_vizing.png'
import alienLogo from 'images/ecosystem/logo_alien.png'
import linkX from "images/ecosystem/twitter.png";
import linkDiscord from "images/ecosystem/discord.png";
import { StaticImageData } from 'next/image';

type Link = {
  linkLogo: StaticImageData;
  link: string;
};

export type EcosystemItem = {
  name: string;
  introduction: string;
  tagName: string;
  logo: StaticImageData;
  banner: StaticImageData;
  homepage: string;
  links: Link[];
};

type EcosystemCategory = {
  categoryName: string;
  list: EcosystemItem[];
};

type EcosystemList = {
  [key: string]: EcosystemCategory;
};

export const ecosystemList:EcosystemList = {
  defi: {
    categoryName: 'Defi',
    list: [
      {
        name: 'Likwid',
        introduction: 'Velodrome is an AMM modeled on Solidly and designed to be a public good that provides deep liquidity…',
        tagName: 'DEFI',
        logo: alienLogo,
        banner: alienBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEME'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEMeE'
          },
        ]
      }
    ]
  },
  nft: {
    categoryName: 'NFT',
    list: [
      {
        name: 'AlienSwap',
        introduction: 'The NFT marketplace and aggregator for people, the leading multi-chain NFT trading layer.',
        tagName: 'NFT',
        logo: alienLogo,
        banner: alienBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEME'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEMEe'
          },
        ]
      }
    ]
  },
  bridge: {
    categoryName: 'Bridge',
    list: [
      {
        name: 'Orbiter Finance1',
        introduction: 'Orbiter Finance is a ZK-tech-based instant omni rollup on Ethereum, delivering secure, efficient, and decent...',
        tagName: 'Bridge',
        logo: vizingLogo,
        banner: vizingBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEMEe'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEME'
          },
        ]
      },
      {
        name: 'Orbiter Finance2',
        introduction: 'Orbiter Finance is a ZK-tech-based instant omni rollup on Ethereum, delivering secure, efficient, and decent...',
        tagName: 'Bridge',
        logo: vizingLogo,
        banner: vizingBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEMEe'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEME'
          },
        ]
      },
      {
        name: 'Orbiter Finance3',
        introduction: 'Orbiter Finance is a ZK-tech-based instant omni rollup on Ethereum, delivering secure, efficient, and decent dfdf dfdf...',
        tagName: 'Bridge',
        logo: vizingLogo,
        banner: vizingBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEMEe'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEME'
          },
        ]
      },
      {
        name: 'Orbiter Finance4',
        introduction: 'Orbiter Finance is a ZK-tech-based instant omni rollup on Ethereum, delivering secure, efficient, and decent...',
        tagName: 'Bridge',
        logo: vizingLogo,
        banner: vizingBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEMEe'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEME'
          },
        ]
      },
      {
        name: 'Orbiter Finance5',
        introduction: 'Orbiter Finance is a ZK-tech-based instant omni rollup on Ethereum, delivering secure, efficient, and decent...',
        tagName: 'Bridge',
        logo: vizingLogo,
        banner: vizingBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEMEe'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEME'
          },
        ]
      },
      {
        name: 'Orbiter Finance6',
        introduction: 'Orbiter Finance is a ZK-tech-based instant omni rollup on Ethereum, delivering secure, efficient, and decent...',
        tagName: 'Bridge',
        logo: vizingLogo,
        banner: vizingBanner,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEMEe'
          },
          {
            linkLogo: linkDiscord,
            link: 'https://x.com/LIKWID_MEME'
          },
        ]
      }
    ]
  },
}