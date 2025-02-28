import React from "react";
import Image from "next/image";
import {MdVerified} from "react-icons/md";

// INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = () => {
    return (
        <div className={Style.daysComponent}>
            <div className={Style.daysComponent_box}>
                <div className={Style.daysComponent_box_img}>
                    <Image
                        className={Style.daysComponent_box_img_img}
                        alt="profile background"
                        src={images.creatorbackground1}
                    />
                </div>

                <div className={Style.daysComponent_box_profile}>
                    <Image
                        className={Style.daysComponent_box_profile_img_1}
                        src={images.creatorbackground2}
                        alt="profile"
                    />
                    <Image
                        className={Style.daysComponent_box_profile_img_2}
                        src={images.creatorbackground2}
                        alt="profile"
                    />
                    <Image
                        className={Style.daysComponent_box_profile_img_3}
                        src={images.creatorbackground2}
                        alt="profile"
                    />
                </div>

                <div className={Style.daysComponent_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.daysComponent_box_title_info}>
                        <div className={Style.daysComponent_box_title_info_profile}>
                            <Image
                                className={Style.daysComponent_box_title_info_profile_img}
                                src={images.user1}
                                alt="profile"
                                width={30}
                                height={30}
                            />

                            <p>
                                <b>Creator&nbsp;&nbsp;</b>
                                <span>
                                    Bnz Gaf
                                    <small>
                                        <MdVerified/>
                                    </small>
                                </span>
                            </p>
                        </div>

                        <div className={Style.daysComponent_box_title_info_price}>
                            <small>1.255 ETH</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaysComponents;