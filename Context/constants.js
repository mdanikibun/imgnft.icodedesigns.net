//LIVE-CONTRACT: 0xaA56808a1A7C405E574D8320E64377Be0c46A859
// https://sepolia.etherscan.io/ > find: 0xaA56808a1A7C405E574D8320E64377Be0c46A859 => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0xaA56808a1A7C405E574D8320E64377Be0c46A859"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;