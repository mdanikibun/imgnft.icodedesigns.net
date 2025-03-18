import React, {useState, useEffect, useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

// IMPORT ICON
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

// INTERNAL IMPORT
import Style from "./NavBar.module.css";
import {Discover, HelpCenter, Notification, Profile, SideBar} from "./index";
import {Button, Error, Loading} from "../componentsindex";
import images from "../../img";

// IMPORT FROM SMART-CONTRACT
import {NFTMarketplaceContext} from "../../Context/NFTMarketplaceContext";
import {DiJqueryLogo} from "react-icons/di";
import {FiCopy} from "react-icons/fi";

const NavBar = () => {
    // USE STATE COMPONENTS
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const router = useRouter();

    const copyAddress = () => {
        const copyText = document.getElementById("myWalletAddress");
        navigator.clipboard.writeText(copyText.getAttribute('data-wallet-address'));
    };

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if (btnText == "Khám Phá") {
            setDiscover(!discover);
            setHelp(false);
        } else if (btnText == "CSKH") {
            setDiscover(false);
            setHelp(!help);
        } else {
            setDiscover(false);
            setHelp(false);
        }
    }

    const openSideBar = () => {
        if (!openSideMenu) {
            setOpenSideMenu(true);
        } else {
            setOpenSideMenu(false);
        }
    }

    // SMART-CONTRACT SECTION
    const {currentAccount, connectWallet, openError, openLoading} = useContext(NFTMarketplaceContext);

    // setInterval(() => {
    //     if (currentAccount === "") connectWallet();
    // }, 1000);

    return (
        <div className={Style.navbar}>
            <div className={Style.navbar_container}>

                {/*START LEFT SECTION*/}
                <div className={Style.navbar_container_left}>
                    <div className={Style.logo}>
                        <DiJqueryLogo className={Style.logo_icon} onClick={() => router.push("/")} />
                    </div>
                    <div className={Style.navbar_container_left_box_input}>
                    </div>
                </div>
                {/*END LEFT SECTION*/}

                {/*START RIGHT SECTION*/}
                <div className={Style.navbar_container_right}>
                    <div className={Style.navbar_container_right_discover}>
                        {/*DISCOVER MENU*/}
                        <p onClick={(e) => openMenu(e)}>Khám Phá</p>
                        {discover && (
                            <div className={Style.navbar_container_right_discover_box}>
                                <Discover/>
                            </div>
                        )}
                    </div>

                    {/*HELP CENTER MENU*/}
                    <div className={Style.navbar_container_right_help}>
                        <p onClick={(e) => openMenu(e)}>CSKH</p>
                        {help && (
                            <div className={Style.navbar_container_right_help_box}>
                                <HelpCenter/>
                            </div>
                        )}
                    </div>

                    {/*USER PROFILE*/}
                    <div className={Style.navbar_container_right_profile_box}>
                            {currentAccount == "" ?
                                (<i>Kết nối ví và tham gia với chúng tôi</i>) :
                                (
                                    <div>
                                        <b
                                            id="myWalletAddress"
                                            className={Style.AuthorProfileCard_box_info_address_text}
                                            data-wallet-address={currentAccount}
                                            title={currentAccount}
                                            onClick={() => router.push("/author")}
                                        >
                                            {currentAccount.slice(0, 9)}...{currentAccount.slice(-9)}
                                        </b>
                                        <FiCopy onClick={() => copyAddress()}
                                                className={Style.AuthorProfileCard_box_info_address_icon}
                                                title="Copy mã ví"
                                        />
                                    </div>
                                )
                            }

                    </div>

                    {/*CREATE BUTTON SECTION*/}
                    <div className={Style.navbar_container_right_button}>
                        {currentAccount == "" ?
                            (
                                <Button btnName="Kết nối ví" handleClick={() => {connectWallet()}}/>
                            ) :
                            (
                                <Button btnName="Tạo NFT" handleClick={() => router.push("/upload-nft")}/>
                            )
                        }
                    </div>

                    {/*MENU BUTTON*/}
                    <div className={Style.navbar_container_right_menuBtn}>
                        <CgMenuRight
                            className={Style.menuIcon}
                            onClick={(e) => openSideBar(e)}
                        />
                    </div>

                </div>
                {/*END RIGHT SECTION*/}
            </div>

            {/*SIDEBAR COMPONENT*/}
            {
                openSideMenu && (
                    <div className={Style.SideBar}>
                        <SideBar
                            setOpenSideMenu={setOpenSideMenu}
                            currentAccount={currentAccount}
                            connectWallet={connectWallet}
                        />
                    </div>
                )
            }

            {openError && <Error/>}
            {openLoading && <Loading/>}

        </div>
    )
}

export default NavBar;