import { useCanvas } from "../canvas/CanvasContext";

export default function CopyToClipboard() {
  const { canvasRef } = useCanvas();


  const copyImage = async () => {
    try {

    const canvas = canvasRef.current;
    canvas.toBlob(async (blob:any)=>{
        console.log(blob.type)
        await navigator.clipboard.write([
            new ClipboardItem({
              [blob.type]: blob
            })
          ])
        alert("Drowing added to the clipbard");
    })

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button type="button" onClick={copyImage}>
        Embed Image
      </button>
    </>
  );
}
