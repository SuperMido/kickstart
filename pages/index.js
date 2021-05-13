import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        console.log(campaigns[0]);
        return { campaigns };
    }
    render () {
        return <div>Campaign: {this.props.campaigns[0]}</div>
    }
}

export default CampaignIndex;