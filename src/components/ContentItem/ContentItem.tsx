type Type = "color" | "type";

interface Props {
    children: string;
    isActive?: boolean;
    type?: Type;
}

const defaultProps = {
    isActive: false,
    type: "type",
};

const ContentItem = ({ children, isActive, type }: Props) => {
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
                    <div className="circle"></div>
                </div>
                <div className="product-title active">{children}</div>
            </div>
        );
    }

    return (
        <div className={isActive ? "item active" : "item"}>
            <div className="thumbnail">{children}</div>
        </div>
    );
};

ContentItem.defaultProps = defaultProps;

export default ContentItem;
