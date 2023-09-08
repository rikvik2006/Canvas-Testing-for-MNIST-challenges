import { FC } from "react";
import style from "./Button.module.scss";

type Props = {
    children?: string;
    type?: "DEFAULT" | "SUBMIT" | "REMOVE" | "WARNING";
    callback: () => void;
}

const Button: FC<Props> = ({ children, type = "DEFAULT", callback }) => {
    const handleClick = () => {
        callback()
    }

    return (
        <div className={`${style.container} ${style[type.toLowerCase()]}`} onClick={handleClick}>
            <div>{children}</div>
        </div>
    )
}

export default Button