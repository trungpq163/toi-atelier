import BreadcrumbChild from "../../components/BreadcrumbChild/BreadcrumbChild";

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            <BreadcrumbChild>Home</BreadcrumbChild>
            <span>&ensp; - &ensp;</span>
            <BreadcrumbChild>Design your own</BreadcrumbChild>
            <span>&ensp; - &ensp;</span>
            <BreadcrumbChild active={true}>
                convertible mini merinal
            </BreadcrumbChild>
        </div>
    );
};

export default Breadcrumb;
