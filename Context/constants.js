//LIVE-CONTRACT: 0xA5A7b018736dc631Ff54d6cB048c0DB9f0d9cE3B
// https://sepolia.etherscan.io/ > find: 0xA5A7b018736dc631Ff54d6cB048c0DB9f0d9cE3B => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0xA5A7b018736dc631Ff54d6cB048c0DB9f0d9cE3B"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;