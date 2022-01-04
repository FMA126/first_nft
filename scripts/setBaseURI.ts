import { Contract } from 'ethers';
import { ethers } from 'hardhat';
import * as ColorArtifact from '../artifacts/contracts/Color.sol/Color.json';
import { Color } from '../typechain'; // eslint-disable-line node/no-missing-import

const colorRinkebyAddress = '0x9C9b44492ace2fFB8215145a108Ce96756fD5FFF';

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
  await color.setBaseURI(
    'https://pxygmz6753.execute-api.us-west-1.amazonaws.com/dev/colorsnft/'
  );
};

mintColorNft().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
