//LIVE-CONTRACT: 0x93635D59e2024BE7936314766cA0aB19453f00Fc
// https://sepolia.etherscan.io/ > find: 0x93635D59e2024BE7936314766cA0aB19453f00Fc => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x93635D59e2024BE7936314766cA0aB19453f00Fc"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;