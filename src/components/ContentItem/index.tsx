type Type = "color" | "type";

interface Props {
    children: string;
    isActive?: boolean;
    type?: Type;
    color?: string;
    imageURL?: string;
}

const defaultProps = {
    isActive: false,
    type: "type",
    color: "#fff",
    imageURL: "",
};

const ContentItem = ({ children, isActive, type, color, imageURL }: Props) => {
    if (type === "color") {
        return (
            <div className="item">
                <div
                    className={
                        isActive
                            ? "circle-container active"
                            : "circle-container"
                    }
                >
                    <div
                        className="circle"
                        style={{
                            backgroundColor: `${color}`,
                        }}
                    ></div>
                </div>
                <div
                    className={
                        isActive ? "product-title active" : "product-title "
                    }
                >
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={isActive ? "item active" : "item"}>
            <div
                className="thumbnail"
                style={{
                    background: `url(${imageURL})`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

ContentItem.defaultProps = defaultProps;

export default ContentItem;
