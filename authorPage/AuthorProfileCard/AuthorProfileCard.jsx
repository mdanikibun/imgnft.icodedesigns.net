import React, {useState} from "react";
import Image from "next/image";
import {MdVerified, MdCloudUpload, MdOutlineReportProblem} from "react-icons/md";
import {FiCopy, FiDollarSign} from "react-icons/fi";
import {TiSocialFacebook, TiSocialLinkedin, TiSocialYoutube, TiSocialInstagram} from "react-icons/ti";
import {BsThreeDots} from "react-icons/bs";

// INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import {Button} from "../../components/componentsindex"

const AuthorProfileCard = ({currentAccount, withdraw}) => {
    const [share, setShare] = useState(false);
    const [report, setReport] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [contractAddress, setContractAddress] = useState("");

    const copyAddress = () => {
        const copyText = document.getElementById("myInput");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    };

    const openShare = () => {
        if (!share) {
            setShare(true);
            setReport(false);
        } else {
            setShare(false);
        }
    };

    const openReport = () => {
        if (!share) {
            setShare(false);
            setReport(true);
        } else {
            setReport(false);
        }
    };

    return (
        <div className={Style.AuthorProfileCard}>
            <div className={Style.AuthorProfileCard_box}>
                <div className={Style.AuthorProfileCard_box_img}>
                    <Image
                        src={images.founder3}
                        className={Style.AuthorProfileCard_box_img_img}
                        alt="NFT IMAGES"
                        width={220}
                        height={220}
                    />
                </div>

                <div className={Style.AuthorProfileCard_box_info}>
                    <h2>
                        Phan Lê Khánh Linh{""}{" "}
                        <span>
                        <MdVerified/>
                    </span>{" "}
                    </h2>

                    <div className={Style.AuthorProfileCard_box_info_address}>
                        <input type="text" value={currentAccount} id="myInput" onChange={() => {
                        }}/>
                        <FiCopy onClick={() => copyAddress()}
                                className={Style.AuthorProfileCard_box_info_address_icon}/>
                    </div>

                    {currentAccount === "0xd4b5a5ffa563c714a51c8e0438831525e292452f" && (
                        <div className={Style.AuthorProfileCard_box_info_address}>
                            <br/>
                            <br/>
                            <input
                                type="text"
                                value={walletAddress} // Thêm state walletAddress
                                placeholder="Nhập địa chỉ ví"
                                onChange={(e) => setWalletAddress(e.target.value)} // Cập nhật state
                            />
                            <input
                                type="text"
                                value={contractAddress} // Thêm state contractAddress
                                placeholder="Nhập địa chỉ contract"
                                onChange={(e) => setContractAddress(e.target.value)} // Cập nhật state
                            />
                            <FiDollarSign
                                onClick={() => withdraw(walletAddress, contractAddress)} // Truyền tham số
                                title="CLICK VÀO ĐÂY ĐỂ RÚT TIỀN TỪ CONTRACT VỀ VÍ"
                                className={Style.AuthorProfileCard_box_info_address_icon}
                            />
                        </div>
                    )}

                    <p>
                        Là những học sinh đam mê về lĩnh vực tin học phần mềm, chúng em đã không ngừng cố gắng, chăm chỉ
                        học hỏi để ra mắt một nền tảng công nghệ mới này. Trang web này không chỉ là một dự án, mà còn
                        là tâm huyết của chúng em. Chúng em luôn nỗ lực để mang đến trải nghiệm tốt nhất, đồng thời lắng
                        nghe mọi góp ý để không ngừng hoàn thiện.
                    </p>

                    <div className={Style.AuthorProfileCard_box_info_social}>
                        <a href="#">
                            <TiSocialFacebook/>
                        </a>
                        <a href="#">
                            <TiSocialInstagram/>
                        </a>
                        <a href="#">
                            <TiSocialLinkedin/>
                        </a>
                        <a href="#">
                            <TiSocialYoutube/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorProfileCard;