// Defi Nights Client Code
import { api } from '../../client.js';
import abi from './abi.json'

const tokenAddress = '0xe41d2489571d322189246dafa5ebde1f4699f498';  // # ZRX Token
const walletAddress = '0xba7f8b5fb1b19c1211c5d49550fcd149177a5eaf'; // # Balance Contract (s)
// unix timestamp, not block
const startBlock = 1574023865; // Nov-17-2019 08:51:05 PM +UTC

// const web3 = new Web3( new Web3.providers.HttpProvider(INFURIA_URL) );

/*==================================================
  TVL
  ==================================================*/

// Standardize
// {
// }

// TVL should be run at each block
async function tvl(block) {
  console.log('abi in token balance', abi);
  // how does this work? too many args here...
  return await api.getBalance(walletAddress, abi, tokenAddress, startBlock);
}

/*==================================================
  Exports
  ==================================================*/

export default {
  //
  startBlock: startBlock,
  name: '0x Project',       // project name
  tvl,                      // tvl adapter
  // todo: add project description file
}