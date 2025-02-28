import React, {useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {BsImages} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import images from "../../img";

const NFTCard = ({NFTData}) => {

    const [like, setLike] = useState(true);

    const likeNFT = () => {
        if (!like) {
            setLike(true);
        } else {
            setLike(false);
        }
    }

    return (
        <div className={Style.NFTCard}>
            {NFTData.map((el, i) => (
                <Link href={{pathname: "/NFT-details", query: el}} key={i + 1}>
                    <div className={Style.NFTCard_box} key={i + 1}>
                        <div className={Style.NFTCard_box_img}>
                            <Image
                                className={Style.NFTCard_box_img_img}
                                src={el.image}
                                alt="NFT images"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className={Style.NFTCard_box_update}>
                            <div className={Style.NFTCard_box_update_left}>
                            </div>

                            <div className={Style.NFTCard_box_update_right}>
                                <div className={Style.NFTCard_box_update_right_info}>
                                    <p>#{el.tokenId}</p>
                                </div>
                            </div>
                        </div>

                        <div className={Style.NFTCard_box_update_details}>
                            <div className={Style.NFTCard_box_update_details_price}>
                                <div className={Style.NFTCard_box_update_details_price_box}>
                                    <h4>{el.name}</h4>

                                    <div className={Style.NFTCard_box_update_details_price_box_box}>
                                        <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                            <small>Giá hiện tại</small>
                                            <p>{el.price} ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.NFTCard_box_update_details_category}>
                                <BsImages/>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default NFTCard;