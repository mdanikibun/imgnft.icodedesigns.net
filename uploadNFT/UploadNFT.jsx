import React, {useState} from "react";
import {
    MdOutlineHttp,
    MdOutlineAttachFile
} from "react-icons/md";
import {FaPercent} from "react-icons/fa";
import {AiTwotonePropertySafety} from "react-icons/ai";
import {TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiTick} from "react-icons/ti";
import Image from "next/image";
import {useRouter} from "next/router";

// INTERNAL IMPORT
import Style from "./UploadNFT.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import images from "../img";
import {Button} from "../components/componentsindex";
import {DropZone} from "../uploadNFT/uploadNFTIndex";

const UploadNFT = ({uploadToIPFS, createNFT}) => {
    const [price, setPrice] = useState("");
    const [active, setActive] = useState(0);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(0);
    const [image, setImage] = useState(null);
    const router = useRouter();

    const categoryArray = [
        {image: images.nft_cat_1, category: "Nghệ Thuật"},
        {image: images.nft_cat_2, category: "Đời Sống"},
        {image: images.nft_cat_3, category: "Bộ Sưu Tập"},
        {image: images.nft_cat_4, category: "Kỹ Thuật Số"},
    ];

    return (
        <div className={Style.upload}>
            <DropZone
                title="JPG, PNG - 100MB"
                heading="Kéo thả file"
                subHeading="hoặc file ảnh trên thiết bị của bạn"
                name={name}
                description={description}
                category={category}
                image={images.upload}
                setImage={setImage}
                uploadIPFS={uploadToIPFS}
            />

            <div className={Style.upload_box}>
                <div className={formStyle.Form_box_input}>
                    <label htmlFor="nft">Tên</label>
                    <input
                        type="text"
                        placeholder="Nhập tên NFT"
                        className={formStyle.Form_box_input_userName}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor="description">Miêu tả</label>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="6"
                        placeholder="Nhập miêu tả hoặc lịch sử của NFT"
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor="name">
                        Chọn danh mục
                    </label>
                    <p className={Style.upload_box_input_para}>
                        Chọn 1 danh mục mà bạn muốn cho NFT của bạn.
                    </p>

                    <div className={Style.upload_box_slider_div}>
                        {categoryArray.map((el, i) => (
                            <div
                                className={`${Style.upload_box_slider} ${active === i + 1 ? Style.active : ""}`}
                                key={i + 1}
                                onClick={() => (setActive(i + 1), setCategory(el.category))}
                            >
                                <div className={Style.upload_box_slider_box}>
                                    <div className={Style.upload_box_slider_box_img}>
                                        <Image
                                            src={el.image}
                                            alt="background image"
                                            width={70}
                                            height={70}
                                            className={Style.upload_box_slider_box_img_img}
                                        />
                                    </div>
                                    <div className={Style.upload_box_slider_box_img_icon}>
                                        <TiTick/>
                                    </div>
                                </div>

                                <p>&nbsp;{el.category}</p>

                            </div>
                        ))}
                    </div>
                </div>

                <div className={formStyle.Form_box_input_social}>

                    <div className={formStyle.Form_box_input}>
                        <label htmlFor="price">Giá tiền (ETH)</label>
                        <div className={formStyle.Form_box_input_box}>
                            <AiTwotonePropertySafety className={formStyle.Form_box_input_social_icon} />
                            <input
                                type="text"
                                placeholder="Nhập giá tiền của NFT"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>

                </div>

                <div className={Style.upload_box_btn}>
                    <Button
                        btnName="Tạo NFT"
                        handleClick={async () => createNFT(
                            name,
                            price,
                            image,
                            description,
                            category,
                            router
                        )}
                        classStyle={Style.upload_box_btn_style}
                    />
                </div>

            </div>
        </div>
    )
}

export default UploadNFT;