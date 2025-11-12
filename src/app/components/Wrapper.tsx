import clsx from "clsx";
import {
    Fragment,
    ReactNode
} from "react";

type wrapperProps = {
    attributes?: React.HTMLAttributes<HTMLDivElement>;
    className?: string;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: wrapperProps) => {
    const {
        attributes,
        className,
        children
    } = props;

    return (
        <div
        {...attributes}
        className={clsx(`${className || ""} wrapper`)}>
            {children}
        </div>
    );
};

export default Wrapper;