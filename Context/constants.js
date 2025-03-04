//LIVE-CONTRACT: 0x6A8c4eEd0B79016c7625563E1643C456DCAB9d8A
// https://sepolia.etherscan.io/ > find: 0x6A8c4eEd0B79016c7625563E1643C456DCAB9d8A => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x6A8c4eEd0B79016c7625563E1643C456DCAB9d8A"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;