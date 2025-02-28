import React, {useEffect, useState, useContext} from "react";

// INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import {Slider, Brand, Loader} from "../components/componentsindex";
import {SearchBar} from "../searchPage/searchBarIndex";
import {Filter} from "../components/componentsindex";
import {NFTCardTwo, Banner} from "../collectionPage/collectionIndex";
import images from "../img";

// SMART-CONTRACT IMPORT
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";

const searchPage = () => {

    const {fetchNFTs, setError} = useContext(NFTMarketplaceContext);
    const [nfts, setNfts] = useState([]);
    const [nftsCopy, setNftsCopy] = useState([]);

    useEffect(() => {
        try {
            fetchNFTs().then((item) => {
                if (item.length > 0) {
                    setNfts(item.reverse());
                    setNftsCopy(item);
                }
            });
        } catch (error) {
            setError("Please reload the browser");
        }
    }, []);

    const onHandleSearch = (value) => {

        const filteredNFTS = nfts.filter(({name}) =>
            name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredNFTS.length === 0) {
            setNfts(nftsCopy);
        } else {
            setNfts(filteredNFTS);
        }
    };

    const onClearSearch = () => {
        if (nfts.length && nftsCopy.length) {
            setNfts(nftsCopy);
        }
    };

    return (
        <div className={Style.searchPage}>
            <Banner bannerImage={images.creatorbackground2}/>
            <SearchBar
                onHandleSearch={onHandleSearch}
                onClearSearch={onClearSearch}
            />
            {/*<Filter/>*/}
            {nfts.length === 0 ? <Loader/> : <NFTCardTwo NFTData={nfts} />}
            <Brand/>
        </div>
    );
};

export default searchPage;