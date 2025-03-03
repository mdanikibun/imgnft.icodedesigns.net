//LIVE-CONTRACT: 0x65d62ffD91211c6Ce491471943254616f60d062a
// https://sepolia.etherscan.io/ > find: 0x65d62ffD91211c6Ce491471943254616f60d062a => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x65d62ffD91211c6Ce491471943254616f60d062a"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;