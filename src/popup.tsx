import { windowCanvas } from "./contents/window-canvas";


function IndexPopup() {

  return (
    <>
      <p>Welcome to Power Canvas for Notion</p>
      <button type="button" onClick={()=>windowCanvas("none")}>Open a new Canvas</button>
    </>
  );
}

export default IndexPopup;
