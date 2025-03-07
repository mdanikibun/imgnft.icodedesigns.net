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

    const [collectiables, setCollectiables] = useState(true);
    const [created, setCreated] = useState(false);

    // IMPORT SMART-CONTRACT DATA
    const {fetchMyNFTsOrListedNFTs, currentAccount, withdraw} = useContext(NFTMarketplaceContext);

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
            <AuthorProfileCard
                currentAccount={currentAccount}
                withdraw={withdraw}
            />
            <AuthorTaps
                setCollectiables={setCollectiables}
                setCreated={setCreated}
            />
            <AuthorNFTCardBox
                collectiables={collectiables}
                created={created}
                nfts={nfts}
                myNFTs={myNFTs}
            />
            <Brand/>
        </div>
    )
}

export default author;