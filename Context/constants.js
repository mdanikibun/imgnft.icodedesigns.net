//LIVE-CONTRACT: 0x2f55888a46a5E715142Ef0df7D2762E7C93Cae0f
// https://sepolia.etherscan.io/ > find: 0x2f55888a46a5E715142Ef0df7D2762E7C93Cae0f => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x2f55888a46a5E715142Ef0df7D2762E7C93Cae0f"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;