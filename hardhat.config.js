require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/4c689aaa2f9a4d449ff95b190ab3beaf", // URL của Sepolia RPC endpoint
      accounts: ["51d9c7e106ae7897c77184d9c82033a36ed571ed6606d4ad956c93bc8e9f50bd"], // Private key của tài khoản Sepolia
    },
  },
};