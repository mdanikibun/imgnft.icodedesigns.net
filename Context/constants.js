//LIVE-CONTRACT: 0xF4c1d67e24402AC731D43dBf78ef57c2d3E18FE1
// https://sepolia.etherscan.io/ > find: 0xF4c1d67e24402AC731D43dBf78ef57c2d3E18FE1 => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0xF4c1d67e24402AC731D43dBf78ef57c2d3E18FE1"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;