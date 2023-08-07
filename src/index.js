import _ from 'lodash';

import { Ethereum, EthereumGoerli } from '@particle-network/chains';
import {
  Chain,
  ConnectConfig,
  ParticleConnect,
  Provider,
  metaMask,
  walletconnect,
} from '@particle-network/connect';

var projectId = '';
var clientKey = '';
var appId = '';
var chains = [];
var config = {
  projectId,
  clientKey,
  appId,
  chains,
  wallets: [
    metaMask({ projectId: projectId, showQrModal: false }),
    walletconnect({ projectId: projectId, showQrModal: true }),
  ],
};

var connectKit = new ParticleConnect(config);

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
