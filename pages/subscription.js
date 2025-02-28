import React from 'react';


// INTERNAL IMPORT
import Style from "../styles/subscription.module.css";
import Subscription from "../Subscription/Subscription";

const subscription = () => {

    const subscriptionArray = [
        {
            plan: "gói BẮT ĐẦU",
            price: "$5/tháng",
            popular: "",
            service: ["Báo cáo tự động", "Xử lý nhanh hơn", "Tùy chỉnh", "Hỗ trợ cơ bản"],
            info: "Dùng để hỗ trợ người dùng tiếp cận nhanh chóng và an toàn."
        },
        {
            plan: "gói CƠ BẢN",
            price: "$15/tháng",
            popular: "PHỔ BIẾN",
            service: ["Mọi thứ trong gói BẮT ĐẦU", "100 bản dựng", "Báo cáo tiến độ", "Hỗ trợ cao cấp"],
            info: "Dùng để hỗ trợ người dùng tiếp cận nhanh chóng và an toàn."
        },
        {
            plan: "gói NÂNG CAO",
            price: "$25/tháng",
            popular: "",
            service: ["Mọi thứ trong gói CƠ BẢN", "Bản dựng không giới hạn", "Phân tích nâng cao", "Đánh giá công ty"],
            info: "Dùng để hỗ trợ người dùng tiếp cận nhanh chóng và an toàn."
        },
    ];

    return (
        <div className={Style.Subscription}>
            <div className={Style.Subscription_box}>
                <div className={Style.Subscription_box_info}>
                    <h1>💎 Đăng Ký Thành Viên</h1>
                    <p>Giá cả phù hợp với nhu cầu của mọi quy mô công ty.</p>
                </div>

                <div className={Style.Subscription_box_box}>
                    {subscriptionArray.map((el, i) => (
                        <Subscription key={i + 1} i={1} el={el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default subscription;