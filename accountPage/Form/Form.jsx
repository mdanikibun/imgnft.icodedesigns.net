import React from "react";
import {HiOutlineMail} from "react-icons/hi";
import {MdOutlineHttp, MdOutlineContentCopy} from "react-icons/md";
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram
} from "react-icons/ti";

// INTERNAL IMPORT
import Style from "./Form.module.css";
import {Button} from "../../components/componentsindex";

const Form = () => {
    return (
        <div className={Style.Form}>
            <div className={Style.Form_box}>
                <form>
                    <div className={Style.Form_box_input}>
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            placeholder="shoaib bhai"
                            className={Style.Form_box_input_userName}
                        />
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="email">Email</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <HiOutlineMail/>
                            </div>
                            <input type="text" placeholder="Email"/>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="description">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="6"
                            placeholder="something about yourself in few words"
                        ></textarea>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="website">Website</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp/>
                            </div>
                            <input type="text" placeholder="website"/>
                        </div>
                    </div>

                    <div className={Style.Form_box_input_social}>
                        <div className={Style.Form_box_input}>
                            <label htmlFor="facebook">Facebook</label>
                            <div className={Style.Form_box_input_box}>
                                <TiSocialFacebook className={Style.Form_box_input_social_icon} />
                                <input type="text" placeholder="https://facebook.com"/>
                            </div>
                        </div>

                        <div className={Style.Form_box_input}>
                            <label htmlFor="twitter">Twitter</label>
                            <div className={Style.Form_box_input_box}>
                                <TiSocialTwitter className={Style.Form_box_input_social_icon} />
                                <input type="text" placeholder="https://twitter.com"/>
                            </div>
                        </div>

                        <div className={Style.Form_box_input}>
                            <label htmlFor="instagram">Instagram</label>
                            <div className={Style.Form_box_input_box}>
                                <TiSocialInstagram className={Style.Form_box_input_social_icon} />
                                <input type="text" placeholder="https://instagram.com"/>
                            </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_input}>
                        <label htmlFor="wallet">Wallet Address</label>
                        <div className={Style.Form_box_input_box}>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineHttp/>
                            </div>
                            <input type="text" placeholder="0xd4B5a5ffA563C714A51C8E0438831525E292452F"/>
                            <div className={Style.Form_box_input_box_icon}>
                                <MdOutlineContentCopy/>
                            </div>
                        </div>
                    </div>

                    <div className={Style.Form_box_btn}>
                        <Button
                            btnName="Upload profile"
                            handleClick={() => {}}
                            classStyle={Style.button}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;