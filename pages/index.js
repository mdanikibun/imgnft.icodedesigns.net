import React, {useState, useEffect, useContext} from "react";

// INTERNAL IMPORT
import Style from "../styles/index.module.css"
import {
    HeroSection,
    Service,
    BigNFTSlider,
    Subscribe,
    Title,
    Category,
    Filter,
    NFTCard,
    Collection,
    FollowerTab,
    AudioLive,
    Slider,
    Brand,
    Video,
    Loader
} from "../components/componentsindex";
import {getTopCreators} from "../TopCreators/TopCreators";

// IMPORT CONTRACT DATA
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";

const Home = () => {

    const {checkIfWalletConnected} = useContext(NFTMarketplaceContext);
    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    const {fetchNFTs} = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);

    // CREATOR LIST
    const creators = getTopCreators(nfts);
    //console.log(creators);

    useEffect(() => {
        fetchNFTs().then((item) => {
            if (item.length > 0) {
                setNfts(item.reverse());
                setNftsCopy(item);
            }
        });
    }, []);

    return (
        <div className={Style.homePage}>
            <HeroSection/>
            <Service/>
            <Title
                heading="Danh Sách NFTs"
                paragraph="Khám phá những NFT nổi bật nhất trong mọi chủ đề của cuộc sống."
            />
            {nfts.length === 0 ? <Loader/> : <NFTCard NFTData={nfts}/>}
            {creators.length === 0 ? <Loader/> : <FollowerTab TopCreator={creators} />}
            <Brand/>
        </div>
    )
}

export default Home;