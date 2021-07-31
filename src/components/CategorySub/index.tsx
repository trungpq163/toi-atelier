interface Props {
    children: string;
    imageURL: string;
}

const CategorySub = ({ children, imageURL }: Props) => {
    return (
        <div className="category_sub">
            <div className="category_sub--item">
                <div className="title">{children}</div>
                <div className="icon">
                    <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CategorySub;
