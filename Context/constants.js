//LIVE-CONTRACT: 0xc500F352F7407DB7e86F2B8A697500C925Be4deF
// https://sepolia.etherscan.io/ > find: 0xc500F352F7407DB7e86F2B8A697500C925Be4deF => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0xc500F352F7407DB7e86F2B8A697500C925Be4deF"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;