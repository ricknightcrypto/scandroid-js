// Defi Nights Client Code
import { api } from '../../client.js';
import abi from './abi.json'



const tokenAddress = '0xe41d2489571d322189246dafa5ebde1f4699f498'  // # ZRX Token
const walletAddress = '0xba7f8b5fb1b19c1211c5d49550fcd149177a5eaf' // # Balance Contract (s)

// const web3 = new Web3( new Web3.providers.HttpProvider(INFURIA_URL) );

function tvl () {
    console.log('abi', abi)
    api.getBalance(walletAddress, abi, tokenAddress);
}

/*==================================================
  Exports
  ==================================================*/

  export default {
    name: '0x Project',        // project name
    tvl                       // tvl adapter
  }