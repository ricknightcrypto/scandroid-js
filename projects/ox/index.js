// Defi Nights Client Code
import { api } from '../../client.js';
import abi from './abi.json'

const tokenAddress = '0xe41d2489571d322189246dafa5ebde1f4699f498';  // # ZRX Token
const walletAddress = '0xba7f8b5fb1b19c1211c5d49550fcd149177a5eaf'; // # Balance Contract (s)
const startBlock = 1574023865; // Nov-17-2019 08:51:05 PM +UTC

// const web3 = new Web3( new Web3.providers.HttpProvider(INFURIA_URL) );

/*==================================================
  TVL
  ==================================================*/

// // Set up something to 
// {
// }

function tvl(start) {
  console.log('abi in token balance', abi);
  api.getBalance(walletAddress, abi, tokenAddress, startBlock);
}

/*==================================================
  Exports
  ==================================================*/

export default {
  name: '0x Project',       // project name
  tvl,                      // tvl adapter
  // todo: add project description file
}