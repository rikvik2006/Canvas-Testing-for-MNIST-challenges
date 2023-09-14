import SigatureCanvas from "react-signature-canvas"
import style from "./style/App.module.scss"
import { FC, useRef } from "react"
import ReactSignatureCanvas from "react-signature-canvas"
import Button from "./components/Button/Button"
import { clearCanvas, setApiUrl, submitCanvas } from "./functions/buttonsFunctions"

const App: FC = () => {
  const canvas = useRef<ReactSignatureCanvas>(null)
  const apiUrlInput = useRef<HTMLInputElement>(null);

  return (
    <div className={style.container}>
      <div className={style.drawAreaContainer}>
        <div className={style.apiLinkContainer}>
          <input type="text" ref={apiUrlInput} />
          <Button type="SUBMIT" callback={() => setApiUrl(apiUrlInput)}>Set API URL</Button>
        </div>
        <SigatureCanvas
          ref={canvas}
          penColor="white"
          minWidth={10}
          maxWidth={15}
          backgroundColor="black"
          canvasProps={
            {
              width: 300,
              height: 300,
              className: style.canvas
            }
          } />
      </div>

      <div className={style.buttonsContainer}>
        <Button callback={() => clearCanvas(canvas)}>Clear Board</Button>
        <Button callback={async () => await submitCanvas(canvas)} type="SUBMIT">Submit</Button>
        <Button callback={() => clearCanvas(canvas)} type="REMOVE">Remove</Button>
        <Button callback={() => clearCanvas(canvas)} type="WARNING">Warning</Button>
      </div>
    </div>
  )
}

export default App
