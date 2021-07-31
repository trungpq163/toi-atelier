/* eslint-disable @typescript-eslint/no-unused-vars */
import SelectFilter from "../../components/SelectFilter";
import ContentItem from "../../components/ContentItem";
import { useState } from "react";

import tumbled from "../../assets/images/tumbled.svg";
import hello from "../../assets/images/hello.svg";
import name from "../../assets/images/name.svg";
import myname from "../../assets/images/myname.svg";
import fantastic from "../../assets/images/fantastic.svg";
import stagnate from "../../assets/images/stagnate.svg";
import compassion from "../../assets/images/compassion.svg";
import luxury from "../../assets/images/luxury.svg";

interface Item {
    title: string;
    active: boolean;
    color?: string;
    imageURL?: string;
}

const ContentRight = () => {
    const [leatherTypeItem, setLeatherTypeItem] = useState([
        {
            title: "tumbled",
            active: true,
            imageURL: tumbled,
        },
        {
            title: "hello",
            active: false,
            imageURL: hello,
        },
        {
            title: "name",
            active: false,
            imageURL: name,
        },
        {
            title: "i'm phuoc",
            active: false,
            imageURL: myname,
        },
        {
            title: "fantastic",
            active: false,
            imageURL: fantastic,
        },
        {
            title: "stagnate",
            active: false,
            imageURL: stagnate,
        },
        {
            title: "compassion",
            active: false,
            imageURL: compassion,
        },
        {
            title: "luxury",
            active: false,
            imageURL: luxury,
        },
    ]);

    const [leatherColorItem, setLeatherColorItem] = useState([
        {
            title: "merinal",
            active: true,
            color: "#9D4D34",
        },
        {
            title: "merinal",
            active: false,
            color: "#907455",
        },
        {
            title: "merinal",
            active: false,
            color: "#9BB4C0",
        },
        {
            title: "merinal",
            active: false,
            color: "#DA6666",
        },
        {
            title: "merinal",
            active: false,
            color: "#594D2F",
        },
        {
            title: "merinal",
            active: false,
            color: "#AF854B",
        },
        {
            title: "merinal",
            active: false,
            color: "#792614",
        },
        {
            title: "merinal",
            active: false,
            color: "#2E0506",
        },
        {
            title: "merinal",
            active: false,
            color: "#752210",
        },
        {
            title: "merinal",
            active: false,
            color: "#383010",
        },
        {
            title: "merinal",
            active: false,
            color: "#DA6666",
        },
        {
            title: "merinal",
            active: false,
            color: "#000000",
        },
    ]);

    return (
        <div className="content-right">
            <SelectFilter />
            <div className="title">select leather type</div>
            <div className="leather_price">tumbled leather $100</div>
            <div className="leather_type">
                {leatherTypeItem.map((item: Item, idx: number) => (
                    <ContentItem
                        imageURL={item.imageURL}
                        type="type"
                        key={idx}
                        isActive={item.active}
                    >
                        {item.title}
                    </ContentItem>
                ))}
            </div>
            <div className="title">select leather type</div>
            <div className="leather_color">
                {leatherColorItem.map((item: Item, idx: number) => (
                    <ContentItem
                        type="color"
                        color={item.color}
                        key={idx}
                        isActive={item.active}
                    >
                        {item.title}
                    </ContentItem>
                ))}
            </div>
            <div className="title">select pattern type</div>
            <div className="leather_price">humble $30</div>
            <div className="leather_type">
                {[...leatherTypeItem].map((item: Item, idx: number) => (
                    <ContentItem
                        type="type"
                        imageURL={item.imageURL}
                        key={idx}
                        isActive={item.active}
                    >
                        {item.title}
                    </ContentItem>
                ))}
            </div>
        </div>
    );
};

export default ContentRight;
