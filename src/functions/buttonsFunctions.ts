import React from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import axios from "axios";

export const clearCanvas = (canvas: React.RefObject<ReactSignatureCanvas>) => {
    canvas.current?.clear()
}

export const submitCanvas = (canvas: React.RefObject<ReactSignatureCanvas>) => {

}