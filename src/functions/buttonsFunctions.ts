import React from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import axios from "axios";


let baseApiUrl: string | undefined = ""

export const clearCanvas = (canvas: React.RefObject<ReactSignatureCanvas>) => {
    canvas.current?.clear()
}

export const submitCanvas = (canvas: React.RefObject<ReactSignatureCanvas>) => {
    const base64Image = canvas.current?.toDataURL()

    console.log("🚀 ~ file: buttonsFunctions.ts:14 ~ submitCanvas ~ base64Image:", base64Image)

    const requestBody = {
        buffer: base64Image
    }

    axios.post(`${baseApiUrl}api/predict`, requestBody)
        .then((response => {
            const predicted_value = response.data.predicted;
            console.log("🔢", predicted_value)
        }))
        .catch(err => console.log(err))
}

export const setApiUrl = (apiUrlInput: React.RefObject<HTMLInputElement>) => {
    baseApiUrl = apiUrlInput.current?.value;
    console.log("🚀 ~ file: buttonsFunctions.ts:18 ~ setApiUrl ~ baseApiUrl:", baseApiUrl)
}