import { expect } from 'chai';
// import { Signer } from 'ethers';
import { ethers } from 'hardhat';

// let signer0: Signer | undefined;
// before(async () => {
//   [signer0] = await ethers.getSigners();
// });
// beforeEach(async () => {

// })
describe('Color', function () {
  it('Should deploy succesfully', async function () {
    const Color = await ethers.getContractFactory('Color');
    const color = await Color.deploy();
    await color.deployed();

    expect(color).to.not.equal(undefined);
  });
});
