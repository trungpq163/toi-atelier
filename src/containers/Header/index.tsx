import HeaderItem from "../../components/HeaderItem";

import glope from "../../assets/images/glope.svg";
import user from "../../assets/images/user.svg";
import cart from "../../assets/images/cart.svg";
import search from "../../assets/images/search.svg";
import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="left-header">
                <HeaderItem position="left" imageURL={glope}>
                    English
                </HeaderItem>
                <HeaderItem position="left" imageURL={user} active={true}>
                    Login
                </HeaderItem>
                <HeaderItem imageURL={cart} justIcon={true} />
                <HeaderItem imageURL={search} justIcon={true} />
            </div>
            <div className="center-header">
                <img src={logo} alt="logo" />
            </div>
            <div className="right-header">
                <HeaderItem position="right">Design your own</HeaderItem>
                <HeaderItem position="right">Collection</HeaderItem>
                <HeaderItem position="right" active={true}>
                    Bags
                </HeaderItem>
                <HeaderItem position="right">Our story</HeaderItem>
                <HeaderItem position="right">News</HeaderItem>
                <HeaderItem position="right">Contract</HeaderItem>
            </div>
        </div>
    );
};

export default Header;
