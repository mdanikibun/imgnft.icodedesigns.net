import React from "react";
import Link from "next/link";

// INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
    const helpCenter = [
        {
            name: "Về chúng tôi",
            link: "aboutUs"
        },
        {
            name: "Liên hệ",
            link: "contactUs"
        },
        {
            name: "Nâng cấp tài khoản",
            link: "subscription"
        }
    ];
    return (
        <div className={Style.box}>
            {helpCenter.map((el, i) => (
                <div key={i + 1} className={Style.helpCenter}>
                    <Link href={{pathname: `${el.link}`}}>
                        {el.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default HelpCenter;