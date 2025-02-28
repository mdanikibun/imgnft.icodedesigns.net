import React, {useState, useEffect, useContext} from "react";

// INTERNAL IMPORT
import Style from "../styles/author.module.css";
import {Banner, NFTCardTwo} from "../collectionPage/collectionIndex";
import {Brand, Title} from "../components/componentsindex";
import FollowerTabCard from "../components/FollowerTab/FollowerTabCard/FollowerTabCard";
import images from "../img";
import {AuthorProfileCard, AuthorTaps, AuthorNFTCardBox} from "../authorPage/componentindex";

// IMPORT SMART-CONTRACT DATA
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";

const author = () => {

    const followerArray = [
        {background: images.creatorbackground1, image: images.user1, seller: "d8dvvdff9azxco-23fdf99fasd"},
        {background: images.creatorbackground2, image: images.user2, seller: "d8dvvdff9azxco-23fdf99fasd"},
        {background: images.creatorbackground3, image: images.user3, seller: "d8dvvdff9azxco-23fdf99fasd"},
    ];

    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);

    // IMPORT SMART-CONTRACT DATA
    const {fetchMyNFTsOrListedNFTs, currentAccount} = useContext(NFTMarketplaceContext);

    const [nfts, setNfts] = useState([]);
    const [myNFTs, setMyNFTs] = useState([]);

    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items) => {
            setNfts(items);
        });
    }, []);

    useEffect(() => {
        fetchMyNFTsOrListedNFTs("fetchMyNFTs").then((items) => {
            setMyNFTs(items);
        })
    }, []);

    return (
        <div className={Style.author}>
            <Banner bannerImage={images.creatorbackground2}/>
            <AuthorProfileCard currentAccount={currentAccount}/>
            <AuthorTaps
                setCollectiables={setCollectiables}
                setCreated={setCreated}
                setLike={setLike}
                setFollower={setFollower}
                setFollowing={setFollowing}
            />
            <AuthorNFTCardBox
                collectiables={collectiables}
                created={created}
                like={like}
                follower={follower}
                following={following}
                nfts={nfts}
                myNFTs={myNFTs}
            />
            <Brand/>
        </div>
    )
}

export default author;