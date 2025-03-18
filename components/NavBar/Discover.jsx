import React from "react";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {

    // DISCOVER NAVIGATION MENU
    const discover = [
        {
            name: "Tìm kiếm NFT",
            link: "searchPage"
        },
        {
            name: "Tạo mới NFT",
            link: "upload-nft"
        },
        {
            name: "Kết nối ví điện tử",
            link: "connectWallet"
        },
        {
            name: "Lịch sử giao dịch",
            link: "https://sepolia.etherscan.io/address/0xaA56808a1A7C405E574D8320E64377Be0c46A859#nfttransfers"
        }
    ];
    return (
        <div>
            {discover.map((el, i) => (
                <div key={i + 1} className={Style.discover}>
                    {el.name === "Lịch sử giao dịch" && (
                        <Link href={{pathname: `${el.link}`}} target="_blank">
                            {el.name}
                        </Link>
                    )}
                    {el.name !== "Lịch sử giao dịch" && (
                        <Link href={{pathname: `${el.link}`}}>
                            {el.name}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Discover;