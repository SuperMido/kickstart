import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x09f1FcF9C263F6e1F07639219DB152565e1398e2'
);

export default instance;