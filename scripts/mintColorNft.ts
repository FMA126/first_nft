import { Contract } from 'ethers';
import { ethers } from 'hardhat';
import * as ColorArtifact from '../artifacts/contracts/Color.sol/Color.json';
import { Color } from '../typechain'; // eslint-disable-line node/no-missing-import
// eslint-disable-next-line node/no-missing-import
import { COLOR_ADDRESS_RINKEBY } from '../constants';

const colorRinkebyAddress = COLOR_ADDRESS_RINKEBY;

const mintColorNft = async () => {
  // const provider = new providers.AlchemyProvider(
  //   'rinkeby',
  //   process.env.ALCHEMY_KEY
  // );
  const [mmDev] = await ethers.getSigners();
  const color = new Contract(
    colorRinkebyAddress,
    ColorArtifact.abi,
    mmDev
  ) as Color;
  await color.getNewItem(mmDev.address);
};

mintColorNft().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
