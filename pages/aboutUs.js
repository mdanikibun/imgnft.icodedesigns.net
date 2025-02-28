import React from 'react';
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/aboutUs.module.css";
import {Brand} from "../components/componentsindex";
import images from "../img";

const aboutUs = () => {

    const founderArray = [
        {name: "Founder 1", position: "Chủ tịch", image: images.founder1},
        {name: "Founder 2", position: "Tổng giám đốc điều hành", image: images.founder2},
        {name: "Founder 3", position: "Giám đốc điều hành", image: images.founder3},
        {name: "Founder 4", position: "Giám đốc chiến lược", image: images.founder4},
    ];

    const factsArray = [
        {
            title: "10 triệu",
            info: "Các bài viết đã được công khai trên toàn thế giới (tính đến ngày 30 tháng 9 năm 2021)"
        },
        {title: "100,000", info: "Tài khoản người dùng đã đăng ký (tính đến ngày 30 tháng 9 năm 2021)"},
        {
            title: "220+",
            info: "Các quốc gia và khu vực có sự hiện diện của chúng tôi (tính đến ngày 30 tháng 9 năm 2021)"
        },
    ];

    return (
        <div className={Style.aboutUs}>
            <div className={Style.aboutUs_box}>

                <div className={Style.aboutUs_box_hero}>
                    <div className={Style.aboutUs_box_hero_left}>
                        <h1>✋ Về Chúng Tôi.</h1>
                        <p>
                            Chúng tôi công bằng và độc lập, và mỗi ngày chúng tôi tạo ra các chương trình và nội dung
                            đặc biệt, đẳng cấp thế giới để cung cấp thông tin, giáo dục và giải trí cho hàng triệu người
                            trên khắp thế giới.
                        </p>
                    </div>
                    <div className={Style.aboutUs_box_hero_right}>
                        <Image
                            src={images.hero}
                        />
                    </div>
                </div>

                <div className={Style.aboutUs_box_title}>
                    <h2>🌂Nhà Sáng Lập</h2>
                    <p>
                        Chúng tôi vô tư và độc lập, và mỗi ngày chúng tôi tạo ra các chương trình và
                        nội dung đặc biệt, đẳng cấp thế giới
                    </p>
                </div>

                <div className={Style.aboutUs_box_founder}>
                    <div className={Style.aboutUs_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutUs_box_founder_box_img}>
                                <Image
                                    src={el.image}
                                    alt={el.name}
                                    className={Style.aboutUs_box_founder_box_img_img}
                                />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={Style.aboutUs_box_title}>
                    <h2>🚀 Sự Kiện Nhanh</h2>
                    <p>
                        Chúng tôi vô tư và độc lập, và mỗi ngày chúng tôi tạo ra các chương trình và
                        nội dung đặc biệt, đẳng cấp thế giới
                    </p>
                </div>

                <div className={Style.aboutUs_box_facts}>
                    <div className={Style.aboutUs_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div className={Style.aboutUs_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Brand/>
        </div>
    );
};

export default aboutUs;