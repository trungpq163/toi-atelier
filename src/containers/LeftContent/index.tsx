import Breadcrumb from "../Breadcrumb";
import Product from "../../components/Product";

import productThumbnail from "../../assets/images/product_thumbnail.svg";
import next from "../../assets/images/next.svg";

const ContentLeft = () => {
    return (
        <div className="content-left">
            <Breadcrumb />
            <Product imageURL={productThumbnail}>
                Convertible Mini Merinal
            </Product>
            <div className="product_details__dropdown">
                <div className="title">Product details</div>
                <img src={next} alt="next" />
            </div>
        </div>
    );
};

export default ContentLeft;
