import Web3 from 'web3';

// let minABI = [];

// https://www.codementor.io/@fernandopelliccioni

// Todo: hide infuria keys
const INFURIA_URL = 'https://mainnet.infura.io/v3/c5a8d0085fdf4fc7a347638124d72d3e'

const web3 = new Web3( new Web3.providers.HttpProvider(INFURIA_URL) );
// const contract = new web3.eth.Contract(abi, tokenAddress);


// Call balanceOf function
// Single call
async function getBalance(walletAddress, abi, tokenAddress) {

    console.log('ABI', abi);

    const contract = new web3.eth.Contract(abi, tokenAddress);
     console.log(contract);
    return await contract.methods.balanceOf(walletAddress).call().then(result => {
        console.log(result);
    });
}

/// 

// Todo: might need to rename Apis/exports
export const api = {
    getBalance: (options) => getBalance(...options)
}
