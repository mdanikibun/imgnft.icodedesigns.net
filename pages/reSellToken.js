import React, {useEffect, useState, useContext} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/reSellToken.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import {Button} from "../components/componentsindex";

// IMPORT SMART-CONTRACT
import {NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";

const domain = "https://card.gamocorp.com/";

const reSellToken = () => {

    const {createSale} = useContext(NFTMarketplaceContext);
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const router = useRouter();
    const {id, tokenURI} = router.query;

    const fetchNFT = async () => {
        if (!tokenURI) return;

        const {data} = await axios.get(`${tokenURI}?IsData=1`);
        const image = `${domain}${data.image}`;

        setName(data.name);
        setDescription(data.description);
        setCategory(data.category);
        setPrice(data.price);
        setImage(image);
    };

    useEffect(() => {
        fetchNFT();
    }, [id]);

    const reSell = async () => {
        try {
            await createSale(tokenURI, price, name, description, category, true, id);
            router.push("/author");
        } catch (error) {
            console.log("Error while resell", error)
        }
    };

    return (
        <div className={Style.reSellToken}>
            <div className={Style.reSellToken_box}>
                <h1>Bán lại NFT của bạn, Định Giá</h1>

                <div className={formStyle.Form_box_input}>
                    <label htmlFor="price">Giá tiền</label>
                    <input
                        type="number"
                        min={1}
                        placeholder="Nhập giá tiền"
                        className={formStyle.Form_box_input_userName}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className={Style.reSellToken_box_image}>
                    {
                        image && (
                            <Image
                                src={image}
                                alt="re-sell nft"
                                width={400}
                                height={400}
                            />
                        )
                    }
                </div>

                <div className={Style.reSellToken_box_btn}>
                    <Button btnName="Rao bán lại NFT" handleClick={() => reSell()} />
                </div>

            </div>
        </div>
    );
};

export default reSellToken;