//LIVE-CONTRACT: 0x9853A64c78a0B6A53Cbb52ad2de46121e8f2D3Ca
// https://sepolia.etherscan.io/ > find: 0x9853A64c78a0B6A53Cbb52ad2de46121e8f2D3Ca => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x9853A64c78a0B6A53Cbb52ad2de46121e8f2D3Ca"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;