import React, {useState} from "react";
import Image from "next/image";
import {MdVerified} from "react-icons/md";
import {TiTick} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./FollowerTabCard.module.css";
import images from  "../../../img";

const FollowerTabCard = ({el, i}) => {

    const [following, setFollowing] = useState(false);

    const followMe = () => {
        if (!following) {
            setFollowing(true);
        } else {
            setFollowing(false);
        }
    }

    return (
        <div className={Style.FollowerTabCard}>
            <div className={Style.FollowerTabCard_box_rank}>
                <p>
                    #{i + 1} <span>🥇</span>
                </p>
            </div>

            <div className={Style.FollowerTabCard_box}>
                <div className={Style.FollowerTabCard_box_img}>
                    <Image
                        className={Style.FollowerTabCard_box_img_img}
                        src={el.background || images.creatorbackground1}
                        alt="profile background"
                        width={500}
                        height={300}
                    />
                </div>

                <div className={Style.FollowerTabCard_box_profile}>
                    <Image
                        className={Style.FollowerTabCard_box_profile_img}
                        src={el.user || images.user1}
                        alt="profile picture"
                        width={50}
                        height={50}
                    />
                </div>

                <div className={Style.FollowerTabCard_box_info}>
                    <div className={Style.FollowerTabCard_box_info_name}>
                        <h4 title={el.seller}>
                            {el.seller.slice(0, 5)}...{el.seller.slice(-5)}{""}{" "}
                            <span>
                                <MdVerified/>
                            </span>
                        </h4>
                        <p>{parseFloat(el.total.toFixed(5)) || 0} ETH</p>
                    </div>

                    <div className={Style.FollowerTabCard_box_info_following}>
                        {following ? (
                            <a onClick={() => followMe()}>
                                Đã theo dõi{""} <span><TiTick/></span>
                            </a>
                        ) : (
                            <a onClick={() => followMe()}>
                                Theo dõi
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowerTabCard;