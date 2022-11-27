require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
require("dotenv").config();

module.exports = {
  zksolc: {
    version: "1.2.0",
    compilerSource: "binary",
    settings: {
      experimental: {
        dockerImage: "matterlabs/zksolc",
        tag: "v1.2.0",
      },
    },
  },
  zkSyncDeploy: {
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    ethNetwork: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`, // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
  },
  networks: {
    hardhat: {
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.16",
  },
};