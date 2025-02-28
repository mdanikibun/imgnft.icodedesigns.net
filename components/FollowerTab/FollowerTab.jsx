import React, {useState, useEffect} from "react";
import {RiUserFollowFill, RiUserUnfollowFill, RiAwardLine} from "react-icons/ri";
import {useRouter} from "next/router";

// INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

const FollowerTab = ({TopCreator}) => {

    const router = useRouter();
    const [popular, setPopular] = useState(true);

    return (
        <div className={Style.followerTab}>
            <div className={Style.followerTab_title}>
                <h2>TOP Nhà Sáng Tạo</h2>
                <p>Danh sách các nhà sáng tạo sắp xếp theo tổng số giá trị của NFTs mà họ đang sở hữu.</p>
            </div>

            {
                popular && (
                    <div className={Style.followerTab_box}>
                        {TopCreator.map((el, i) => (
                            <FollowerTabCard key={i + 1} i={i} el={el}/>
                        ))}
                    </div>
                )
            }

            <div className={Style.followerTab_member}>
                <div className={Style.followerTab_member_box}>
                    <a
                        href="#"
                        onClick={() => router.push("/upload-nft")}
                    >Tạo mới NFT</a>
                </div>
            </div>
        </div>
    )
}

export default FollowerTab;