import React, {useState, useEffect, useContext} from 'react';
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Loading.module.css";

// SMART-CONTRACT IMPORT CONTEXT
import {NFTMarketplaceContext} from "../../Context/NFTMarketplaceContext";
import images from "../../img";

const Loading = () => {

    const{loading, setOpenLoading} = useContext(NFTMarketplaceContext);

    return (
        <div className={Style.Loading}>
            <div className={Style.Loading_box}>
                <div className={Style.Loading_box_info}>
                    <Image
                        src={images.loadinggif}
                        alt="error"
                        width={200}
                        height={200}
                        className={Style.Loading_box_info_img}
                    />
                    <p>{loading}</p>
                </div>
            </div>
        </div>
    );
};

export default Loading;