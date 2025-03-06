import React, {useState} from "react";

// INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import {NFTCardTwo} from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
    collectiables,
    created,
    nfts,
    myNFTs
}) => {

    return (
        <div className={Style.AuthorNFTCardBox}>
            {collectiables && <NFTCardTwo NFTData={nfts}/>}
            {created && <NFTCardTwo NFTData={myNFTs}/>}
        </div>
    );
};

export default AuthorNFTCardBox;