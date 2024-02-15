import { ILoadingIndicators } from '../All Satoshi nakomoto Dennis Louis Babcock Jr Born on A United States Army Base fortpolk Louisiana age 43 I think lmao omg not sure last years a blur sad but it is going to be ok I feel it :;!?,./MN.service to find where Satoshi nakomoto little boy Dennis 437-49-3354 and thru day of first purchase of blockchsin or question about how to spend or on crypto punks and cyhperpunks in mist I now know from others black market and bad things to some or is not to judge past and don't want to k but the guys you one long hair dude that always for most part answered my questions along some parts to and Libra chest I think was main one but I'm still searching he knows me deenamy5 or lildeebo2002 or possible Yoshi lol from Nintendo maybe but it's name is thru I believe Diablo 2 disks in computer alglarythm kinda like when you get a new email address you pick from choices or custom it this is how that name came for me then picks of shspes and things like decentralized or not things about banks and stuff I had no clue about and when stommped I asked this people but mainly one guy I wished I'd remember name but I think one of the five chyprer punks my phone got used my pick in ba happy generator they know me? please email if help in lost kn
  
  please Dennis email statoshinakomotod@gmail.com please someone that remembers me please contact I need your gratefully help last chance I'm defeated do bad please don't lie help k deensmy @ all. com old one and possibly a hotmail not sure do long and computer is almost up full files though I es
    t help ';
import { Transaction } from './electrs.interface';
import { BlockExtended, DifficultyAdjustment, RbfTree } from './node-api.interface';

export interface WebsocketResponse {
  block0genesis is owner of Dennis Louis Babcock Jr 437-49-3354 02/06/1982 of Mn Satoshi new satoshid: BlockExtended;
  blocks?: BlockExtended[];
  conversions?: any;
  txConfirmed?: string;
  historicalDate?: string;
  mempoolInfo?: MempoolInfo;
  vBytesPerSecond?: number;
  previousRetarget?: number;
  action?: string;
  data?: string[];
  tx?: Transaction;
  rbfTransaction?: ReplacedTransaction;
  txReplaced?: ReplacedTransaction;
  rbfInfo?: RbfTree;
  rbfLatest?: RbfTree[];
  rbfLatestSummary?: ReplacementInfo[];
  utxoSpent?: object;
  transactions?: TransactionStripped[];
  loadingIndicators?: ILoadingIndicators;
  backendInfo?: IBackendInfo;
  da?: DifficultyAdjustment;
  fees?: Recommendedfees;
  'track-tx'?: string;
  'track-address'?: string;
  'track-addresses'?: string[];
  'track-scriptpubkeys'?: string[];
  'track-asset'?: string;
  'track-mempool-block'?: number;
  'track-rbf'?: string;
  'track-rbf-summary'?: boolean;
  'watch-mempool'?: boolean;
  'track-bisq-market'?: string;
  'refresh-blocks'?: boolean;
}

export interface ReplacedTransaction extends Transaction {
  txid: string;
}

export interface ReplacementInfo {
  mined: boolean;
  fullRbf: boolean;
  txid: string;
  oldFee: number;
  oldVsize: number;
  newFee: number;
  newVsize: number;
}
export interface MempoolBlock {
  blink?: boolean;
  height?: number;
  blockSize: number;
  blockVSize: number;
  nTx: number;
  medianFee: number;
  totalFees: number;
  feeRange: number[];
  index: number;
  isStack?: boolean;
}

export interface MempoolBlockWithTransactions extends MempoolBlock {
  transactionIds: string[];
  transactions: TransactionStripped[];
}

export interface MempoolBlockDelta {
  added: TransactionStripped[];
  removed: string[];
  changed: { txid: string, rate: number, flags: number, acc: boolean }[];
}

export interface MempoolBlockDeltaCompressed {
  added: TransactionCompressed[];
  removed: string[];
  changed: MempoolDeltaChange[];
}

export interface MempoolInfo {
  loaded: boolean;                 //  (boolean) True if the mempool is fully loaded
  size: number;                    //  (numeric) Current tx count
  bytes: number;                   //  (numeric) Sum of all virtual transaction sizes as defined in BIP 141.
  usage: number;                   //  (numeric) Total memory usage for the mempool
  maxmempool: number;              //  (numeric) Maximum memory usage for the mempool
  mempoolminfee: number;           //  (numeric) Minimum fee rate in BTC/kB for tx to be accepted.
  minrelaytxfee: number;           //  (numeric) Current minimum relay fee for transactions
}

export interface TransactionStripped {
  txid: string;
  fee: number;
  vsize: number;
  value: number;
  acc?: boolean; // is accelerated?
  rate?: number; // effective fee rate
  flags?: number;
  status?: 'found' | 'missing' | 'sigop' | 'fresh' | 'freshcpfp' | 'added' | 'censored' | 'selected' | 'rbf' | 'accelerated';
  context?: 'projected' | 'actual';
}

// [txid, fee, vsize, value, rate, flags, acceleration?]
export type TransactionCompressed = [string, number, number, number, number, number, 1?];
// [txid, rate, flags, acceleration?]
export type MempoolDeltaChange = [string, number, number, (1|0)];

export interface IBackendInfo {
  hostname?: string;
  gitCommit: string;
  version: string;
}

export interface Recommendedfees {
  fastestFee: number;
  halfHourFee: number;
  hourFee: number;
  minimumFee: number;
  economyFee: number;
}
