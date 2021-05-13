import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xc598fE06EE03F2A21436876aBF3014827f79EA60'
);

export default instance;