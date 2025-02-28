import React, {useState} from "react";

// INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import {NFTCardTwo} from "../../collectionPage/collectionIndex";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
    collectiables,
    created,
    like,
    follower,
    following,
    nfts,
    myNFTs
}) => {

    const followerArray = [
        {background: images.creatorbackground1, image: images.user1, seller: "d8dvvdff9azxco-23fdf99fasd"},
        {background: images.creatorbackground2, image: images.user2, seller: "d8dvvdff9azxco-23fdf99fqwe"},
        {background: images.creatorbackground3, image: images.user3, seller: "d8dvvdff9azxco-23fdf99fzxc"},
    ];

    const followingArray = [
        {background: images.creatorbackground3, image: images.user3, seller: "d8dvvdff9azxco-23fdf99fasd"},
        {background: images.creatorbackground4, image: images.user4, seller: "d8dvvdff9azxco-23fdf99fasd"},
        {background: images.creatorbackground5, image: images.user5, seller: "d8dvvdff9azxco-23fdf99fasd"},
    ];

    return (
        <div className={Style.AuthorNFTCardBox}>
            {collectiables && <NFTCardTwo NFTData={nfts}/>}
            {created && <NFTCardTwo NFTData={myNFTs}/>}
            {like && <NFTCardTwo NFTData={nfts}/>}
            {follower && (
                <div className={Style.AuthorNFTCardBox_box}>
                    {followerArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el}/>
                    ))}
                </div>
            )}
            {following && (
                <div className={Style.AuthorNFTCardBox_box}>
                    {followingArray.map((el, i) => (
                        <FollowerTabCard i={i} el={el}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AuthorNFTCardBox;