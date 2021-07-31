type Position = "left" | "right";

interface Props {
    position?: Position;
    justIcon?: boolean;
    children?: string;
    imageURL?: string;
    active?: boolean;
}

const defaultProps = {
    position: "left",
    justIcon: false,
    active: false,
    children: "",
    imageURL: "",
};

const HeaderItem = ({
    children,
    position,
    imageURL,
    justIcon,
    active,
}: Props) => {
    if (justIcon === true) {
        return (
            <div className="item">
                <img className="icon" src={imageURL} alt="" />
            </div>
        );
    }

    if (position === "left" && active === true) {
        return (
            <div className="item">
                <div className="active-background">
                    <img src={imageURL} alt="" />
                    <span className="title">{children}</span>
                </div>
            </div>
        );
    }

    if (position === "right" && active === true) {
        return (
            <div className="item">
                <div className="menu-title active">{children}</div>
            </div>
        );
    }

    if (position === "left") {
        return (
            <div className="item">
                <img src={imageURL} alt="" />
                <span className="title">{children}</span>
            </div>
        );
    }

    if (position === "right") {
        return (
            <div className="item">
                <div className="menu-title">{children}</div>
            </div>
        );
    }

    return <></>;
};

HeaderItem.defaultProps = defaultProps;

export default HeaderItem;
