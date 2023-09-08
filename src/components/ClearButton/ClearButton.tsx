import React from "react"
import { FC } from "react"
import style from "./ClearButton.module.scss"
import RactSignatureCanvas from 'react-signature-canvas'

type Props = {
    canvas: React.RefObject<RactSignatureCanvas>
}

const ClearButton: FC<Props> = ({ canvas }) => {
    const handleClick = () => {
        console.log(canvas.current);
        canvas.current?.clear();
        console.log("⚪ Canvas cleaared")
    }

    return (
        <div className={style.container} onClick={handleClick}>
            <div>Clear board</div>
        </div>
    )
}

export default ClearButton