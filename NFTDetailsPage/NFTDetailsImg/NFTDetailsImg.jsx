import React, {useState, useEffect} from "react";
import Image from "next/image";
import {BsImages} from "react-icons/bs";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";
import images from "../../img";

const NFTDetailsImg = ({nft}) => {

    const [description, setDescription] = useState(true);
    const [details, setDetails] = useState(true);

    const openDescription = () => {
        if (!description) {
            setDescription(true);
        } else {
            setDescription(false);
        }
    }

    const openDetails = () => {
        if (!details) {
            setDetails(true);
        } else {
            setDetails(false);
        }
    }

    return (
        <div className={Style.NFTDetailsImg}>
            <div className={Style.NFTDetailsImg_box}>
                <div className={Style.NFTDetailsImg_box_NFT}>

                    <div className={Style.NFTDetailsImg_box_NFT_img}>
                        <Image
                            src={nft.image}
                            className={Style.NFTDetailsImg_box_NFT_img_img}
                            alt="NFT image"
                            width={700}
                            height={800}
                        />
                    </div>
                </div>

                <div
                    className={Style.NFTDetailsImg_box_description}
                    onClick={() => openDescription()}
                >
                    <p>Miêu Tả</p>
                    {description ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
                </div>
                {description && (
                    <div className={Style.NFTDetailsImg_box_description_box}>
                        <p><b>{nft.description}</b></p>
                    </div>
                )}

                <div
                    className={Style.NFTDetailsImg_box_details}
                    onClick={() => openDetails()}
                >
                    <p>Chi Tiết</p>
                    {details ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
                </div>

                {details && (
                    <div className={Style.NFTDetailsImg_box_details_box}>
                        <p>
                            <small>Địa chỉ ví:</small>
                            <b>&nbsp;&nbsp;{nft.seller}</b>
                        </p>
                        <p>
                            <small>Token ID:</small>
                            <b>&nbsp;&nbsp;{nft.tokenId}</b>
                        </p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default NFTDetailsImg;