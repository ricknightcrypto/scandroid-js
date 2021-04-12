import projects from './projects/index.js';
import Express from 'express';
import Branchy from 'branchy';
import Cron from 'node-cron';

import { api } from './client.js'

// todo: move all client calls to client
import Web3 from 'web3';

// TODO: Separate Server Logic from Back End Logic (hidden, not OS)
// TODO: Job needs to check the latest block, and needs to scan all prior blocks
// 

//Job:
// Every Hour
// Get the current block number
// use the starting block numeber
// check the database to see if all blocks are present from first
// to last block
// get the value and timestamps for any missing blocks
// add to database
// 

// const app = Express();

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | month
// | | | day of month
// | | hour
// | minute
// second ( optional )

// Schedule tasks to be run on the server.
// Every hour, run through all projects and create separate
// branch processes

// Cron.schedule('*/1 * * * * *', function () {
//   console.log('running a task every minute');

//   // Every hour, run this using 'cron'
//   projects.forEach(p => {
//     console.log('Project Name:', p.name);
//     console.log('Project Start Block:', p.startBlock);

//     p.tvl().then(result => {
//       console.log('result', result);

//       // Write result to a specific 
//       return result;
//     });


//     // Scan Blockchain here based on timestamp 
//   });
// });

// app.listen(3000);

//////////////////////////

const OX = projects[0];

(async () => {
  // Get the current block
  const currentBlock = await api.getCurrentBlock();
  const startBlock = OX.startBlock;

  // https://www.shawntabrizi.com/ethereum/graphing-eth-balance-history-of-an-ethereum-address-using-parallel-asynchronous-requests-in-web3-js/
  // https://github.com/shawntabrizi/ERC20-Token-Balance/blob/master/erc20balance.js

  const blockSteps = currentBlock - startBlock;
  const balances = [];

      console.log('balances', startBlock)
    // Loop over the blocks, using the step value
    for (let i = startBlock; i < currentBlock; i = i + step) {
     console.log('for loop')

         // Get the ETH value at that block
         let wei = await promisify(cb => web3.eth.getBalance(address, i, cb));

         let ether = parseFloat(web3.fromWei(wei, 'ether'))

         // Add result to final output 
         balances.push({
             block: i,
             balance: ether
         });

         console.log('balances', balances);
    }


  // projects.forEach(p => {
  //   console.log('Project Name:', p.name);
  //   console.log('Project Start Block:', p.startBlock);

  //   p.tvl().then(result => {
  //     console.log('result', result);

  //     // Write result to a specific 
  //     return result;
  //   });

  // });


  console.log('current block', currentBlock)

})();
