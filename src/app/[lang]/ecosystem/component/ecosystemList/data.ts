// logo assets
import logoOrbiter from 'images/ecosystem/logo_orbiter.png';
import logoLikwid from 'images/ecosystem/logo_likwid.png';
import logoPink from 'images/ecosystem/logo_pink.png';
import logoFoxWallet from 'images/ecosystem/logo_fox_wallet.png';
import logo0xastra from 'images/ecosystem/logo_0xAstra.png';
import logoColorProtocol from 'images/ecosystem/logo_color_protocol.png';
import logoL2Scan from 'images/ecosystem/logo_l2scan.png';
import logoBitget from 'images/ecosystem/logo_bitget.png';
import logoBullishs from 'images/ecosystem/logo_bullishs.png';
import logoAlchemy from 'images/ecosystem/logo_alchemy.png';
import logoAABank from 'images/ecosystem/logo_aabank.png';
import logoAylab from 'images/ecosystem/logo_aylab.png';
import logoGateio from 'images/ecosystem/logo_gateio.png';
import logoXMint from 'images/ecosystem/logo_xmint.png';
import logoOxkWallet from 'images/ecosystem/logo_okx_wallet.png';
// banner assets
import bannerOrbiter from 'images/ecosystem/banner_orbiter.png';
import bannerLikwid from 'images/ecosystem/banner_likwid.png';
import bannerPink from 'images/ecosystem/banner_pink.png';
import bannerFoxWallet from 'images/ecosystem/banner_fox_wallet.png';
import banner0xastra from 'images/ecosystem/banner_0xastra.png';
import bannerColorProtocol from 'images/ecosystem/banner_color_protocal.png';
import bannerL2Scan from 'images/ecosystem/banner_l2scan.png';
import bannerBitget from 'images/ecosystem/banner_bitget.png';
import bannerBullishs from 'images/ecosystem/banner_bullishs.png';
import bannerAlchemy from 'images/ecosystem/banner_alchemy.png';
import bannerAABank from 'images/ecosystem/banner_aabank.png';
import bannerAylab from 'images/ecosystem/banner_aylab.png';
import bannerGateio from 'images/ecosystem/banner_gateio.png';
import bannerXMint from 'images/ecosystem/banner_xmint.png';
import bannerOxkWallet from 'images/ecosystem/banner_okx_wallet.png'; 
// social link logo assets
import linkX from "images/headerX.svg";

import { StaticImageData } from 'next/image';

