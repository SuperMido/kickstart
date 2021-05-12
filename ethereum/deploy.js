const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'crack material early hotel faculty harsh bless anger arm cattle choose lazy',
    'https://rinkeby.infura.io/v3/d7dde0fa90274c6d873d75e84505f624'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({
            data: compiledFactory.bytecode
        })
        .send({
            gas: '1000000',
            from: accounts[0]
        });

    console.log('Contract deployed to', result.options.address);
};

deploy();