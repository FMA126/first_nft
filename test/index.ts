/* eslint-disable no-unused-expressions */
import { ethers, waffle } from 'hardhat';
import chai from 'chai';

import ColorArtifact from '../artifacts/contracts/Color.sol/Color.json';
import { Color } from '../typechain'; // eslint-disable-line node/no-missing-import
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const { deployContract } = waffle;
const { expect } = chai;

// https://ipfs.io/ipfs/Qmdkex1m9e3u2yqyqxCnoLvZMjsGGvLqZM6Go4UAewKqkz?filename=blue.jpg
let color: Color;
let signers: SignerWithAddress[];

beforeEach(async () => {
  signers = await ethers.getSigners();

  color = (await deployContract(
    <SignerWithAddress>signers[0],
    ColorArtifact
  )) as Color;

  expect(color.address).to.properAddress;
});
describe('Color Contract', function () {
  it('Should deploy succesfully', async function () {
    expect(color).to.not.equal(undefined);
  });
});

describe('Set base uri', async () => {
  it('should set base uri and return correct token uri', async () => {
    await color.setBaseURI('https://example.com/');
    await color.getNewItem(signers[1].address);
    const firstNFTURI = await color.tokenURI(1);
    expect(firstNFTURI).to.equal('https://example.com/1');
  });
});
