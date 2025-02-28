import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
    return (
        <div className={Style.service}>
            <div className={Style.service_box}>

                <div className={Style.service_box_item}>
                    <Image src={images.service1} alt="Filter & Discover" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Bước 1</span>
                    </p>
                    <h3>Tìm kiếm & khám phá</h3>
                    <p>
                        Khám phá thế giới NFT đa dạng, tìm kiếm các tác phẩm nghệ thuật số độc đáo phù hợp với sở thích của bạn.
                    </p>
                </div>

                <div className={Style.service_box_item}>
                    <Image src={images.service2} alt="Connect wallet" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Bước 2</span>
                    </p>
                    <h3>Kết nối ví</h3>
                    <p>
                        Liên kết ví tiền điện tử MetaMask của bạn với nền tảng NFT để sẵn sàng thực hiện các giao dịch mua bán.
                    </p>
                </div>

                <div className={Style.service_box_item}>
                    <Image src={images.service3} alt="Start Trading" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Bước 3</span>
                    </p>
                    <h3>Bắt đầu giao dịch</h3>
                    <p>
                        Tiến hành tạo, mua hoặc bán NFT một cách dễ dàng và an toàn sau khi đã kết nối ví.
                    </p>
                </div>

                <div className={Style.service_box_item}>
                    <Image src={images.service4} alt="End Trading" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Bước 4</span>
                    </p>
                    <h3>Kết thúc giao dịch</h3>
                    <p>
                        Hoàn tất giao dịch, đảm bảo NFT được chuyển vào ví và tận hưởng thành quả của bạn.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Service;