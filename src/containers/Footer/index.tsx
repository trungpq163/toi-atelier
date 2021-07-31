/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CategorySub from "../../components/CategorySub";

import productImage from "../../assets/images/product_img.svg";

import checked from "../../assets/images/checked.svg";
import uncheck from "../../assets/images/uncheck.svg";

interface SubItem {
    title: string;
    imageURL: string;
}

const Footer = () => {
    const [categorySubItem, setCategorySubItem] = useState([
        {
            title: "flap",
            imageURL: checked,
        },
        {
            title: "body",
            imageURL: checked,
        },
        {
            title: "strap",
            imageURL: uncheck,
        },
        {
            title: "hardware",
            imageURL: uncheck,
        },
        {
            title: "handle",
            imageURL: uncheck,
        },
    ]);

    return (
        <div className="footer">
            <div className="left">
                {categorySubItem.map((item: SubItem, idx: number) => (
                    <CategorySub key={idx} imageURL={item.imageURL}>
                        {item.title}
                    </CategorySub>
                ))}
            </div>
            <div className="right">
                <img
                    className="thumbnail"
                    src={productImage}
                    alt="product thumbnail"
                />
                <div className="product_price">$1,340.00</div>
                <div className="btn_add">done & add to cart</div>
            </div>
        </div>
    );
};

export default Footer;
