interface Props {
    children: string;
    active?: boolean;
}

const defaultProps = {
    active: false,
};

const BreadcrumbChild = ({ children, active }: Props) => {
    return (
        <div
            className={!active ? "breadcrumb_child" : "breadcrumb_child active"}
        >
            {children}
        </div>
    );
};

BreadcrumbChild.defaultProps = defaultProps;

export default BreadcrumbChild;
