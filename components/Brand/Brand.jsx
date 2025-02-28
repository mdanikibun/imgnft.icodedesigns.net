import React from "react";
import Image from "next/image"
import {useRouter} from "next/router";

// INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import {Button} from "../../components/componentsindex";

const Brand = () => {

    const router = useRouter();

    return (
        <div className={Style.Brand}>
            <div className={Style.Brand_box}>
                <div className={Style.Brand_box_left}>
                    <h1>Kiếm tiền điện tử miễn phí</h1>
                    <p>Hệ thống này giúp bạn khám phá cơ hội kiếm tiền điện tử miễn phí và giao dịch NFTs một cách an toàn.</p>
                    <div className={Style.Brand_box_left_btn}>
                        <Button btnName={"Tạo NFT"} handleClick={() => router.push("/upload-nft")}/>
                        <Button btnName={"Tìm Kiếm"} handleClick={() => router.push("/searchPage")}/>
                    </div>
                </div>
                <div className={Style.Brand_box_right}>
                    <Image
                        src={images.earn}
                        alt="brand logo"
                        width={800}
                        height={600}
                    />
                </div>
            </div>
        </div>
    )
}

export default Brand;