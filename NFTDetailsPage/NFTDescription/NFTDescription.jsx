import React, {useState, useEffect, useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {
    MdVerified,
    MdCloudUpload,
    MdTimer,
    MdReportProblem,
    MdOutlineDeleteSweep
} from "react-icons/md";
import {BsThreeDots} from "react-icons/bs";
import {FaWallet, FaPercentage} from "react-icons/fa";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram
} from "react-icons/ti";
import {BiTransferAlt, BiDollar} from "react-icons/bi";

// INTERNAL IMPORT
import Style from "./NFTDescription.module.css";
import images from "../../img";
import {Button} from "../../components/componentsindex";
import {NFTTabs} from "../NFTDetailsIndex";

// IMPORT SMART-CONTRACT
import {NFTMarketplaceContext} from "../../Context/NFTMarketplaceContext";

const NFTDescription = ({nft}) => {
    const router = useRouter();

    // SMART-CONTRACT DATA
    const {buyNFT, currentAccount} = useContext(NFTMarketplaceContext);

    return (
        <div className={Style.NFTDescription}>
            <div className={Style.NFTDescription_box}>
            {/*Part TWO*/}
                <div className={Style.NFTDescription_box_profile}>
                    <h1>{nft.name} #{nft.tokenId}</h1>
                    <div className={Style.Description_box_profile_box}>
                        <div className={Style.NFTDescription_box_profile_box_left_info}>
                            <small>Tác giả:</small> <br/>
                            <Link href={{pathname: "/author", query: `${nft.seller}`}}>
                                <span>
                                    Tên-Tác-Giả <MdVerified/>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <div className={Style.NFTDescription_box_profile_box_right_info}>
                        <small>Danh mục:</small> <br/>
                        <span>
                            {nft.category} <MdVerified/>
                        </span>
                    </div>
                </div>

                <div className={Style.NFTDescription_box_profile_biding}>

                    <div className={Style.NFTDescription_box_profile_biding_box_price}>
                        <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                            <small>Giá hiện tại</small>
                            <p>{nft.price} ETH</p>
                        </div>
                    </div>

                    <div className={Style.NFTDescription_box_profile_biding_box_button}>

                        {currentAccount === nft.seller.toLowerCase() ? (
                            <p>Bạn không thể mua NFT của chính mình.</p>
                        ): currentAccount === nft.owner.toLowerCase() ? (
                            <Button
                                icon={<FaWallet/>}
                                btnName="Rao bán NFT"
                                handleClick={() => router.push(
                                    `/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`
                                )}
                                classStyle={Style.button}
                            />
                        ) : (
                            <Button
                                icon={<FaPercentage/>}
                                btnName="Mua NFT"
                                handleClick={() => buyNFT(nft)}
                                classStyle={Style.button}
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NFTDescription;