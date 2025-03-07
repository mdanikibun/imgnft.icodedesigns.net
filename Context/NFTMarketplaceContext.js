import React, {useEffect, useState} from 'react';
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import axios from "axios";
import {useRouter} from "next/router";

// INTERNAL IMPORT
import {NFTMarketplaceABI, NFTMarketplaceAddress} from "./constants";

const domain = "https://card.gamocorp.com/";
const subdomain = "https://card.gamocorp.com/ipfs-test/";
const uploadAPI = "https://card.gamocorp.com/api/ipfs/upload";

// FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider) => new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
);

// CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async () => {
    try {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        return fetchContract(signer);
    } catch (error) {
        console.log("Có lỗi trong khi kết nối với Hợp Đồng Thông Minh");
    }
}

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = (({children}) => {

    const titleData = "Khám phá, sưu tầm và mua bán NFTs";

    // USE-STATE
    const [error, setError] = useState("");
    const [openError, setOpenError] = useState(false);
    const [loading, setLoading] = useState("");
    const [openLoading, setOpenLoading] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");
    const router = useRouter();

    // CHECK IF WALLET IS CONNECTED
    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum)
                return setOpenError(true), setError("Install MetaMask");

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                //setOpenError(true);
                //setError("Không tìm thấy tài khoản");
                console.log("Không tìm thấy tài khoản");
            }

            console.log(`checkIfWalletConnected: ${currentAccount}`);

        } catch (error) {
            setOpenError(true);
            setError("Có lỗi trong khi kết nối Ví Điện Tử");
        }
    }

    // useEffect(() => {
    //     checkIfWalletConnected();
    // }, []);

    // CONNECT WALLET FUNCTION
    const connectWallet = async () => {
        try {
            if (!window.ethereum)
                return setOpenError(true), setError("Không tìm thấy tài khoản");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            setOpenError(true);
            setError("Có lỗi trong khi kết nối Ví Điện Tử");
        }
    }

    // Use to re-connect after each redirect
    if (currentAccount !== '') {
        try {
            connectWallet();
        } catch (error) {
            console.log("ERROR:" + error)
        }
    }

    // UPLOAD TO IPFS FUNCTION
    const uploadToIPFS = async (file) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(uploadAPI, {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            return `${subdomain}${data.cid}`;

        } catch (error) {
            setOpenError(true);
            setError("Có lỗi trong khi tải ảnh lên hệ thống IPFS");
        }
    }

    // CREATE NFT FUNCTION
    const createNFT = async (
        name,
        price,
        image,
        description,
        category,
        router
    ) => {

        console.log(
            'createNFT:',
            name,
            price,
            image,
            description,
            category
        );

        if (currentAccount === "")
            return setOpenError(true), setError("Vui lòng kết nối ví trước khi tạo NFT");


        if (!name || !description || !price || !image || !category)
            return setOpenError(true), setError("Đang thiếu dữ liệu");

        try {
            await createSale(image, price, name, description, category);
            setOpenLoading(false);
            await router.push('/searchPage');
        } catch (error) {
            setOpenError(true);
            setError("Có lỗi trong khi tạo NFT");
        }
    }

    // createSale FUNCTION
    const createSale = async (url, formInputPrice, name, description, category, isReselling, id) => {
        try {

            setOpenLoading(true);
            setLoading('...Hệ thống đang xử lý, vui lòng đợi trong giây lát...');

            // update name + description when click btn submit to show data
            await axios.get(`${url}?IsUpdate=1&name=${name}&description=${description}&price=${formInputPrice}&category=${category}`);

            const price = ethers.utils.parseUnits(formInputPrice, "ether");
            const contract = await connectingWithSmartContract();
            const listingPrice = await contract.getListingPrice();
            const transaction = !isReselling ?
                await contract.createToken(url, price, {
                    value: listingPrice.toString()
                }) : await contract.resellToken(id, price, {
                    value: listingPrice.toString()
                });

            await transaction.wait();
            setOpenLoading(false);
        } catch (error) {
            setOpenError(true);
            setError("Có lỗi trong khi tạo NFT ở Hợp Đồng Thông Minh");
        }
        setOpenLoading(false);
    }

    // FETCH NFT FUNCTION
    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/4c689aaa2f9a4d449ff95b190ab3beaf");

            // TODO: comment lại code khi up-git để tránh xung đột với LIVE
            // const provider = new ethers.providers.JsonRpcProvider(); // localhost
            // TODO: comment lại code khi up-git để tránh xung đột với LIVE

            const contract = fetchContract(provider);
            const data = await contract.fetchMarketItems();
            //console.log(`fetchNFTs`, data)
            return await Promise.all(
                data.map(async ({tokenId, seller, owner, price: unformattedPrice}) => {
                    const tokenURI = await contract.tokenURI(tokenId);
                    let {
                        data: {image, name, description, category}
                    } = await axios.get(`${tokenURI}?IsData=1`); // IsData to get name, description
                    const price = ethers.utils.formatUnits(
                        unformattedPrice.toString(),
                        "ether"
                    );

                    image = `${domain}${image}`;

                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        category,
                        tokenURI
                    }
                })
            );
        } catch (error) {
            //setOpenError(true);
            //setError("Có lỗi trong khi lấy danh sách NFT");
            console.log("Có lỗi trong khi lấy danh sách NFT");
        }
    }

    // useEffect(() => {
    //     fetchNFTs();
    // }, []);

    // FETCH MY NFT OR LISTED NFTs
    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            const contract = await connectingWithSmartContract();
            const data = type === "fetchItemsListed" ?
                await contract.fetchItemsListed() :
                await contract.fetchMyNFTs();
                //console.log(type, data)
            return await Promise.all(
                data.map(async ({tokenId, seller, owner, price: unformattedPrice}) => {
                    const tokenURI = await contract.tokenURI(tokenId);
                    let {
                        data: {image, name, description, category}
                    } = await axios.get(`${tokenURI}?IsData=1`);
                    const price = ethers.utils.formatUnits(
                        unformattedPrice.toString(),
                        "ether"
                    );

                    image = `${domain}${image}`;

                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                        category,
                        tokenURI
                    }
                })
            );
        } catch (error) {
            //setOpenError(true);
            //setError("Có lỗi trong khi lấy danh sách NFT đang rao bán");
            console.log("Có lỗi trong khi lấy danh sách NFT đang rao bán");
        }
    }

    // useEffect(() => {
    //     fetchMyNFTsOrListedNFTs();
    // }, []);

    // BUY NFTs FUNCTION
    const buyNFT = async (nft) => {
        try {
            setOpenLoading(true);
            setLoading('...Hệ thống đang xử lý, vui lòng đợi trong giây lát...');

            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
            const transaction = await contract.createMarketSale(nft.tokenId, {
                value: price
            });

            await transaction.wait();
            setOpenLoading(false);
            router.push("/author");
        } catch (error) {
            setOpenError(true);
            setError("Có lỗi trong khi mua NFT");
        }
        setOpenLoading(false);
    }

    // WITHDRAW NFT FUNCTION
    const withdraw = async (walletAddress, contractAddress) => {
        try {
            setOpenLoading(true);
            setLoading("...Hệ thống đang xử lý, vui lòng đợi trong giây lát...");
            console.log(`walletAddress= ${walletAddress}  contractAddress= ${contractAddress}`);

            const contract = new ethers.Contract(
                contractAddress, // Sử dụng contractAddress từ input
                NFTMarketplaceABI,
                await connectingWithSmartContract()
            );

            const transaction = await contract.withdraw({
                from: walletAddress, // Sử dụng walletAddress từ input
            });

            await transaction.wait();
            setOpenLoading(false);
            console.log("Rút tiền thành công!");
        } catch (error) {
            setOpenError(true);
            setError("Có lỗi trong khi rút tiền từ smart-contract về ví");
        }
        setOpenLoading(false);
    };

    return (
        <NFTMarketplaceContext.Provider value={{
            checkIfWalletConnected, //-> check when enter site
            connectWallet,
            uploadToIPFS,
            createNFT,
            fetchNFTs,
            fetchMyNFTsOrListedNFTs,
            buyNFT,
            createSale,
            withdraw,
            currentAccount,
            titleData,
            setOpenError,
            openError,
            error,
            setOpenLoading,
            openLoading,
            loading
        }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
});