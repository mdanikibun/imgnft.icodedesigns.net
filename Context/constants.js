//LIVE-CONTRACT: 0x5FD19B6ff204C4da01F836B634e02Fe4f3E503Ff
// https://sepolia.etherscan.io/ > find: 0x5FD19B6ff204C4da01F836B634e02Fe4f3E503Ff => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x5FD19B6ff204C4da01F836B634e02Fe4f3E503Ff"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;