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
        }
    ];
    return (
        <div>
            {discover.map((el, i) => (
                <div key={i + 1} className={Style.discover}>
                    <Link href={{pathname: `${el.link}`}}>
                        {el.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Discover;