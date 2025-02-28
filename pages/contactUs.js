import React from 'react';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram
} from "react-icons/ti";
import {HiOutlineMail} from "react-icons/hi";

// INTERNAL IMPORT
import Style from "../styles/contactUs.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import {Button} from "../components/componentsindex";

const contactUs = () => {
    return (
        <div className={Style.contactUs}>
            <div className={Style.contactUs_box}>
                <h1>Liên Hệ</h1>
                <div className={Style.contactUs_box_box}>
                    <div className={Style.contactUs_box_box_left}>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>🏢 ĐỊA CHỈ</h3>
                            <p>123 Hùng Vương, Q. Thuận Hoá, Tp. Huế</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>📧 EMAIL</h3>
                            <p>nc.example@example.com</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>📞 SỐ ĐIỆN THOẠI</h3>
                            <p>84-01234-56789</p>
                        </div>
                        <div className={Style.contactUs_box_box_left_item}>
                            <h3>🌏 MẠNG XÃ HỘI</h3>
                            <a href="#">
                                <TiSocialFacebook/>
                            </a>
                            <a href="#">
                                <TiSocialLinkedin/>
                            </a>
                            <a href="#">
                                <TiSocialInstagram/>
                            </a>
                            <a href="#">
                                <TiSocialYoutube/>
                            </a>
                            <a href="#">
                                <TiSocialTwitter/>
                            </a>
                        </div>
                    </div>
                    <div className={Style.contactUs_box_box_right}>
                        <form>
                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="name">Tên</label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên"
                                    className={formStyle.Form_box_input_userName}
                                />
                            </div>

                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="email">Email</label>
                                <div className={formStyle.Form_box_input_box}>
                                    <div className={formStyle.Form_box_input_box_icon}>
                                        <HiOutlineMail/>
                                    </div>
                                    <input type="text" placeholder="Nhập Email"/>
                                </div>
                            </div>

                            <div className={formStyle.Form_box_input}>
                                <label htmlFor="message">Tin Nhắn</label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="6"
                                    placeholder="Nhập tin nhắn"
                                ></textarea>
                            </div>

                            <Button
                                btnName="Gửi"
                                handleClick={() => {}}
                                classStyle={Style.button}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contactUs;