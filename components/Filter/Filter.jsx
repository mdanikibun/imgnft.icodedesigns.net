import React, {useState} from "react";
import {
    FaFilter,
    FaAngleDown,
    FaAngleUp,
    FaWallet,
    FaMusic,
    FaVideo,
    FaImages,
    FaUserAlt
} from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai";
import {MdVerified} from "react-icons/md";
import {TiTick} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Filter.module.css";

const Filter = () => {
    const [allCat, setAllCat] = useState(true);
    const [cat1, setCat1] = useState(false);
    const [cat2, setCat2] = useState(false);
    const [cat3, setCat3] = useState(false);

    // FUNCTION SECTION
    const filterAll = () => {
        setAllCat(true);
        setCat1(false);
        setCat2(false);
        setCat3(false);
    }
    const filterCat1 = () => {
        setAllCat(false);
        setCat1(true);
        setCat2(false);
        setCat3(false);
    }
    const filterCat2 = () => {
        setAllCat(false);
        setCat1(false);
        setCat2(true);
        setCat3(false);
    }
    const filterCat3 = () => {
        setAllCat(false);
        setCat1(false);
        setCat2(false);
        setCat3(true);
    }

    return (
        <div className={Style.filter}>
            <div className={Style.filter_box}>
                <div className={Style.filter_box_left}>
                    <button
                        className={allCat ? Style.btn_active : ""}
                        onClick={() => filterAll()}
                    >
                        Tất Cả
                    </button>
                    <button
                        className={cat1 ? Style.btn_active : ""}
                        onClick={() => filterCat1()}
                    >Nghệ Thuật
                    </button>
                    <button
                        className={cat2 ? Style.btn_active : ""}
                        onClick={() => filterCat2()}
                    >
                        Đời Sống
                    </button>
                    <button
                        className={cat3 ? Style.btn_active : ""}
                        onClick={() => filterCat3()}
                    >
                        Bộ Sưu Tập
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filter;