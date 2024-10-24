import { StaticImageData } from 'next/image'
// assets
// chains
import ImageBinance from '@/assets/images/homepage/chains/binance.png'
import ImageTon from '@/assets/images/homepage/chains/ton.png'
import ImageVizing from '@/assets/images/homepage/chains/vizing.png'
import ImageOptimism from '@/assets/images/homepage/chains/optimism.png'
import ImageEthereum from '@/assets/images/homepage/chains/ethereum.png'
import ImageArbitrum from '@/assets/images/homepage/chains/arbitrum.png'
import ImageBase from '@/assets/images/homepage/chains/base.png'
import ImageSolana from '@/assets/images/homepage/chains/solana.png'
import ImagePolygon from '@/assets/images/homepage/chains/polygon.png'
import ImageScroll from '@/assets/images/homepage/chains/scroll.png'
import ImageZksync from '@/assets/images/homepage/chains/zksync.png'
import ImageLinea from '@/assets/images/homepage/chains/linea.png'
import ImageBlast from '@/assets/images/homepage/chains/blast.png'
import ImageTaiko from '@/assets/images/homepage/chains/taiko.png'
import ImageBob from '@/assets/images/homepage/chains/bob.png'
// ecosystem
import ImageTermix from '@/assets/images/homepage/ecosystem/termix.png'
import ImageOxastra from '@/assets/images/homepage/ecosystem/0xastra.png'
import ImagePink from '@/assets/images/homepage/ecosystem/pink.png'
import ImageLikwid from '@/assets/images/homepage/ecosystem/likwid.png'
import ImageOrbiter from '@/assets/images/homepage/ecosystem/orbiter.png'
import ImageColorProtocol from '@/assets/images/homepage/ecosystem/color-protocol.png'
import ImageAylab from '@/assets/images/homepage/ecosystem/aylab.png'
import ImageBullishs from '@/assets/images/homepage/ecosystem/bullishs.png'
import ImageCoNFT from '@/assets/images/homepage/ecosystem/conft.png'
import ImageAABank from '@/assets/images/homepage/ecosystem/aabank.png'
import ImageGateIo from '@/assets/images/homepage/ecosystem/gateio.png'
import ImageOkx from '@/assets/images/homepage/ecosystem/okx.png'
import ImageFoxWallet from '@/assets/images/homepage/ecosystem/fox-wallet.png'
import ImageBitGet from '@/assets/images/homepage/ecosystem/bitget.png'
import ImageAlchemy from '@/assets/images/homepage/ecosystem/alchemy.png'

export interface ChainImage {
  id: string;
  img: StaticImageData;
}

export interface EcosystemImage {
  id: string;
  img: StaticImageData;
}

export const chainList:ChainImage[] = [
  {
    id: 'binance',
    img: ImageBinance,
  },
  {
    id: 'ton',
    img: ImageTon,
  },
  {
    id: 'vizing',
    img: ImageVizing,
  },
  {
    id: 'optimism',
    img: ImageOptimism,
  },
  {
    id: 'ethereum',
    img: ImageEthereum,
  },
  {
    id: 'arbitrum',
    img: ImageArbitrum,
  },
  {
    id: 'base',
    img: ImageBase,
  },
  {
    id: 'solana',
    img: ImageSolana,
  },
  {
    id: 'polygon',
    img: ImagePolygon,
  },
  {
    id: 'scroll',
    img: ImageScroll,
  },
  {
    id: 'zksync',
    img: ImageZksync,
  },
  {
    id: 'linea',
    img: ImageLinea,
  },
  {
    id: 'blast',
    img: ImageBlast,
  },
  {
    id: 'taiko',
    img: ImageTaiko,
  },
  {
    id: 'bob',
    img: ImageBob,
  },
]

export const ecosystemList:EcosystemImage[] = [
  {
    id: 'termix',
    img: ImageTermix,
  },
  {
    id: '0xastra',
    img: ImageOxastra,
  },
  {
    id: 'pink',
    img: ImagePink,
  },
  {
    id: 'likwid',
    img: ImageLikwid,
  },
  {
    id: 'orbiter',
    img: ImageOrbiter,
  },
  {
    id: 'colorProtocol',
    img: ImageColorProtocol,
  },
  {
    id: 'aylab',
    img: ImageAylab,
  },
  {
    id: 'bullishs',
    img: ImageBullishs,
  },
  {
    id: 'conft',
    img: ImageCoNFT,
  },
  {
    id: 'aabank',
    img: ImageAABank,
  },
  {
    id: 'gateio',
    img: ImageGateIo,
  },
  {
    id: 'okx',
    img: ImageOkx,
  },
  {
    id: 'foxWallet',
    img: ImageFoxWallet,
  },
  {
    id: 'bitget',
    img: ImageBitGet,
  },
  {
    id: 'alchemy',
    img: ImageAlchemy,
  },
]