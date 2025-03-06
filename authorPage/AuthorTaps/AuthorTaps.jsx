import React, {useState} from "react";
import Image from 'next/image';
import {TiArrowSortedDown, TiArrowSortedUp, TiArrowUp, TiTick} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./AuthorTaps.module.css";

const AuthorTaps = ({
    setCollectiables,
    setCreated,
    setLike,
    setFollower,
    setFollowing
}) => {
    const [activeBtn, setActiveBtn] = useState(1);

    const openTab = (e) => {
        const btnText = e.target.innerText;
        if ( btnText === "NFTs đang rao bán") {
            setCollectiables(true);
            setCreated(false);
            setActiveBtn(1);
        }  else if (btnText === "NFTs đang sở hữu") {
            setCollectiables(false);
            setCreated(true);
            setActiveBtn(2);
        }
    }

    return (
        <div className={Style.AuthorTaps}>
            <div className={Style.AuthorTaps_box}>
                <div className={Style.AuthorTaps_box_left}>
                    <div className={Style.AuthorTaps_box_left_btn}>
                        <button
                            className={`${activeBtn === 1 ? Style.active : ""}`}
                            onClick={(e) => openTab(e)}
                        >
                            NFTs đang rao bán{""}
                        </button>
                        <button
                            className={`${activeBtn === 2 ? Style.active : ""}`}
                            onClick={(e) => openTab(e)}
                        >
                            NFTs đang sở hữu{""}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorTaps;