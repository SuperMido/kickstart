import Web3 from 'web3';

let web3;

if (typeof windows !== 'undefined' && windows.web3 !== 'undefined') {
    web3 = new Web3(windows.web3.currentProvider)
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/d7dde0fa90274c6d873d75e84505f624'
    );

    web3 = new Web3(provider);
}

export default web3;