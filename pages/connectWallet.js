import React, {useState, useEffect, useContext} from 'react';
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/connectWallet.module.css";
import images from "../img";

// IMPORT FROM SMART-CONTRACT
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";

const connectWallet = () => {

    const [activeBtn, setActiveBtn] = useState(1);
    const providerArray = [
        {provider: images.provider1, name: "MetaMask"},
        {provider: images.provider2, name: "Wallet Connect"},
        {provider: images.provider3, name: "Wallet Link"},
        {provider: images.provider4, name: "Formatic"},
    ];
    const {currentAccount, connectWallet} = useContext(NFTMarketplaceContext);

    return (
        <div className={Style.connectWallet}>
            <div className={Style.connectWallet_box}>
                <h1>Kết nối ví điện tử</h1>
                <p className={Style.connectWallet_box_para}>
                    Kết nối ví MetaMask có sẵn của bạn hoặc tạo ví mới.
                </p>

                <div className={Style.connectWallet_box_provide}>
                    {currentAccount != "" ? (
                        <div
                            className={`${Style.connectWallet_box_provider_item} ${Style.active}`}
                        >
                            <Image
                                src={images.provider1}
                                alt="Metamask"
                                width={50}
                                height={50}
                                className={Style.connectWallet_box_provider_item_img}
                            />
                            <p>Bạn đã kết nối ví MetaMask - {currentAccount}</p>
                        </div>
                    ) : (
                        providerArray.map((el, i) => (
                            <div
                                className={`${Style.connectWallet_box_provider_item} ${activeBtn === i + 1 ? Style.active : ""}`}
                                key={i + 1}
                                onClick={() => (setActiveBtn(i + 1), connectWallet())}
                            >
                                <Image
                                    src={el.provider}
                                    alt={el.name}
                                    width={50}
                                    height={50}
                                    className={Style.connectWallet_box_provider_item_img}
                                />
                                <p>{el.name}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default connectWallet;