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
import logoXenoBunny from 'images/ecosystem/logo_xeno_bunny.png';
import logoCoNFT from 'images/ecosystem/logo_conft.png';
import logoTermiX from 'images/ecosystem/logo_termix.png';
import logoEthereum from 'images/ecosystem/logo_ethereum.png';
import logoArbitrum from 'images/ecosystem/logo_arbitrum.png';
import logoOptimism from 'images/ecosystem/logo_optimism.png';
import logoBase from 'images/ecosystem/logo_base.png';
import logoSolana from 'images/ecosystem/logo_solana.png';
import logoTon from 'images/ecosystem/logo_ton.png';
import logoPolygon from 'images/ecosystem/logo_polygon.png';
import logoBNB from 'images/ecosystem/logo_bnb.png';
import logoScroll from 'images/ecosystem/logo_scroll.png';
import logoZksync from 'images/ecosystem/logo_zksync.png';
import logoLinea from 'images/ecosystem/logo_linea.png';
import logoBlast from 'images/ecosystem/logo_blast.png';
import logoBOB from 'images/ecosystem/logo_bob.png';
import logoTaiko from 'images/ecosystem/logo_taiko.png';
import logoDegeneratives from 'images/ecosystem/logo_degeneratives.png';
import logoStarProtocol from 'images/ecosystem/logo_star_protocol.png';
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
import bannerXenoBunny from 'images/ecosystem/banner_xeno_bunny.png';
import bannerCoNFT from 'images/ecosystem/banner_conft.png';
import bannerTermiX from 'images/ecosystem/banner_termix.png';
import bannerDegeneratives from 'images/ecosystem/banner_degeneratives.png';
import bannerStarProtocol from 'images/ecosystem/banner_star_protocol.png';
import bannerArbitrum from 'images/ecosystem/banner_arbitrum.png';
import bannerEthereum from 'images/ecosystem/banner_ethereum.png';
import bannerOptimism from 'images/ecosystem/banner_optimism.png';
import bannerBase from 'images/ecosystem/banner_base.png';
import bannerSolana from 'images/ecosystem/banner_solana.png';
import bannerTon from 'images/ecosystem/banner_ton.png';
import bannerPolygon from 'images/ecosystem/banner_polygon.png';
import bannerBNB from 'images/ecosystem/banner_bnb.png';
import bannerScroll from 'images/ecosystem/banner_scroll.png';
import bannerZkSync from 'images/ecosystem/banner_zksync.png';
import bannerLinea from 'images/ecosystem/banner_linea.png';
import bannerBlast from 'images/ecosystem/banner_blast.png';
import bannerBOB from 'images/ecosystem/banner_bob.png';
import bannerTaiko from 'images/ecosystem/banner_taiko.png';
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
  network: {
    categoryName: 'Network',
    list: [
      {
        name: 'Ethereum Mainnet',
        introduction: 'Ethereum is a technology built for the public good.',
        tagName: 'Network',
        logo: logoEthereum,
        banner: bannerEthereum,
        homepage: 'https://ethereum.foundation/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/ethereum'
          }
        ]
      },
      {
        name: 'Arbitrum',
        introduction: 'Arbitrum is a suite of Ethereum scaling solutions that make it easy to build and use decentralized applications. ',
        tagName: 'Network',
        logo: logoArbitrum,
        banner: bannerArbitrum,
        homepage: 'https://arbitrum.foundation/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/arbitrum'
          }
        ]
      },
      {
        name: 'Optimism',
        introduction: 'OP Mainnet is an EVM equivalent Layer 2 blockchain connected to Ethereum.',
        tagName: 'Network',
        logo: logoOptimism,
        banner: bannerOptimism,
        homepage: 'https://optimism.io/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/Optimism'
          }
        ]
      },
      {
        name: 'Base',
        introduction: 'Bringing the world onchain to create a global economy that increases innovation, creativity, and freedom.',
        tagName: 'Network',
        logo: logoBase,
        banner: bannerBase,
        homepage: 'https://www.base.org/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/base'
          }
        ]
      },
      {
        name: 'Solana',
        introduction: 'Solana is a blockchain built for mass adoption ◎ Fast, composable, green, and globally distributed.',
        tagName: 'Network',
        logo: logoSolana,
        banner: bannerSolana,
        homepage: 'https://solana.com/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/solana'
          }
        ]
      },
      {
        name: 'Ton',
        introduction: 'TON is putting crypto in every pocket. By building the Web3 ecosystem in Telegram, TON is making digital ownership easy for billions. ',
        tagName: 'Network',
        logo: logoTon,
        banner: bannerTon,
        homepage: 'https://ton.org/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/ton_blockchain'
          }
        ]
      },
      {
        name: 'Polygon zkEVM',
        introduction: 'Polygon zkEVM is to Ethereum a Layer 2 network and a scalability solution utilizing zero-knowledge technology to provide validation and fast finality of off-chain transactions.',
        tagName: 'Network',
        logo: logoPolygon,
        banner: bannerPolygon,
        homepage: 'https://polygon.technology/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/0xPolygon'
          }
        ]
      },
      {
        name: 'BNB Chain',
        introduction: 'BNB Chain is a leading blockchain ecosystem designed to support the growing demands of the decentralized web (Web3). ',
        tagName: 'Network',
        logo: logoBNB,
        banner: bannerBNB,
        homepage: 'https://www.bnbchain.org/en',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/BNBCHAIN'
          }
        ]
      },
      {
        name: 'Scroll',
        introduction: 'The leading zero-knowledge rollup.',
        tagName: 'Network',
        logo: logoScroll,
        banner: bannerScroll,
        homepage: 'https://scroll.io/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/Scroll_ZKP'
          }
        ]
      },
      {
        name: 'zkSync Era',
        introduction: 'ZKsync Era is a Layer 2 ZK rollup, a trustless protocol that uses cryptographic validity proofs to provide scalable and low-cost transactions on Ethereum.',
        tagName: 'Network',
        logo: logoZksync,
        banner: bannerZkSync,
        homepage: 'https://zksync.io/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/zksync'
          }
        ]
      },
      {
        name: 'Linea',
        introduction: 'Linea is the home network for the world. We are the Ethereum L2 empowering the world to live onchain.',
        tagName: 'Network',
        logo: logoLinea,
        banner: bannerLinea,
        homepage: 'https://linea.build/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/LineaBuild'
          }
        ]
      },
      {
        name: 'Blast',
        introduction: 'Blast is the only Ethereum L2 with native yield for ETH and stablecoins.',
        tagName: 'Network',
        logo: logoBlast,
        banner: bannerBlast,
        homepage: 'https://blast.io/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/blast'
          }
        ]
      },
      {
        name: 'BOB',
        introduction: 'The Hybrid L2 | Connecting Bitcoin security with EVM liquidity',
        tagName: 'Network',
        logo: logoBOB,
        banner: bannerBOB,
        homepage: 'https://www.gobob.xyz/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/build_on_bob'
          }
        ]
      },
      {
        name: 'Taiko',
        introduction: 'Taiko is a highly configurable, fully open source, permissionless (based), Ethereum-equivalent rollup.',
        tagName: 'Network',
        logo: logoTaiko,
        banner: bannerTaiko,
        homepage: 'https://taiko.xyz/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/taikoxyz'
          }
        ]
      },
    ]
  },
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
      },
      {
        name: 'XenoBunny',
        introduction: 'Be a BOUNTY HUNTER & claim rewards across OmniChain Eco.',
        tagName: 'Gaming',
        logo: logoXenoBunny,
        banner: bannerXenoBunny,
        homepage: 'https://www.xenobunny.xyz/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/XenobunnyX'
          }
        ]
      }
    ]
  },
  ai: {
    categoryName: 'AI',
    list: [
      {
        name: 'TermiX',
        introduction: 'The AI-Powered Web3 Operating System.',
        tagName: 'AI',
        logo: logoTermiX,
        banner: bannerTermiX,
        homepage: 'https://app.termix.ai/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/termix_ai'
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
      },
      {
        name: 'coNFT',
        introduction: 'Multi-chain NFT ecosystem.',
        tagName: 'NFT',
        logo: logoCoNFT,
        banner: bannerCoNFT,
        homepage: 'https://conft.app/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/ConftApp'
          }
        ]
      },
      {
        name: '_degeneratives',
        introduction: 'Where emotions become art and currency ▪︎ degeneratives ecosystem',
        tagName: 'NFT',
        logo: logoDegeneratives,
        banner: bannerDegeneratives,
        homepage: 'https://www.degeneratives.org/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/_degeneratives'
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
  },
  did: {
    categoryName: 'DID',
    list: [
      {
        name: 'Star Protocol',
        introduction: 'Building omnichain DID protocol & ANS',
        tagName: 'DID',
        logo: logoStarProtocol,
        banner: bannerStarProtocol,
        homepage: 'https://star.co/',
        links: [
          {
            linkLogo: linkX,
            link: 'https://x.com/StarProtocol_HQ'
          }
        ]
      },
    ]
  },
}