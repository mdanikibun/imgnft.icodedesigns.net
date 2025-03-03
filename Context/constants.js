//LIVE-CONTRACT: 0x15b1615912d60093380c3DcAA917Ca291756ed93
// https://sepolia.etherscan.io/ > find: 0x15b1615912d60093380c3DcAA917Ca291756ed93 => check transaction
import nftMarketplace from "./NFTMarketplace.json";

export const NFTMarketplaceAddress = "0x15b1615912d60093380c3DcAA917Ca291756ed93"; // live

// TODO: comment lại code khi up-git để tránh xung đột với LIVE
// export const NFTMarketplaceAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // localhost
// TODO: comment lại code khi up-git để tránh xung đột với LIVE

export const NFTMarketplaceABI = nftMarketplace.abi;