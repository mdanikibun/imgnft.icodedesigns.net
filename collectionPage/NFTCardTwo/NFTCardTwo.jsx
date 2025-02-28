import React, {useState} from "react";
import Image from "next/image";
import {BsImage} from "react-icons/bs";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {MdVerified, MdTimer} from "react-icons/md";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";
import {LikeProfile} from "../../components/componentsindex";

const NFTCardTwo = ({NFTData}) => {

    return (
        <div className={Style.NFTCardTwo}>
            {NFTData.map((el, i) => (
                <Link href={{pathname: "/NFT-details", query: el }} key={i + 1}>
                    <div className={Style.NFTCardTwo_box} key={i + 1}>
                        <div className={Style.NFTCardTwo_box_like}>
                            <div className={Style.NFTCardTwo_box_like_box}>
                                <div className={Style.NFTCardTwo_box_like_box_box}>
                                    <BsImage className={Style.NFTCardTwo_box_like_box_box_icon}/>
                                </div>
                            </div>
                        </div>

                        <div className={Style.NFTCardTwo_box_img}>
                            <Image
                                src={el.image}
                                alt="NFT"
                                width={480}
                                height={480}
                                className={Style.NFTCardTwo_box_img_img}
                            />
                        </div>

                        <div className={Style.NFTCardTwo_box_info}>
                            <div className={Style.NFTCardTwo_box_info_left}>
                                <p>#{el.tokenId}</p>
                                <p>{el.name}</p>
                            </div>

                            <div className={Style.NFTCardTwo_box_price}>
                                <div className={Style.NFTCardTwo_box_price_box}>
                                    <small>Giá hiện tại</small>
                                    <p>{el.price} ETH</p>
                                </div>
                                <p className={Style.NFTCardTwo_box_price_stock}>
                                    <MdTimer/> <span>{i + 1} giờ trước</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
};

export default NFTCardTwo;