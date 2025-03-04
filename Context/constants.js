//LIVE-CONTRACT: 0xFB9586d0761a74e8A2Bf2A7C119eeA8Ab09FC0F8
// https://sepolia.etherscan.io/ > find: 0xFB9586d0761a74e8A2Bf2A7C119eeA8Ab09FC0F8 => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0xFB9586d0761a74e8A2Bf2A7C119eeA8Ab09FC0F8"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;