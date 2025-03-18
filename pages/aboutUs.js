import React from 'react';
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/aboutUs.module.css";
import {Brand} from "../components/componentsindex";
import images from "../img";

const aboutUs = () => {

    const founderArray = [
        {name: "Đào Văn Phụng", position: "Giáo viên hướng dẫn", image: images.founder1},
        {name: "Phan Lê Khánh Linh", position: "Học sinh thực hiện", image: images.founder3},
        {name: "Nguyễn Hữu Khánh Hoàng", position: "Học sinh thực hiện", image: images.founder1}
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
                            Là những học sinh đam mê về lĩnh vực tin học phần mềm, chúng em đã không ngừng cố gắng, chăm
                            chỉ học hỏi để ra mắt một nền tảng công nghệ mới này. Trang web này không chỉ là một dự án,
                            mà còn là tâm huyết của chúng em. Chúng em luôn nỗ lực để mang đến trải nghiệm tốt nhất,
                            đồng thời lắng nghe mọi góp ý để không ngừng hoàn thiện.
                        </p>
                    </div>
                    <div className={Style.aboutUs_box_hero_right}>
                        <Image
                            src={images.hero}
                            alt="hero"
                            className={Style.aboutUs_box_hero_right_img}
                        />
                    </div>
                </div>

                <div className={Style.aboutUs_box_title}>
                    <h2>🌂Các Thành Viên</h2>
                    <p>
                        Hiện đang học tập và công tác tại trường THPT An Lương Đông, Lộc An, Phú Lộc, TP Huế
                    </p>
                </div>

                <div className={Style.aboutUs_box_founder}>
                    <div className={Style.aboutUs_box_founder_box}>
                        {founderArray.map((el, i) => (
                            <div className={Style.aboutUs_box_founder_box_img} key={i + 1}>
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
                            <div className={Style.aboutUs_box_facts_box_info} key={i + 1}>
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