type Link = {
  linkLogo: any;
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
  bridge: {
    categoryName: 'Bridge',
    list: [
      {
        name: 'Orbiter Finance',
        introduction: 'Orbiter Finance is a ZK-tech-based instant omni rollup on Ethereum, delivering secure, efficient, and decentralized data communication services.',
        tagName: 'Bridge',
        logo: logoOrbiter,
        banner: bannerOrbiter,
        homepage: 'https://www.orbiter.finance/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/Orbiter_Finance'
          }
        ]
      }
    ]
  },
  defi: {
    categoryName: 'DeFi',
    list: [
      {
        name: 'Likwid',
        introduction: 'An omnichain meme platform with custom price curves',
        tagName: 'DeFi',
        logo: logoLikwid,
        banner: bannerLikwid,
        homepage: 'https://likwid.meme/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LIKWID_MEME'
          }
        ]
      },
      {
        name: 'Color Protocol',
        introduction: 'MemecoinFi Protocol: convert your memecoins from ERC20 standard into BC-404.',
        tagName: 'DeFi',
        logo: logoColorProtocol,
        banner: bannerColorProtocol,
        homepage: 'https://www.colorprotocol.com/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/Color_BC404'
          }
        ]
      },
      {
        name: 'Pink',
        introduction: 'The First Fair Launch Meme on Taiko',
        tagName: 'DeFi',
        logo: logoPink,
        banner: bannerPink,
        homepage: 'https://www.pinketh.xyz/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/PinkMemecoin'
          }
        ]
      },
    ]
  },
  gaming: {
    categoryName: 'Gaming',
    list: [
      {
        name: 'Aylab',
        introduction: 'A platform empowering web3 projects with decentralised user acquisition',
        tagName: 'Gaming',
        logo: logoAylab,
        banner: bannerAylab,
        homepage: 'https://aylab.io/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/Aylab_io'
          }
        ]
      },
      {
        name: '0xAstra',
        introduction: 'The Omnichain SLG Game. Mine, Craft, Build, and Battle in the wild Astra  Season 1 is Ongoing',
        tagName: 'Gaming',
        logo: logo0xastra,
        banner: banner0xastra,
        homepage: 'https://0xastra.xyz/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/0xAstra_xyz'
          }
        ]
      },
      {
        name: 'bullishs',
        introduction: 'The First Seamless Transaction Tech in Omni Layer2 Cross-Rollup Game. Play to earn Airdrop.',
        tagName: 'Gaming',
        logo: logoBullishs,
        banner: bannerBullishs,
        homepage: 'https://www.bullishs.io/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/bullishs_io'
          }
        ]
      }
    ]
  },
  nft: {
    categoryName: 'NFT',
    list: [
      {
        name: 'X-Mint',
        introduction: 'X-Mint is a cross-chain asset issuance platform that provides a one-stop issuance service for equity and RWA NFTs.',
        tagName: 'NFT',
        logo: logoXMint,
        banner: bannerXMint,
        homepage: 'https://xmint.pro/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/XMint_official'
          }
        ]
      }
    ]
  },
  wallet: {
    categoryName: 'Wallet',
    list: [
      {
        name: 'AAbank',
        introduction: 'AAbank is an Omni-Chain interactive application platform build on Vizing.',
        tagName: 'Wallet',
        logo: logoAABank,
        banner: bannerAABank,
        homepage: 'https://www.aabank.xyz/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/aabank_xyz'
          }
        ]
      },
      {
        name: 'Gate.io',
        introduction: 'Your GateWay to Web3 FREE Airdrops | Wallet | Trade | NFT | DeFi',
        tagName: 'Wallet',
        logo: logoGateio,
        banner: bannerGateio,
        homepage: 'https://www.gate.io/web3',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/GateWeb3Wallet'
          }
        ]
      },
      {
        name: 'OKX Wallet',
        introduction: 'Experience the world of onchain dApps that put you in complete control starting with the self-managed OKX Wallet. Engagement ≠ endorsement.',
        tagName: 'Wallet',
        logo: logoOxkWallet,
        banner: bannerOxkWallet,
        homepage: 'https://okx.com/web3',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/okxweb3'
          }
        ]
      },
      {
        name: 'Fox Wallet',
        introduction: 'Your Go-To Web3 Wallet.',
        tagName: 'Wallet',
        logo: logoFoxWallet,
        banner: bannerFoxWallet,
        homepage: 'https://foxwallet.com/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/FoxWallet'
          }
        ]
      },
      {
        name: 'Bitget',
        introduction: 'Bitget Wallet supports over 100 public chains like TON, SOLANA and more with superior Web3 trading and earning experience.',
        tagName: 'Wallet',
        logo: logoBitget,
        banner: bannerBitget,
        homepage: 'https://web3.bitget.com/en',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/BitgetWallet'
          }
        ]
      }
    ]
  },
  infra: {
    categoryName: 'Infra',
    list: [
      {
        name: 'Alchemy',
        introduction: 'RPC, Smart Accounts, Subgraphs, Faucets, SDKs, and way more.',
        tagName: 'Infra',
        logo: logoAlchemy,
        banner: bannerAlchemy,
        homepage: 'https://www.alchemy.com/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/AlchemyPlatform'
          }
        ]
      },
      {
        name: 'L2scan',
        introduction: 'The first native block explorer for cross Layer2s.',
        tagName: 'Infra',
        logo: logoL2Scan,
        banner: bannerL2Scan,
        homepage: 'https://vizing.l2scan.co/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/l2scan'
          }
        ]
      }
    ]
  }
}