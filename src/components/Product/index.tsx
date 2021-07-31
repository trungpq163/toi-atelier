import zoom from "../../assets/images/zoom.svg";
import swing from "../../assets/images/swing.svg";

interface Props {
    children: string;
    imageURL: string;
}

const Product = ({ children, imageURL }: Props) => {
    return (
        <div className="product">
            <div className="title">{children}</div>
            <div className="product_intro">
                <div className="thumbnail">
                    <img src={imageURL} alt="product thumbnail" />
                </div>
                <div className="icon">
                    <img src={zoom} alt="zoom" />
                    <img src={swing} alt="swing" />
                </div>
            </div>
        </div>
    );
};

export default Product;
