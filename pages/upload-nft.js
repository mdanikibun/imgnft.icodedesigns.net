import React, {useEffect, useState, useContext} from "react";

// INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import {UploadNFT} from "../uploadNFT/uploadNFTIndex";

// SMART-CONTRACT IMPORT
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";

const uploadNFT = () => {

    const {uploadToIPFS, createNFT} = useContext(NFTMarketplaceContext);

    return (
        <div className={Style.uploadNFT}>
            <div className={Style.uploadNFT_box}>
                <div className={Style.uploadNFT_box_heading}>
                    <h1>Tạo mới NFT</h1>
                    <p>Bạn có thể đặt tên hiển thị ưa thích, đưa lên các tác phẩm độc quyền dạng hình ảnh.</p>
                </div>

                <div className={Style.uploadNFT_box_title}>
                    <h2>Hình ảnh - các tác phẩm vật lý hoặc kỹ thuật số mà bạn muốn</h2>
                    <p><u>Hỗ trợ định dạng:</u> JPG, PNG. <u>Dung lượng tối đa:</u> 100 MB</p>
                </div>

                <div className={Style.uploadNFT_box_form}>
                    <UploadNFT
                        uploadToIPFS={uploadToIPFS}
                        createNFT={createNFT}
                    />
                </div>
            </div>
        </div>
    )
}

export default uploadNFT;