//LIVE-CONTRACT: 0x1b699B0ae32C9394B636464F2434966289AbAc43
// https://sepolia.etherscan.io/ > find: 0x1b699B0ae32C9394B636464F2434966289AbAc43 => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x1b699B0ae32C9394B636464F2434966289AbAc43"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;